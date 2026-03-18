# BackendIntegration.md

> **Project:** lumen-lingo-backend
> **Version:** 1.0.0
> **Authors:** Staff Product Owner + Staff Engineering
> **Last Updated:** 2026-03-18
> **Status:** Implementation-Ready Specification

---

## 0. System Vision & Architecture Principles

### 0.1 System Identity

lumen-lingo-backend is NOT a CRUD API. It is the **Control Layer** and **Intelligence Layer** for the Lumen Lingo ecosystem — a language-learning iOS application with a premium subscription model, tiered membership access, and immersive UX features including soundscapes, breathing orbs, quantum flow visualisations, and nebula drift backgrounds.

The backend serves three distinct roles:

1. **Control Layer** — All access-control decisions originate server-side. The iOS client requests permission; it never self-authorises. Feature gating, entitlement resolution, rate limiting, and abuse prevention are backend responsibilities.
2. **Intelligence Layer** — Feature flags, A/B experimentation, tier-based content unlocking, and personalisation signals flow from backend to client. The client renders; the backend decides.
3. **Source of Truth** — User state, subscription lifecycle, entitlement snapshots, and audit trails live in PostgreSQL. RevenueCat and Firebase are inputs; PostgreSQL is the canonical record.

### 0.2 Architecture Principles

| Principle | Enforcement |
|---|---|
| **Zero Trust Client** | Every API request is authenticated (Firebase JWT) and authorised (tier + entitlement check). No business logic executes on-device. |
| **Idempotent Mutations** | All POST/PUT/PATCH endpoints accept an `Idempotency-Key` header. Duplicate requests return cached responses, not duplicate side effects. |
| **Event-Sourced Subscriptions** | Subscription state changes are recorded as immutable events. Current state is derived from the event log. This enables audit, replay, and reconciliation. |
| **Contract-First API** | OpenAPI 3.1 schema is the single source of truth for all API contracts. iOS and admin clients are generated from this schema. |
| **Fail Closed** | If entitlement resolution fails (RevenueCat timeout, DB unavailable), the user receives their last-known-good entitlement set, never an escalated one. Degraded mode defaults to `free` tier. |
| **Observability by Default** | Every request emits structured JSON logs with `request_id`, `user_id`, `tier`, `duration_ms`, and `outcome`. No request is invisible. |
| **Environment Parity** | All five environments (dev, qa, uat, pre-prod, prod) run identical Docker images. Only configuration differs. |

### 0.3 Architectural Boundaries

```
┌──────────────────────────────────────────────────────────────────┐
│                        iOS Client (Swift)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │
│  │TierManager│  │AuthService│  │APIClient │  │RevenueCat SDK   │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘ │
└───────────┬──────────┬──────────┬──────────────────┬─────────────┘
            │          │          │                    │
         Firebase   Firebase    HTTPS               RevenueCat
          Auth       JWT      (API v1)              Webhooks
            │          │          │                    │
┌───────────▼──────────▼──────────▼────────────────────▼───────────┐
│                    lumen-lingo-backend (Rails API)                │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────────────┐ │
│  │ Auth Module  │  │ Entitlements │  │  Subscription Lifecycle  │ │
│  │ (JWT verify) │  │  Resolver    │  │  (RevenueCat webhooks)   │ │
│  └─────────────┘  └──────────────┘  └──────────────────────────┘ │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────────────┐ │
│  │ Feature Flags│  │ Admin API    │  │  Background Jobs         │ │
│  │ Engine       │  │ (React SPA)  │  │  (Sidekiq + Redis)       │ │
│  └─────────────┘  └──────────────┘  └──────────────────────────┘ │
└──────────────────────────┬───────────────────────────────────────┘
                           │
              ┌────────────▼────────────┐
              │   PostgreSQL + Redis     │
              │   (Source of Truth)      │
              └─────────────────────────┘
```

### 0.4 Technology Decisions

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| API Framework | Ruby on Rails (API-only) | 8.0+ | Mature ecosystem, convention-over-configuration, excellent ORM, battle-tested at scale |
| Database | PostgreSQL | 16+ | JSONB for flexible entitlement snapshots, row-level security, partitioning for audit logs |
| Cache / Queue Broker | Redis | 7+ | Sidekiq dependency, rate-limiting counters, session cache, pub/sub for real-time events |
| Background Jobs | Sidekiq Pro | 7+ | Reliable job processing, batches, rate limiting, dead-set management |
| Container Runtime | Docker | 25+ | Deterministic builds, environment parity |
| Orchestration | Kubernetes | 1.30+ | Horizontal scaling, rolling deployments, health checks, secrets management |
| Auth Provider | Firebase Authentication | Latest | Apple Sign-In, Google, social login — pre-built identity without building auth infra |
| Subscription Provider | RevenueCat | Latest | Handles App Store receipt validation, subscription lifecycle, cross-platform entitlements |
| Admin Frontend | React 19 + Tailwind CSS 4 | Latest | Component-driven SPA, utility-first styling, fast iteration |
| API Documentation | OpenAPI 3.1 | — | Machine-readable contracts, client codegen, request validation |

---

## 1. Repository & Monorepo Structure

### EPIC: Repository Foundation & Developer Experience

**Goal:**
Establish a monorepo structure that houses the Rails API, admin frontend, infrastructure-as-code, and shared tooling under a single repository with clear boundaries, enforced code ownership, and Makefile-driven developer workflows that eliminate onboarding friction.

**Rationale:**
A monorepo ensures atomic commits across API + admin frontend, shared CI/CD pipelines, and unified versioning. Separate repos for a team this size would introduce coordination overhead without proportional benefit. The Makefile abstraction means engineers never need to remember Docker Compose flags, migration commands, or test invocations — every action is a single `make` target.

**Success Metrics:**
- New engineer from clone to running test suite: < 10 minutes
- All CI checks pass on a clean clone with `make ci`
- Zero manual steps required beyond `make setup`

#### Story: Define Monorepo Directory Layout

**Description:**
Create the canonical directory structure for the lumen-lingo-backend monorepo. Every directory must have a clear owner and purpose. No orphan files at root level except dotfiles and the Makefile.

**Acceptance Criteria:**
- [ ] Repository root contains exactly: `api/`, `admin/`, `infra/`, `docs/`, `scripts/`, `.github/`, `Makefile`, `docker-compose.yml`, `docker-compose.override.yml`, `.env.example`, `.gitignore`, `README.md`
- [ ] `api/` contains a Rails 8.0+ API-only application with standard Rails directory structure
- [ ] `admin/` contains a Vite-based React 19 + Tailwind CSS 4 application
- [ ] `infra/` contains `k8s/`, `terraform/`, and `docker/` subdirectories
- [ ] `docs/` contains `openapi/`, `architecture/`, and `runbooks/` subdirectories
- [ ] `scripts/` contains developer utility scripts (seed, migrate, deploy helpers)
- [ ] `.github/` contains CI workflows, PR templates, and CODEOWNERS
- [ ] CODEOWNERS file maps `api/**` to `@backend-team`, `admin/**` to `@frontend-team`, `infra/**` to `@platform-team`

**Technical Notes:**
- Rails app generated with `rails new api --api --database=postgresql --skip-javascript --skip-asset-pipeline --skip-action-mailer --skip-action-mailbox --skip-action-text --skip-active-storage`
- Admin app generated with `npm create vite@latest admin -- --template react`
- Docker Compose defines services: `api`, `admin`, `postgres`, `redis`, `sidekiq`

**Subtasks:**
- Generate Rails API-only application in `api/`
- Generate React + Vite application in `admin/`
- Create `infra/docker/Dockerfile.api` (multi-stage: build + runtime)
- Create `infra/docker/Dockerfile.admin` (multi-stage: build + nginx)
- Create `docker-compose.yml` with all five services
- Create `docker-compose.override.yml` for local volume mounts and debug ports
- Create `.env.example` with all required environment variables (values as `CHANGE_ME`)
- Create CODEOWNERS file

#### Story: Implement Makefile Developer Workflow

**Description:**
Create a Makefile that abstracts every developer action into memorable, discoverable targets. Engineers should never need to know Docker Compose syntax, bundle commands, or yarn invocations. The Makefile is the single entry point for all local development.

**Acceptance Criteria:**
- [ ] `make setup` — clones deps, builds containers, creates DB, runs migrations, seeds data
- [ ] `make up` — starts all services in foreground with log tailing
- [ ] `make down` — stops all services, preserves volumes
- [ ] `make test` — runs full API test suite (RSpec) inside container
- [ ] `make test-admin` — runs admin frontend tests (Vitest) inside container
- [ ] `make lint` — runs Rubocop + ESLint + Prettier across both apps
- [ ] `make console` — opens Rails console inside running API container
- [ ] `make db-migrate` — runs pending migrations
- [ ] `make db-rollback` — rolls back last migration
- [ ] `make db-seed` — seeds development data
- [ ] `make logs` — tails all container logs
- [ ] `make ci` — runs lint + test + security audit (mirrors CI pipeline exactly)
- [ ] `make openapi-validate` — validates OpenAPI schema
- [ ] `make help` — lists all targets with descriptions
- [ ] Every target includes a brief `## description` comment parsed by `make help`

**Technical Notes:**
- Use `.PHONY` for all targets
- Docker Compose commands use `docker compose` (V2 syntax, not `docker-compose`)
- Test targets exit with non-zero on failure (for CI compatibility)
- `make setup` is idempotent — safe to run multiple times

**Subtasks:**
- Create Makefile with all targets
- Ensure `make setup` handles first-run and re-run scenarios
- Add `make help` auto-generated from comments
- Test every target on clean clone

#### Story: Configure Git Workflow & Branch Protection

**Description:**
Establish branch naming conventions, PR template, and merge requirements. All changes flow through pull requests with mandatory review and CI passage.

**Acceptance Criteria:**
- [ ] Default branch is `main` (production-deployed)
- [ ] Branch naming: `feature/<ticket>-<slug>`, `fix/<ticket>-<slug>`, `chore/<ticket>-<slug>`
- [ ] PR template includes: Summary, Type (feature/fix/chore), Testing Done, Screenshots (if admin), Migration Notes
- [ ] Branch protection on `main`: require 1 approval, require CI pass, require up-to-date branch, no force push
- [ ] Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `ci:`
- [ ] `.github/workflows/ci.yml` triggers on PR to `main` and push to `main`

**Technical Notes:**
- CI workflow runs: lint, test (API), test (admin), OpenAPI validation, security audit (bundler-audit + npm audit)
- Use GitHub Actions with matrix strategy for Ruby + Node versions
- Cache Docker layers, bundle gems, and node_modules between runs

**Subtasks:**
- Create `.github/pull_request_template.md`
- Create `.github/workflows/ci.yml`
- Document branch protection rules in `docs/architecture/branching.md`
- Add `.github/CODEOWNERS`

---

## 2. Infrastructure & DevOps

### EPIC: Containerised Development & Deployment Infrastructure

**Goal:**
Build a Docker + Kubernetes infrastructure that provides identical runtime environments from local development through to production. Every deployment is a tagged, immutable container image. No SSH, no manual server changes, no snowflake environments.

**Rationale:**
Environment drift is the root cause of "works on my machine" failures and production-only bugs. By running the same Docker image across all five environments (dev, qa, uat, pre-prod, prod) with only configuration varying, we eliminate entire categories of deployment failures. Kubernetes provides self-healing, horizontal scaling, and zero-downtime deploys.

**Success Metrics:**
- Zero environment-specific Docker images (one image, five configs)
- Deployment from merge to production: < 15 minutes (including automated testing)
- Rollback to previous version: < 2 minutes
- Zero manual SSH access required for any operational task

#### Story: Build Multi-Stage API Docker Image

**Description:**
Create a production-grade Docker image for the Rails API that uses multi-stage builds to minimise image size, runs as a non-root user, and includes health check endpoints.

**Acceptance Criteria:**
- [ ] `infra/docker/Dockerfile.api` uses multi-stage build: `builder` stage installs gems, `runtime` stage copies only compiled artefacts
- [ ] Final image based on `ruby:3.3-slim` (not `ruby:3.3` — no build tools in runtime)
- [ ] Application runs as user `app` (UID 1000), not root
- [ ] Image size < 350MB
- [ ] `HEALTHCHECK` instruction pings `/health` endpoint
- [ ] Gems installed with `--without development test` in production stage
- [ ] `RAILS_ENV=production` baked into image
- [ ] Secrets injected via environment variables at runtime, never baked into image
- [ ] `.dockerignore` excludes: `.git`, `tmp`, `log`, `node_modules`, `spec`, `.env*`

**Technical Notes:**
- Use `COPY --from=builder` to copy only `/usr/local/bundle` and `/app` directories
- Precompile bootsnap cache in builder stage: `bundle exec bootsnap precompile --gemfile app/ lib/`
- Set `MALLOC_ARENA_MAX=2` to control memory in containerised Ruby
- Use `ENTRYPOINT ["bundle", "exec"]` with `CMD ["puma", "-C", "config/puma.rb"]`

**Subtasks:**
- Create `infra/docker/Dockerfile.api` with multi-stage build
- Create `api/.dockerignore`
- Configure `config/puma.rb` for containerised operation (bind `0.0.0.0:3000`, workers from `WEB_CONCURRENCY` env)
- Add `/health` endpoint that checks DB + Redis connectivity
- Verify image builds and passes health check locally

#### Story: Build Admin Frontend Docker Image

**Description:**
Create a Docker image for the React admin panel that builds the SPA and serves it via Nginx with security headers.

**Acceptance Criteria:**
- [ ] `infra/docker/Dockerfile.admin` uses multi-stage: `builder` (Node 22) compiles assets, `runtime` (nginx:alpine) serves static files
- [ ] Nginx config includes security headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Content-Security-Policy`, `Strict-Transport-Security`
- [ ] All routes fallback to `index.html` (SPA routing)
- [ ] Image size < 50MB
- [ ] Gzip compression enabled for JS, CSS, SVG, JSON
- [ ] API proxy from `/api/*` to backend service (configurable via env)
- [ ] Non-root Nginx process (user `nginx`, UID 101)

**Technical Notes:**
- Vite build output goes to `/usr/share/nginx/html`
- Nginx config injected from `infra/docker/nginx/admin.conf`
- Use `envsubst` at container start to template `API_BASE_URL` into Nginx config
- Cache busting via Vite's content-hashed filenames

**Subtasks:**
- Create `infra/docker/Dockerfile.admin`
- Create `infra/docker/nginx/admin.conf` with security headers and SPA fallback
- Create `admin/.dockerignore`
- Add entrypoint script for environment variable substitution
- Verify static assets served correctly with security headers

#### Story: Define Docker Compose Development Environment

**Description:**
Create a Docker Compose configuration that spins up the complete development stack with hot-reload for both API and admin, persistent database volumes, and correct networking.

**Acceptance Criteria:**
- [ ] `docker-compose.yml` defines services: `api`, `admin`, `postgres`, `redis`, `sidekiq`
- [ ] `api` service mounts `./api` as volume for hot-reload (no rebuild on code change)
- [ ] `admin` service mounts `./admin/src` as volume for Vite HMR
- [ ] `postgres` uses named volume `ll_pgdata` for persistence across restarts
- [ ] `redis` uses named volume `ll_redis_data` for persistence
- [ ] `sidekiq` shares the same image as `api` but runs `bundle exec sidekiq`
- [ ] All services on shared network `ll_network`
- [ ] Health checks defined for `postgres` (pg_isready) and `redis` (redis-cli ping)
- [ ] `api` and `sidekiq` depend on `postgres` and `redis` with `condition: service_healthy`
- [ ] Port mappings: api→3000, admin→5173, postgres→5432, redis→6379

**Technical Notes:**
- `docker-compose.override.yml` adds debug ports and verbose logging (not committed to CI)
- PostgreSQL uses `POSTGRES_DB=lumen_lingo_dev`, `POSTGRES_USER=lumen`, `POSTGRES_PASSWORD` from `.env`
- Redis runs without password in dev (password required in non-dev environments)

**Subtasks:**
- Create `docker-compose.yml` with all services
- Create `docker-compose.override.yml` for local development overrides
- Verify `make up` brings all services to healthy state
- Verify hot-reload works for both API and admin
- Document port mappings in README

#### Story: Define Kubernetes Manifests for Production

**Description:**
Create Kubernetes manifests that deploy the API, admin, Sidekiq workers, and configure ingress, autoscaling, and resource limits. Manifests are templated with environment-specific values injected at deploy time.

**Acceptance Criteria:**
- [ ] `infra/k8s/base/` contains: `api-deployment.yml`, `api-service.yml`, `admin-deployment.yml`, `admin-service.yml`, `sidekiq-deployment.yml`, `ingress.yml`, `hpa.yml`
- [ ] API deployment: 2 replicas minimum, 8 maximum, resource requests `256Mi/250m`, limits `512Mi/500m`
- [ ] Sidekiq deployment: 2 replicas minimum, 4 maximum, resource requests `512Mi/250m`, limits `1Gi/500m`
- [ ] Admin deployment: 2 replicas minimum, 4 maximum, resource requests `64Mi/50m`, limits `128Mi/100m`
- [ ] HPA scales API on CPU > 70% average
- [ ] Readiness probe: `GET /health` every 10s, failure threshold 3
- [ ] Liveness probe: `GET /health` every 30s, failure threshold 5
- [ ] Rolling update strategy: `maxSurge: 1`, `maxUnavailable: 0` (zero-downtime)
- [ ] Secrets mounted from Kubernetes Secrets (not ConfigMaps)
- [ ] `infra/k8s/overlays/` contains per-environment patches: `dev/`, `qa/`, `uat/`, `pre-prod/`, `prod/`

**Technical Notes:**
- Use Kustomize for environment overlays (not Helm — reduces templating complexity)
- Each overlay patches: replica count, resource limits, ingress hostname, image tag
- Secrets reference external secrets operator (placeholder for Vault/AWS Secrets Manager)
- Pod disruption budget: `minAvailable: 1` for API in production

**Subtasks:**
- Create base manifests in `infra/k8s/base/`
- Create Kustomize overlays for all five environments
- Create `infra/k8s/base/kustomization.yml` and per-overlay `kustomization.yml`
- Document deployment process in `docs/runbooks/deployment.md`
- Add pod disruption budgets for production

#### Story: Implement Environment Isolation Strategy

**Description:**
Define the complete environment isolation model. Each environment must be fully independent with its own database, Redis instance, Firebase project, and RevenueCat configuration. No shared state between environments.

**Acceptance Criteria:**
- [ ] Five environments defined: `dev`, `qa`, `uat`, `pre-prod`, `prod`
- [ ] Each environment has: dedicated PostgreSQL database, dedicated Redis instance, dedicated Firebase project, dedicated RevenueCat app
- [ ] Environment determined by single env var: `LUMEN_ENV` (not `RAILS_ENV` — Rails env is always `production` outside dev)
- [ ] Configuration loaded from: environment variables > Rails credentials (encrypted) > defaults
- [ ] No environment can access another environment's database or Redis
- [ ] `pre-prod` mirrors `prod` configuration exactly (same resource limits, same replica count) — differs only in data and DNS
- [ ] Secrets management uses placeholder pattern: `docs/secrets/` contains `<ENV>.secrets.example` listing all required secrets with dummy values

**Technical Notes:**
- `LUMEN_ENV` drives: database name suffix, Redis DB number, Firebase project selection, RevenueCat API key selection
- Rails initializer loads environment-specific config: `config/environments/lumen/#{ENV['LUMEN_ENV']}.rb`
- Terraform workspaces map 1:1 to `LUMEN_ENV` values

**Subtasks:**
- Create `config/lumen_env.rb` initializer that validates `LUMEN_ENV` is set and valid
- Create per-environment config files
- Create `docs/secrets/` with example files for each environment
- Document environment isolation model in `docs/architecture/environments.md`

---

## 3. Authentication & Identity (Firebase)

### EPIC: Firebase Authentication Integration & JWT Verification Pipeline

**Goal:**
Implement a zero-trust authentication layer where every API request is verified against Firebase Authentication. The backend never trusts the client's claim of identity — it cryptographically verifies every token on every request. Support Apple Sign-In as the primary auth method, with Google Sign-In and passwordless email/SMS magic link (OTP) as secondary paths. The system never stores or accepts passwords — all authentication is social or one-time-code based.

**Rationale:**
Firebase Authentication handles the complex, security-critical identity flows (Apple Sign-In token exchange, OAuth state management, account linking, passwordless email link/OTP) that would take months to build and maintain in-house. The backend's responsibility is limited to JWT verification and user provisioning — a well-defined, testable boundary. By verifying Firebase JWTs server-side using Google's public JWKS endpoint, we maintain cryptographic proof of identity without managing session tokens. Passwords are explicitly excluded from the system — they are a liability (phishing, credential stuffing, breach exposure). All auth flows use either social identity providers (Apple, Google) or Firebase's built-in passwordless methods (email magic link, SMS OTP).

**Success Metrics:**
- 100% of API requests (except `/health` and `/webhooks/*`) require valid Firebase JWT
- Token verification latency: < 5ms (cached JWKS keys)
- Zero successful requests with expired, malformed, or tampered tokens
- Account provisioning on first login: < 200ms

#### Story: Implement Firebase JWT Verification Middleware

**Description:**
Build a Rack middleware that intercepts every inbound API request, extracts the `Authorization: Bearer <token>` header, verifies the Firebase JWT against Google's JWKS endpoint, and injects the authenticated user context into the request. Requests without valid tokens receive 401 immediately — no downstream processing occurs.

**Acceptance Criteria:**
- [ ] Middleware registered in `config/application.rb` as `FirebaseAuthMiddleware`
- [ ] Extracts Bearer token from `Authorization` header
- [ ] Verifies JWT signature using RS256 against Google's JWKS endpoint (`https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com`)
- [ ] Validates claims: `iss` must be `https://securetoken.google.com/<FIREBASE_PROJECT_ID>`, `aud` must equal `FIREBASE_PROJECT_ID`, `exp` must be in the future, `iat` must be in the past, `sub` must be non-empty
- [ ] JWKS keys cached in Redis with TTL of 6 hours (Google rotates keys every ~24h)
- [ ] On cache miss, fetches fresh keys from Google and caches them
- [ ] On verification success: sets `request.env['lumen.firebase_uid']` and `request.env['lumen.firebase_claims']`
- [ ] On verification failure: returns `401 Unauthorized` with JSON body `{"error": "invalid_token", "message": "<specific reason>"}`
- [ ] Skips verification for paths: `/health`, `/webhooks/*`, `/api/v1/public/*`
- [ ] Logs every auth attempt (success/failure) with `firebase_uid`, `ip`, `user_agent`, outcome

**Technical Notes:**
- Use `jwt` gem (ruby-jwt) for RS256 verification
- JWKS cache key: `firebase:jwks:keys` in Redis
- Parse Google's x509 certificates to extract RSA public keys
- Handle clock skew: allow 30-second leeway on `exp` and `iat` claims
- Thread-safe: middleware must handle concurrent requests without race conditions on key refresh

**Subtasks:**
- Install `jwt` gem, add to Gemfile
- Create `app/middleware/firebase_auth_middleware.rb`
- Create `app/services/firebase/jwt_verifier.rb` — encapsulates token verification logic
- Create `app/services/firebase/jwks_cache.rb` — manages key fetching and Redis caching
- Add middleware to `config/application.rb`
- Write RSpec specs: valid token, expired token, wrong audience, wrong issuer, malformed token, missing header, cached keys, key rotation
- Add structured logging for auth events

#### Story: Implement User Provisioning on First Authentication

**Description:**
When a Firebase-authenticated user makes their first API request, automatically provision a local user record. This is the "just-in-time provisioning" pattern — no separate registration endpoint exists. The first authenticated request IS the registration. Subsequent requests resolve to the existing user.

**Acceptance Criteria:**
- [ ] `ApplicationController` includes `before_action :resolve_current_user`
- [ ] `resolve_current_user` looks up user by `firebase_uid` from the verified JWT
- [ ] If user exists: sets `@current_user` and continues
- [ ] If user does not exist: creates `User` record with `firebase_uid`, `email` (from JWT claims), `provider` (from JWT `firebase.sign_in_provider`), `tier: 'free'`, `trial_eligible: true`
- [ ] New user creation triggers `UserProvisionedEvent` (ActiveSupport::Notifications)
- [ ] New user creation enqueues `SyncUserEntitlementsJob` to fetch any existing RevenueCat entitlements
- [ ] User lookup is indexed: `users.firebase_uid` has unique B-tree index
- [ ] Provisioning is idempotent: concurrent first requests for the same `firebase_uid` do not create duplicate users (database unique constraint + rescue `ActiveRecord::RecordNotUnique`)
- [ ] `@current_user` is available to all controllers and serialisers via `current_user` method

**Technical Notes:**
- `User` model: `id (uuid)`, `firebase_uid (string, unique, not null)`, `email (string)`, `display_name (string, nullable)`, `avatar_url (string, nullable)`, `provider (string)`, `tier (string, default: 'free')`, `trial_eligible (boolean, default: true)`, `trial_started_at (datetime, nullable)`, `trial_ends_at (datetime, nullable)`, `last_seen_at (datetime)`, `created_at`, `updated_at`
- Use `has_secure_token :api_token` as a secondary auth mechanism for server-to-server calls (admin panel)
- `last_seen_at` updated on every request via `touch(:last_seen_at)` — throttled to once per 5 minutes to avoid excessive writes

**Subtasks:**
- Create migration: `create_users` table with all columns and indexes
- Create `app/models/user.rb` with validations and scopes
- Create `app/controllers/concerns/authenticatable.rb` concern
- Include concern in `ApplicationController`
- Write RSpec specs: first login creates user, subsequent login reuses user, concurrent creation handles race condition, user attributes populated from JWT

#### Story: Implement Token Refresh Guidance Endpoint

**Description:**
Provide an endpoint that iOS clients can call to check token validity and receive guidance on when to refresh. This prevents the client from making requests with soon-to-expire tokens that would fail mid-flight.

**Acceptance Criteria:**
- [ ] `GET /api/v1/auth/status` returns: `{ "valid": true, "expires_in_seconds": 1847, "should_refresh": false, "user_id": "uuid", "tier": "pro" }`
- [ ] `should_refresh` is `true` when token expires in < 5 minutes
- [ ] If token is invalid, returns 401 (handled by middleware, not this endpoint)
- [ ] Response includes current tier for client-side cache validation
- [ ] Endpoint is lightweight: no database queries beyond user lookup (tier cached on user record)

**Technical Notes:**
- `expires_in_seconds` calculated from JWT `exp` claim minus current time
- iOS client should call this on app foreground and before critical operations (purchase flow)
- Response cached by client for 60 seconds

**Subtasks:**
- Create `app/controllers/api/v1/auth_controller.rb` with `status` action
- Add route: `get 'auth/status'` in API v1 namespace
- Write RSpec specs: valid token returns status, near-expiry token sets should_refresh
- Document endpoint in OpenAPI schema

#### Story: Implement Apple Sign-In Server-Side Validation

**Description:**
When a user authenticates via Apple Sign-In through Firebase, the backend must handle Apple-specific edge cases: the `email` claim is only provided on first sign-in, the `is_private_email` flag indicates relay email usage, and Apple may revoke tokens. Implement server-side handling for Apple's credential revocation notifications.

**Acceptance Criteria:**
- [ ] User provisioning detects Apple provider from JWT `firebase.sign_in_provider: 'apple.com'`
- [ ] On first Apple sign-in: stores `email` (may be relay address), sets `provider: 'apple'`
- [ ] If `email` is Apple relay format (`*@privaterelay.appleid.com`), sets `is_relay_email: true` on user record
- [ ] `POST /webhooks/apple/revocation` endpoint handles Apple's Server-to-Server credential revocation notification
- [ ] On revocation: marks user as `auth_revoked: true`, enqueues `HandleAuthRevocationJob`
- [ ] `HandleAuthRevocationJob` suspends user's active sessions (invalidates cached auth) and sends admin notification
- [ ] Revocation webhook validates Apple's JWT signature before processing

**Technical Notes:**
- Apple sends revocation events to a pre-configured endpoint in App Store Connect
- Revocation payload is a signed JWT — verify using Apple's public key
- After revocation, the user's Firebase token may still be valid until expiry — backend should check `auth_revoked` flag on user lookup
- Relay email users can still receive emails via Apple's relay service

**Subtasks:**
- Add `is_relay_email` and `auth_revoked` columns to users table
- Create `app/controllers/webhooks/apple_controller.rb` with `revocation` action
- Create `app/jobs/handle_auth_revocation_job.rb`
- Update `resolve_current_user` to check `auth_revoked` flag and return 403 if true
- Write RSpec specs: Apple user provisioning, relay email detection, revocation handling
- Document webhook setup in `docs/runbooks/apple-auth.md`

---

## 4. Authorization & Feature Gating

### EPIC: Tier-Based Authorization & Dynamic Feature Gating Engine

**Goal:**
Build a server-side authorization system that enforces the Lumen Lingo tier model (Free → Pro → Elite → Royal) with per-feature granularity. The backend is the single authority on what a user can access. Feature access is resolved on every request, supports admin overrides, and can be changed without app deployment.

**Rationale:**
The iOS client currently computes tier-based access locally via `TierManager`. This is acceptable for UI rendering but insufficient for access control — a jailbroken client or modified binary could bypass local checks. The backend must independently enforce every access decision. Additionally, server-side gating enables A/B testing (e.g., giving 10% of free users temporary access to soundscapes), admin overrides (granting a reviewer Royal access), and graceful degradation during subscription processing delays.

**Success Metrics:**
- 100% of feature-gated API responses verified server-side (no client-trusted access)
- Entitlement resolution latency: < 3ms (Redis-cached)
- Admin override applied in < 1 second (no app restart required on client)
- Zero feature access granted beyond user's tier without explicit admin override

#### Story: Define Tier & Feature Database Schema

**Description:**
Create the database schema that represents the complete tier-to-feature mapping, mirroring the iOS `TierManager.allowedCount(for:tier:)` logic. This schema makes the tier model queryable, auditable, and modifiable without code deployment.

**Acceptance Criteria:**
- [ ] `tiers` table: `id (uuid)`, `slug (string, unique)`, `display_name (string)`, `rank (integer)`, `monthly_price_cents (integer)`, `annual_price_cents (integer, nullable)`, `is_active (boolean, default: true)`, `metadata (jsonb)`, `created_at`, `updated_at`
- [ ] Seeded tiers: `free` (rank 0), `pro` (rank 1), `elite` (rank 2), `royal` (rank 3), `trial` (rank 3)
- [ ] `features` table: `id (uuid)`, `slug (string, unique)`, `display_name (string)`, `description (text)`, `feature_type (enum: 'boolean', 'count', 'unlimited')`, `created_at`, `updated_at`
- [ ] Seeded features: `soundscapes`, `language_pairs`, `unlimited_practice`, `breathing_orbs`, `quantum_flow`, `nebula_drift`, `offline_mode`, `flashcard_deck_size`, `grammar_difficulty`, `word_builder_difficulty`
- [ ] `tier_features` join table: `id (uuid)`, `tier_id (references tiers)`, `feature_id (references features)`, `allowed_count (integer)`, `metadata (jsonb)`, `created_at`, `updated_at`
- [ ] Seeded `tier_features` match exactly the iOS `TierManager.allowedCount` matrix:
  - free/soundscapes → 0, pro/soundscapes → 1, elite/soundscapes → 8, royal/soundscapes → 12
  - free/language_pairs → 3, pro/language_pairs → 7, elite+royal/language_pairs → 25
  - free/unlimited_practice → 0, pro+/unlimited_practice → 1
  - free/breathing_orbs → 0, pro+/breathing_orbs → 6
  - free+pro/quantum_flow → 0, elite/quantum_flow → 4, royal/quantum_flow → 6
  - free+pro/nebula_drift → 0, elite/nebula_drift → 4, royal/nebula_drift → 6
  - free/offline_mode → 0, pro+/offline_mode → 1
  - free/flashcard_deck_size → 50, pro → 75, elite → 100, royal → 2147483647
  - free/grammar_difficulty → 1, pro → 2, elite+ → 3
  - free/word_builder_difficulty → 1, pro → 2, elite+ → 3
  - trial tier matches royal for all features
- [ ] Unique constraint on `(tier_id, feature_id)` in `tier_features`
- [ ] Index on `tiers.slug` and `features.slug`

**Technical Notes:**
- Use `2147483647` (Int32 max) for "unlimited" count values — matches iOS `Int.max` behaviour
- `metadata` JSONB columns allow future extensibility without migrations (e.g., storing A/B test variants)
- Seed data loaded via `db/seeds/tiers_and_features.rb` — idempotent (upsert pattern)

**Subtasks:**
- Create migration for `tiers` table
- Create migration for `features` table
- Create migration for `tier_features` join table
- Create models: `Tier`, `Feature`, `TierFeature` with associations
- Create seed file with all tier-feature combinations
- Write model specs: associations, validations, uniqueness constraint

#### Story: Implement Entitlement Resolver Service

**Description:**
Build the core `EntitlementResolver` service that computes a user's complete entitlement set — merging tier-based access, admin overrides, trial status, and grace periods into a single, authoritative entitlement snapshot. This service is called on every feature-gated request.

**Acceptance Criteria:**
- [ ] `EntitlementResolver.new(user).resolve` returns an `EntitlementSet` value object
- [ ] `EntitlementSet` contains: `tier_slug`, `features` (hash of feature_slug → allowed_count), `overrides` (array of active override slugs), `trial_active` (boolean), `trial_ends_at` (datetime or nil), `grace_period_active` (boolean), `resolved_at` (timestamp)
- [ ] Resolution priority (highest wins): admin override > grace period > trial > tier-based access
- [ ] Admin overrides: if user has an `entitlement_override` record for a feature, that count replaces tier-based count
- [ ] Trial: if `user.trial_active?` (trial_started_at present AND trial_ends_at > now), resolve as `royal` tier
- [ ] Grace period: if subscription lapsed within last 72 hours, maintain previous tier's entitlements
- [ ] Result cached in Redis: key `entitlements:#{user.id}`, TTL 5 minutes
- [ ] Cache invalidated on: tier change, override change, subscription event
- [ ] `EntitlementResolver.new(user).has_access?(feature_slug)` — convenience boolean
- [ ] `EntitlementResolver.new(user).allowed_count(feature_slug)` — convenience integer

**Technical Notes:**
- Redis cache uses `MessagePack` serialisation for speed (not JSON)
- Cache key includes a version counter: `entitlements:#{user.id}:v#{user.entitlement_version}` — incrementing version on any change invalidates without explicit delete
- The resolver NEVER raises exceptions — it falls back to free-tier entitlements on any error and logs the failure
- Thread-safe: no shared mutable state

**Subtasks:**
- Create `app/services/entitlement_resolver.rb`
- Create `app/value_objects/entitlement_set.rb`
- Create `entitlement_overrides` table: `id`, `user_id`, `feature_id`, `allowed_count`, `reason`, `granted_by_admin_id`, `expires_at`, `created_at`, `updated_at`
- Create `app/models/entitlement_override.rb`
- Add `entitlement_version` column to users table (integer, default 0)
- Implement Redis caching layer
- Write RSpec specs: free user resolution, pro user resolution, override supersedes tier, trial resolves as royal, grace period maintains access, cache hit, cache invalidation, fallback on error

#### Story: Implement Authorization Concern for Controllers

**Description:**
Create a reusable controller concern that provides declarative feature gating. Controllers annotate actions with required features, and the concern handles verification and denial automatically.

**Acceptance Criteria:**
- [ ] `Authorizable` concern provides `requires_feature(feature_slug, options = {})` class method
- [ ] Usage: `requires_feature :soundscapes, only: [:index, :show]`
- [ ] Before action resolves entitlements and checks if user has access to required feature
- [ ] On access denied: returns `403 Forbidden` with body `{"error": "feature_gated", "feature": "soundscapes", "required_tier": "pro", "current_tier": "free", "upgrade_url": "..."}`
- [ ] Response includes `required_tier` — the minimum tier needed for this feature (for client-side upgrade prompts)
- [ ] `requires_feature :flashcard_deck_size, minimum_count: 75` — checks that allowed_count meets a minimum threshold
- [ ] `current_entitlements` helper available in all controllers — returns the `EntitlementSet` for `@current_user`
- [ ] Entitlement resolution happens once per request (memoised)

**Technical Notes:**
- The concern calls `EntitlementResolver` internally — controllers never call it directly
- `required_tier` in the 403 response is looked up from `features.minimum_tier` (computed from `tier_features` where allowed_count > 0, minimum rank)
- Use `ActiveSupport::Concern` pattern with `included` and `class_methods` blocks

**Subtasks:**
- Create `app/controllers/concerns/authorizable.rb`
- Include in `ApplicationController`
- Add `minimum_tier` method to `Feature` model
- Write RSpec specs: access granted for correct tier, access denied for lower tier, override grants access, 403 response format
- Document usage pattern in `docs/architecture/authorization.md`

#### Story: Implement Feature Flags Engine

**Description:**
Build a lightweight feature flags system that allows toggling features for specific users, tiers, percentages of users, or globally. Feature flags are distinct from tier-based entitlements — they control backend behaviour and experimental features, not subscription access.

**Acceptance Criteria:**
- [ ] `feature_flags` table: `id (uuid)`, `key (string, unique)`, `description (text)`, `flag_type (enum: 'boolean', 'percentage', 'user_list', 'tier_list')`, `enabled (boolean, default: false)`, `percentage (integer, 0-100, nullable)`, `user_ids (uuid[], nullable)`, `tier_slugs (string[], nullable)`, `metadata (jsonb)`, `created_at`, `updated_at`
- [ ] `FeatureFlag.enabled?(key, user:)` — evaluates flag for given user
- [ ] Boolean flags: returns `enabled` value
- [ ] Percentage flags: deterministic hash of `"#{flag.key}:#{user.id}"` mod 100 < percentage (same user always gets same result)
- [ ] User list flags: returns `true` if `user.id` in `user_ids`
- [ ] Tier list flags: returns `true` if `user.tier` in `tier_slugs`
- [ ] Flags cached in Redis with TTL of 60 seconds
- [ ] Admin can create, update, and delete flags via admin API
- [ ] Flag changes are audit-logged: who changed what, when, previous value

**Technical Notes:**
- Percentage-based flags use `Digest::SHA256.hexdigest("#{key}:#{user_id}").to_i(16) % 100` for deterministic bucketing
- This ensures consistent user experience (no flickering) and even distribution
- Flag evaluation never hits the database on hot path (Redis only, DB on cache miss)
- Distinct from entitlements: flags control code paths, entitlements control resource access

**Subtasks:**
- Create migration for `feature_flags` table
- Create `app/models/feature_flag.rb` with evaluation logic
- Create `app/services/feature_flag_evaluator.rb` with Redis caching
- Create `feature_flag_audit_logs` table: `id`, `feature_flag_id`, `admin_id`, `action`, `previous_value (jsonb)`, `new_value (jsonb)`, `created_at`
- Write RSpec specs: boolean evaluation, percentage bucketing consistency, user list evaluation, tier list evaluation, cache behaviour
- Seed development flags: `new_onboarding_flow`, `ai_grammar_hints`, `enhanced_soundscapes`

---

## 5. User Management & Admin Panel

### EPIC: User Lifecycle Management & Administrative Operations

**Goal:**
Build a comprehensive user management system that gives internal teams full visibility into user state — subscription status, entitlement snapshots, activity history, and the ability to perform administrative actions (tier overrides, account suspension, trial grants) without engineering involvement. Every user-facing decision the backend makes must be inspectable and auditable through the admin interface.

**Rationale:**
Customer support, product managers, and QA engineers need to inspect and modify user state without filing engineering tickets. A reviewer testing the app needs Royal-tier access granted in seconds, not hours. A user reporting a billing issue needs their entitlement history visible at a glance. The admin panel is not a nice-to-have — it's a critical operational tool that reduces time-to-resolution for user issues and eliminates the engineering bottleneck for routine administrative tasks.

**Success Metrics:**
- Admin user lookup by email/firebase_uid: < 500ms
- Entitlement override applied via admin: visible on user's next API request (< 10 seconds)
- Support team resolves entitlement issues without engineering escalation: > 95% of cases
- Full user state visible on single admin page (no navigation required for standard support tasks)

#### Story: Implement User Admin API Endpoints

**Description:**
Build the admin-facing API endpoints for user management. These endpoints are authenticated with admin JWT (separate from user Firebase JWT) and authorised via admin roles. Every mutation is audit-logged.

**Acceptance Criteria:**
- [ ] `GET /admin/api/v1/users` — paginated user list with filters: `tier`, `provider`, `created_after`, `created_before`, `search` (email/name substring)
- [ ] `GET /admin/api/v1/users/:id` — full user profile including: current tier, entitlement snapshot, subscription history, override list, activity summary, trial status
- [ ] `PATCH /admin/api/v1/users/:id` — update user fields: `display_name`, `tier` (with reason), `trial_eligible`
- [ ] `POST /admin/api/v1/users/:id/overrides` — create entitlement override: `feature_slug`, `allowed_count`, `reason`, `expires_at`
- [ ] `DELETE /admin/api/v1/users/:id/overrides/:override_id` — revoke entitlement override
- [ ] `POST /admin/api/v1/users/:id/grant_trial` — starts 14-day Royal trial (only if `trial_eligible`)
- [ ] `POST /admin/api/v1/users/:id/suspend` — marks user as suspended with reason (all API requests return 403)
- [ ] `POST /admin/api/v1/users/:id/unsuspend` — removes suspension
- [ ] All mutations create `admin_audit_log` entries: `admin_id`, `action`, `target_user_id`, `changes (jsonb)`, `reason`, `ip_address`, `created_at`
- [ ] Pagination uses cursor-based pagination (not offset — stable for large datasets)
- [ ] Search uses `pg_trgm` trigram index for fuzzy email/name matching

**Technical Notes:**
- Admin authentication uses a separate `AdminUser` model with passwordless magic link login: admin enters email, receives a time-limited OTP code (6-digit, expires in 10 minutes), submits code to receive admin JWT. No passwords stored — eliminates credential stuffing and password reuse risks
- Admin roles: `viewer` (read-only), `support` (read + override + trial), `admin` (full access)
- Cursor pagination encodes `(created_at, id)` as opaque base64 cursor
- Tier changes via admin always trigger `entitlement_version` increment and Redis cache invalidation

**Subtasks:**
- Create `admin_users` table: `id`, `email`, `role (enum)`, `name`, `active (boolean)`, `last_login_at`, `otp_code_digest (string, nullable)`, `otp_expires_at (timestamptz, nullable)`, `created_at`, `updated_at`
- Create `admin_audit_logs` table with indexes on `target_user_id` and `admin_id`
- Create `app/controllers/admin/api/v1/users_controller.rb`
- Create `app/controllers/admin/api/v1/overrides_controller.rb`
- Create `app/controllers/admin/api/v1/admin_auth_controller.rb` (request-otp/verify-otp/logout)
- Implement cursor-based pagination concern
- Add `pg_trgm` extension migration and trigram indexes on `users.email`, `users.display_name`
- Write RSpec request specs for every endpoint with role-based access checks

#### Story: Implement User Activity Tracking

**Description:**
Track meaningful user activity events to provide support teams with context and enable product analytics. Events are immutable, append-only records that build a timeline of each user's journey.

**Acceptance Criteria:**
- [ ] `user_events` table: `id (uuid)`, `user_id (references users)`, `event_type (string)`, `metadata (jsonb)`, `ip_address (inet)`, `user_agent (string)`, `created_at`
- [ ] Event types tracked: `session_start`, `session_end`, `tier_changed`, `trial_started`, `trial_expired`, `subscription_created`, `subscription_renewed`, `subscription_cancelled`, `subscription_expired`, `feature_accessed`, `feature_gated`, `override_granted`, `override_revoked`, `account_suspended`, `account_unsuspended`
- [ ] Events created asynchronously via Sidekiq job (never blocks request)
- [ ] `GET /admin/api/v1/users/:id/events` — paginated event timeline with type filter
- [ ] Table partitioned by month on `created_at` (PostgreSQL native partitioning) — enables efficient cleanup and query performance
- [ ] Retention: events older than 12 months archived to cold storage (S3) and deleted from primary table
- [ ] Index on `(user_id, created_at DESC)` for fast timeline queries

**Technical Notes:**
- Use PostgreSQL declarative partitioning: `PARTITION BY RANGE (created_at)`
- Create partitions 3 months ahead via monthly cron job (`CreateEventPartitionsJob`)
- Event creation via `UserEventRecorder.record(user, event_type, metadata)` — wraps Sidekiq enqueue
- Metadata is free-form JSONB: `{ "from_tier": "free", "to_tier": "pro", "source": "revenuecat_webhook" }`

**Subtasks:**
- Create partitioned `user_events` table migration
- Create `app/models/user_event.rb`
- Create `app/services/user_event_recorder.rb`
- Create `app/jobs/record_user_event_job.rb` (Sidekiq)
- Create `app/jobs/create_event_partitions_job.rb` (monthly cron)
- Add events controller to admin API
- Write specs: event recording, partitioning, timeline query

#### Story: Implement User Search & Filtering

**Description:**
Build a performant search system for the admin panel that lets support teams find users by partial email, display name, Firebase UID, or subscription status. Results must return within 500ms for a database of 1M+ users.

**Acceptance Criteria:**
- [ ] Search endpoint: `GET /admin/api/v1/users?search=<query>` performs composite search
- [ ] Search matches against: `email` (trigram), `display_name` (trigram), `firebase_uid` (exact prefix)
- [ ] Filters combinable with search: `tier=pro`, `provider=apple`, `suspended=true`, `trial_active=true`, `created_after=2026-01-01`, `created_before=2026-12-31`, `has_override=true`
- [ ] Results ordered by relevance when searching, by `created_at DESC` when filtering only
- [ ] Response includes total count (estimated via `EXPLAIN` for large result sets, exact for small ones)
- [ ] Empty search returns all users (paginated)
- [ ] Search query sanitised: SQL injection impossible (parameterised queries only)

**Technical Notes:**
- Trigram similarity: `SELECT * FROM users WHERE email % $1 ORDER BY similarity(email, $1) DESC LIMIT 25`
- For exact Firebase UID lookup: `WHERE firebase_uid = $1` (B-tree index, constant time)
- Composite filter builds query with Arel — no string interpolation
- Estimated count: `SELECT reltuples FROM pg_class WHERE relname = 'users'` for > 10k results

**Subtasks:**
- Create `app/services/admin/user_search_service.rb`
- Implement trigram search with configurable similarity threshold
- Implement composite filter builder
- Add estimated count logic (exact < 10k, estimated > 10k)
- Write RSpec specs: search by email, search by name, search by firebase_uid, combined filters, SQL injection attempt rejected, pagination

---

## 6. Subscription System (RevenueCat)

### EPIC: RevenueCat Integration & Subscription Lifecycle Management

**Goal:**
Integrate RevenueCat as the subscription management provider. RevenueCat handles App Store receipt validation, subscription lifecycle events, and cross-platform entitlement tracking. The backend receives webhook events from RevenueCat, reconciles them with local state, and updates user entitlements. RevenueCat is an input; PostgreSQL is the source of truth.

**Rationale:**
Building App Store receipt validation, grace period handling, family sharing detection, and cross-platform subscription management from scratch would take quarters of engineering time and introduce ongoing maintenance burden as Apple changes its StoreKit APIs. RevenueCat abstracts this complexity. However, we never delegate access control decisions to RevenueCat — the backend maintains its own entitlement model, uses RevenueCat events as inputs, and can override RevenueCat state when necessary (admin overrides, compensation grants, bug workarounds).

**Success Metrics:**
- Webhook processing latency: < 2 seconds from event to entitlement update
- Subscription state reconciliation accuracy: 99.99% match between RevenueCat and local state
- Zero entitlement escalations from webhook replay or out-of-order delivery
- Grace period handling: users retain access for 72 hours after payment failure

#### Story: Configure RevenueCat Webhook Integration

**Description:**
Set up the webhook endpoint that receives subscription lifecycle events from RevenueCat. The endpoint must be idempotent, verify webhook authenticity, handle out-of-order delivery, and enqueue processing asynchronously to avoid timeouts.

**Acceptance Criteria:**
- [ ] `POST /webhooks/revenuecat` endpoint accepts RevenueCat webhook payloads
- [ ] Webhook authentication: validates `Authorization` header matches `REVENUECAT_WEBHOOK_AUTH_KEY` environment variable
- [ ] Endpoint responds with `200 OK` immediately after enqueuing — processing happens in Sidekiq (RevenueCat retries on non-2xx with exponential backoff)
- [ ] Webhook payload stored in `revenuecat_webhook_events` table: `id`, `event_type`, `app_user_id`, `payload (jsonb)`, `processed_at (nullable)`, `processing_error (text, nullable)`, `idempotency_key (string, unique)`, `created_at`
- [ ] Idempotency key derived from RevenueCat's `event.id` — duplicate events are acknowledged but not reprocessed
- [ ] Supported event types: `INITIAL_PURCHASE`, `RENEWAL`, `CANCELLATION`, `UNCANCELLATION`, `BILLING_ISSUE`, `SUBSCRIBER_ALIAS`, `PRODUCT_CHANGE`, `EXPIRATION`, `TRANSFER`
- [ ] Unrecognised event types logged and stored but not processed (forward compatibility)
- [ ] Webhook endpoint excluded from Firebase JWT middleware (it uses its own auth)

**Technical Notes:**
- RevenueCat sends `app_user_id` which maps to our `user.firebase_uid` (set during RevenueCat SDK initialisation on iOS)
- Event payloads include `event_timestamp_ms` — use this for ordering, not arrival time
- `Authorization: Bearer <webhook_auth_key>` — RevenueCat sets this in dashboard webhook configuration
- Rate limit: RevenueCat may send bursts of events (subscription renewal day) — Sidekiq concurrency must handle spikes

**Subtasks:**
- Create `revenuecat_webhook_events` table migration
- Create `app/controllers/webhooks/revenuecat_controller.rb`
- Create `app/models/revenuecat_webhook_event.rb`
- Add route: `post 'webhooks/revenuecat'` outside API namespace (no JWT required)
- Configure webhook auth key in environment variables
- Write RSpec specs: valid webhook, invalid auth, duplicate event, unknown event type

#### Story: Implement Subscription Event Processor

**Description:**
Build the event processor that translates RevenueCat webhook events into user state changes. Each event type maps to a specific state transition. Processing is idempotent and handles out-of-order delivery by comparing event timestamps.

**Acceptance Criteria:**
- [ ] `ProcessRevenueCatEventJob` Sidekiq job processes one webhook event at a time
- [ ] Out-of-order protection: if event `event_timestamp_ms` is older than user's `last_subscription_event_at`, event is skipped (logged as stale)
- [ ] `INITIAL_PURCHASE` → creates `subscription` record, sets user tier based on product ID mapping, records `subscription_created` event
- [ ] `RENEWAL` → updates `subscription.current_period_ends_at`, records `subscription_renewed` event, clears any billing issue flags
- [ ] `CANCELLATION` → sets `subscription.cancelled_at`, does NOT change tier until expiration (user retains access through paid period)
- [ ] `UNCANCELLATION` → clears `subscription.cancelled_at`, records reactivation event
- [ ] `BILLING_ISSUE` → sets `subscription.billing_issue_detected_at`, user retains access (Apple handles retry), records event
- [ ] `PRODUCT_CHANGE` → handles upgrade/downgrade: updates `subscription.product_id` and user tier, records old and new tier in event metadata
- [ ] `EXPIRATION` → sets `subscription.expired_at`, checks grace period eligibility:
  - If within 72-hour grace window: sets `subscription.grace_period_ends_at`, tier unchanged
  - If grace period expired: downgrades user to `free` tier
- [ ] `TRANSFER` → changes subscription ownership from one user to another
- [ ] All tier changes trigger: `entitlement_version` increment, Redis cache invalidation, `UserEventRecorder.record`
- [ ] Processing errors: caught, logged, stored in `revenuecat_webhook_events.processing_error`, event marked as failed (not requeued automatically — requires manual intervention or admin retry)

**Technical Notes:**
- Product ID → Tier mapping: `com.lumenlingo.pro.monthly` → `pro`, `com.lumenlingo.elite.monthly` → `elite`, `com.lumenlingo.royal.monthly` → `royal` (configured in `config/revenuecat.yml`, not hardcoded)
- Grace period: 72 hours from `expiration_at_ms` — Apple may resolve billing in this window
- Downgrade on `PRODUCT_CHANGE`: immediate tier change but entitlements for old tier preserved until `current_period_ends_at`
- Use `ActiveRecord::Base.transaction` for all state changes — either all succeed or all roll back

**Subtasks:**
- Create `subscriptions` table: `id`, `user_id`, `revenuecat_subscriber_id`, `product_id`, `tier_slug`, `status (enum: active, cancelled, expired, billing_issue, grace_period)`, `current_period_starts_at`, `current_period_ends_at`, `cancelled_at`, `expired_at`, `billing_issue_detected_at`, `grace_period_ends_at`, `last_event_at`, `metadata (jsonb)`, `created_at`, `updated_at`
- Create `app/models/subscription.rb` with state machine
- Create `app/jobs/process_revenuecat_event_job.rb`
- Create `app/services/revenuecat/event_processor.rb` — orchestrates event handling
- Create `app/services/revenuecat/tier_mapper.rb` — product ID → tier mapping
- Create `config/revenuecat.yml` with product-tier mapping
- Write RSpec specs for every event type including out-of-order scenarios, grace periods, and edge cases

#### Story: Implement Subscription State Reconciliation

**Description:**
Build a periodic reconciliation job that fetches subscription state directly from RevenueCat API and compares it with local state. Discrepancies are flagged for review and optionally auto-corrected. This catches missed webhooks, out-of-order processing bugs, and RevenueCat-side corrections.

**Acceptance Criteria:**
- [ ] `ReconcileSubscriptionsJob` runs daily via Sidekiq-Cron (04:00 UTC)
- [ ] For each active subscriber: fetches current state from RevenueCat REST API (`GET /v1/subscribers/{app_user_id}`)
- [ ] Compares: `active_entitlements`, `product_id`, `expiration_date`, `billing_issues`
- [ ] Discrepancy types: `tier_mismatch`, `expiration_mismatch`, `missing_local_subscription`, `missing_revenuecat_subscription`
- [ ] Discrepancies stored in `subscription_reconciliation_logs` table: `id`, `user_id`, `discrepancy_type`, `local_state (jsonb)`, `revenuecat_state (jsonb)`, `auto_corrected (boolean)`, `created_at`
- [ ] Auto-correction rules:
  - `tier_mismatch` where RevenueCat has higher tier: auto-correct local to match (user should never lose access they've paid for)
  - `tier_mismatch` where RevenueCat has lower/no tier: flag for manual review (don't auto-downgrade — may be a RevenueCat API issue)
  - `expiration_mismatch`: update local expiration to match RevenueCat
- [ ] Admin endpoint: `GET /admin/api/v1/reconciliation_logs` — view recent discrepancies
- [ ] Alert: if discrepancy rate exceeds 1% of active subscribers, trigger Slack/PagerDuty alert

**Technical Notes:**
- RevenueCat API rate limit: 10 requests/second — introduce 100ms delays between requests, use Sidekiq rate limiting
- Process subscribers in batches of 100 to limit memory usage
- Only reconcile users with `subscription.status IN ('active', 'grace_period', 'billing_issue')` — skip expired/free users
- API key: `REVENUECAT_API_SECRET_KEY` environment variable — the secret key (not public key)

**Subtasks:**
- Create `subscription_reconciliation_logs` table migration
- Create `app/jobs/reconcile_subscriptions_job.rb`
- Create `app/services/revenuecat/api_client.rb` — wraps RevenueCat REST API
- Create `app/services/revenuecat/reconciler.rb` — comparison and correction logic
- Configure Sidekiq-Cron schedule
- Write RSpec specs: matching state, tier mismatch (both directions), expiration mismatch, API rate limiting

#### Story: Implement Upgrade & Downgrade Flow

**Description:**
Handle the complete subscription change lifecycle: user upgrades (Pro → Elite), downgrades (Elite → Pro), and cross-grades. Ensure entitlements transition correctly, users see appropriate messaging, and the transition is seamless.

**Acceptance Criteria:**
- [ ] `GET /api/v1/subscriptions/offerings` — returns available tier offerings for the user's current state (hides current tier, shows upgrade and downgrade options)
- [ ] Response includes: `tier_slug`, `display_name`, `monthly_price_cents`, `features` (array of feature changes: gained/lost), `change_type` (upgrade/downgrade/current)
- [ ] `features` array shows delta from current tier: `{ "feature": "soundscapes", "current_count": 1, "new_count": 8, "change": "upgrade" }`
- [ ] On upgrade (RevenueCat `PRODUCT_CHANGE` webhook): immediate tier change, immediate entitlement expansion
- [ ] On downgrade: tier changes at end of current billing period (user retains higher tier until period ends)
- [ ] `GET /api/v1/subscriptions/current` — returns user's current subscription state: `tier`, `status`, `current_period_ends_at`, `cancelled_at`, `pending_downgrade` (if downgrade scheduled)
- [ ] `pending_downgrade` object: `{ "from_tier": "elite", "to_tier": "pro", "effective_at": "2026-04-15T00:00:00Z" }`

**Technical Notes:**
- RevenueCat handles the App Store product change flow — the backend receives the result via webhook
- Feature delta computed by comparing `tier_features` for current vs target tier
- Deferred downgrade: store `pending_downgrade_tier` on subscription, process when `EXPIRATION` + `INITIAL_PURCHASE` for new product arrives
- Offering display order: current tier (greyed out) → upgrades (ascending) → downgrades (descending)

**Subtasks:**
- Create `app/controllers/api/v1/subscriptions_controller.rb` with `offerings`, `current` actions
- Create `app/services/subscription/offering_builder.rb` — computes offerings with feature deltas
- Add `pending_downgrade_tier` and `pending_downgrade_effective_at` to subscriptions table
- Update event processor to handle deferred downgrades
- Write RSpec specs: offerings for free user, offerings for pro user, upgrade processing, deferred downgrade scheduling, downgrade execution

---

## 7. Entitlements System

### EPIC: Unified Entitlement Resolution & Distribution

**Goal:**
Build the entitlements layer that serves as the single point of truth for "what can this user access right now?" — merging subscription tier, admin overrides, trial status, grace periods, and promotional grants into one coherent, cacheable, auditable entitlement snapshot. The iOS client requests its entitlement set on launch and on key transitions; it never self-computes access beyond what the server provides.

**Rationale:**
Entitlements are the bridge between commercial reality (what the user paid for) and product experience (what the user sees). A fractured entitlements model — where the client computes some access, RevenueCat holds other access, and the admin panel can't override either — creates impossible-to-debug support scenarios and enables bypass attacks. By unifying all access signals into a single server-side resolver with a well-defined API contract, we eliminate ambiguity. The iOS `TierManager` becomes a cache of server-provided entitlements, not an independent decision-maker.

**Success Metrics:**
- Entitlement API response: < 50ms p99 (Redis-cached path)
- Entitlement snapshot matches expected access: 100% (verified by integration tests against tier-feature matrix)
- Time from admin override to client reflection: < 30 seconds (polling interval)
- Zero "phantom access" bugs (user sees locked feature as unlocked, or vice versa)

#### Story: Design Entitlement API Contract

**Description:**
Define the API endpoint that iOS calls to fetch the user's complete entitlement snapshot. This is the most-called endpoint in the system — it must be fast, cacheable, and complete enough that the client needs no other endpoint to determine UI state.

**Acceptance Criteria:**
- [ ] `GET /api/v1/entitlements` returns the full entitlement snapshot for the authenticated user
- [ ] Response schema:
```json
{
  "tier": {
    "slug": "pro",
    "display_name": "Pro",
    "rank": 1
  },
  "features": {
    "soundscapes": { "allowed_count": 1, "type": "count" },
    "language_pairs": { "allowed_count": 7, "type": "count" },
    "unlimited_practice": { "allowed_count": 1, "type": "boolean" },
    "breathing_orbs": { "allowed_count": 6, "type": "count" },
    "quantum_flow": { "allowed_count": 0, "type": "count" },
    "nebula_drift": { "allowed_count": 0, "type": "count" },
    "offline_mode": { "allowed_count": 1, "type": "boolean" },
    "flashcard_deck_size": { "allowed_count": 75, "type": "count" },
    "grammar_difficulty": { "allowed_count": 2, "type": "count" },
    "word_builder_difficulty": { "allowed_count": 2, "type": "count" }
  },
  "overrides": [
    {
      "feature": "quantum_flow",
      "allowed_count": 4,
      "reason": "Beta tester access",
      "expires_at": "2026-05-01T00:00:00Z"
    }
  ],
  "trial": {
    "active": false,
    "eligible": true,
    "ends_at": null
  },
  "subscription": {
    "status": "active",
    "current_period_ends_at": "2026-04-15T00:00:00Z",
    "cancelled_at": null,
    "pending_downgrade": null,
    "grace_period_active": false
  },
  "resolved_at": "2026-03-18T14:22:00Z",
  "cache_ttl_seconds": 300
}
```
- [ ] Response includes `cache_ttl_seconds` — client should not re-fetch before this interval unless a known state change occurred
- [ ] `ETag` header set on response — client can send `If-None-Match` to get `304 Not Modified` when entitlements haven't changed
- [ ] ETag derived from `user.entitlement_version` — changes on any tier/override/subscription state change
- [ ] Response served from Redis cache on hit (< 5ms), computed on miss (< 50ms)
- [ ] Endpoint rate-limited: 60 requests/minute per user (protects against aggressive polling)

**Technical Notes:**
- Override entries include `expires_at` so the client can show countdown timers or expiration notices
- `cache_ttl_seconds` dynamically adjusted: 300s for stable users, 30s during trial (approaching expiry), 10s during grace period
- `features` hash uses snake_case keys matching iOS `PremiumFeature.overrideKey`
- `type` field helps iOS distinguish boolean features (0/1) from count features (variable numeric)

**Subtasks:**
- Create `app/controllers/api/v1/entitlements_controller.rb` with `show` action
- Create `app/serializers/entitlement_snapshot_serializer.rb`
- Implement ETag based on `entitlement_version`
- Implement dynamic `cache_ttl_seconds` logic
- Add rate limiting via `rack-attack` gem
- Define endpoint in OpenAPI schema
- Write RSpec specs: free user response, pro user response, user with overrides, trial user, grace period user, ETag caching, rate limiting

#### Story: Implement Entitlement Sync Protocol for iOS

**Description:**
Define the protocol by which the iOS client synchronizes its local `TierManager` state with server-provided entitlements. The client must gracefully handle: first launch (no cached state), background refresh, server unreachable, and entitlement changes while app is backgrounded.

**Acceptance Criteria:**
- [ ] iOS calls `GET /api/v1/entitlements` on: app launch, return from background (if > 5 minutes elapsed), after purchase completion, after trial start, on explicit pull-to-refresh in settings
- [ ] Response is cached locally in UserDefaults (encrypted container) with `resolved_at` timestamp
- [ ] If server is unreachable: use cached entitlements if `resolved_at` is within last 24 hours, otherwise degrade to `free` tier
- [ ] If cached entitlements are stale (> 24 hours) AND server is unreachable: show non-blocking banner "Unable to verify subscription — some features may be limited" and apply `free` tier entitlements
- [ ] `TierManager` exposes `syncWithServer()` async method that calls entitlements API and updates local state
- [ ] On entitlement change detected (new response differs from cached): `TierManager` fires `entitlementsDidChange` notification
- [ ] If tier changed: trigger tier transition animation (existing `TierUpgradeCelebrationView` for upgrades, subtle notification for downgrades)
- [ ] `ETag`/`If-None-Match` used on all requests — 304 responses skip processing
- [ ] API contract documented as Swift protocol: `EntitlementsSyncProtocol`

**Technical Notes:**
- iOS `APIClient` must add `If-None-Match: "<cached_etag>"` header to entitlements requests
- On 304: no body parsing, no state update, just reset the refresh timer
- On 200: parse response, update `TierManager.currentTier`, update per-feature allowed counts, persist to UserDefaults
- Error handling: network timeout → use cache; 401 → trigger re-authentication; 403 → account suspended (show message); 429 → back off exponentially
- The `syncWithServer()` method is the ONLY path by which `TierManager.currentTier` changes in the server-integrated build — local-only tier changes are development-mode only

**Subtasks:**
- Define `EntitlementsSyncProtocol` in iOS codebase
- Implement `ServerEntitlementsSync` conforming to protocol
- Update `TierManager` to use sync protocol
- Implement encrypted local cache in UserDefaults
- Implement stale-cache detection and degradation banner
- Define retry and backoff strategy
- Document sync protocol in `docs/architecture/entitlements-sync.md`

#### Story: Implement Entitlement Override Management

**Description:**
Build the complete lifecycle for admin-granted entitlement overrides: creation with expiration, automatic expiry processing, visibility in the admin panel, and real-time reflection in the iOS client. Overrides are the mechanism by which support teams, QA testers, and product managers grant temporary access exceptions.

**Acceptance Criteria:**
- [ ] Override creation requires: `feature_slug`, `allowed_count`, `reason` (mandatory — no override without justification), `expires_at` (mandatory — no permanent overrides without `admin` role)
- [ ] Override with `expires_at: null` requires `admin` role (not `support`) — prevents support from granting permanent free access
- [ ] `ExpireEntitlementOverridesJob` runs every 15 minutes, finds overrides where `expires_at < now`, marks them `expired`, decrements `entitlement_version` on affected users
- [ ] Expired overrides are soft-deleted (retained for audit) — `expired_at` timestamp set, excluded from entitlement resolution
- [ ] Multiple overrides per user per feature: latest non-expired override wins
- [ ] Override creation sends push notification to user (via FCM): "Your access to {feature_name} has been updated" (optional — configurable per override)
- [ ] Admin dashboard shows: active overrides count, recently expired, overrides by feature distribution chart
- [ ] Bulk override creation: `POST /admin/api/v1/overrides/bulk` — grant same override to multiple users (e.g., all beta testers)

**Technical Notes:**
- Bulk override endpoint accepts array of `user_ids` — creates separate override record for each (not a shared record — enables individual expiry and revocation)
- Push notification via FCM requires user's device token — stored in `user_devices` table
- Soft delete: add `expired_at` column, scope `active` as `where(expired_at: nil).where('expires_at IS NULL OR expires_at > ?', Time.current)`

**Subtasks:**
- Add `expired_at` column to `entitlement_overrides` table
- Create `app/jobs/expire_entitlement_overrides_job.rb`
- Create `app/controllers/admin/api/v1/bulk_overrides_controller.rb`
- Update `EntitlementResolver` to handle multiple overrides (latest wins)
- Configure Sidekiq-Cron for 15-minute override expiry check
- Write RSpec specs: override creation, expiry processing, multiple overrides resolution, bulk creation, role-based access for permanent overrides

---

## 8. iOS ↔ Backend Integration

### EPIC: Secure API Client & Communication Layer

**Goal:**
Define and implement the API communication layer between the iOS app and the Rails backend. This encompasses: HTTP client configuration, JWT token management, request/response serialisation, error handling, offline resilience, and the contract by which iOS and backend teams collaborate without blocking each other.

**Rationale:**
The iOS app currently operates with local-only data (SwiftData, bundled JSON). Integrating a backend introduces network dependencies, latency considerations, error states, and security requirements that don't exist in a purely offline app. The API client must be a first-class citizen in the iOS architecture — not a bolted-on networking layer but a foundational service that other components depend on, with the same level of testing and reliability as the local data layer. Every edge case (timeout, 401, 403, 429, 500, network loss, certificate pinning failure) must have a defined, tested response.

**Success Metrics:**
- API call success rate: > 99.5% (excluding user-caused errors like 401)
- Average API response time from client perspective: < 200ms (excluding network transit)
- Zero crashes from API failures (all network errors gracefully handled)
- Token refresh transparent to user: zero forced re-logins under normal operation
- Offline-to-online transition: seamless with automatic sync

#### Story: Implement iOS API Client Foundation

**Description:**
Build the core `APIClient` service in Swift that handles all HTTP communication with the backend. The client manages authentication headers, request serialisation, response deserialisation, error mapping, and retry logic. It is the single point of contact for all backend communication — no view model or service should make HTTP requests directly.

**Acceptance Criteria:**
- [ ] `APIClient` class conforming to `APIClientProtocol` (for mocking in tests)
- [ ] Base URL configurable per environment: `APIEnvironment` enum with `.development`, `.qa`, `.uat`, `.preProd`, `.production` cases and corresponding URLs
- [ ] Every request includes: `Authorization: Bearer <firebase_id_token>`, `Content-Type: application/json`, `Accept: application/json`, `X-Request-Id: <uuid>` (for request tracing), `X-Client-Version: <app_version>`, `X-Platform: ios`
- [ ] Automatic token refresh: if Firebase token expires within 5 minutes, refresh before making request
- [ ] On 401 response: attempt token refresh once, retry request; if still 401, emit `authenticationRequired` notification (triggers re-login flow)
- [ ] On 403 response: parse error body for `feature_gated` errors (show upgrade prompt) vs `account_suspended` (show suspension message)
- [ ] On 429 response: read `Retry-After` header, delay retry accordingly, show non-blocking "Please wait" indicator
- [ ] On 500+ response: retry once with exponential backoff (1s, then 2s), then surface error to caller
- [ ] On network failure: surface as `APIError.networkUnavailable` — caller decides whether to use cache
- [ ] All responses decoded via `JSONDecoder` with `keyDecodingStrategy = .convertFromSnakeCase`
- [ ] All requests encoded via `JSONEncoder` with `keyEncodingStrategy = .convertToSnakeCase`
- [ ] Certificate pinning for production base URL (SHA-256 pin of server certificate)
- [ ] Request logging: method, path, status code, duration (no sensitive data in logs)

**Technical Notes:**
- Built on `URLSession` (not Alamofire — zero third-party networking dependencies, consistent with project's native-only philosophy)
- `APIClientProtocol` methods: `func get<T: Decodable>(_ path: String, queryItems: [URLQueryItem]?) async throws -> T`, `func post<T: Decodable, B: Encodable>(_ path: String, body: B) async throws -> T`, `func patch<T: Decodable, B: Encodable>(_ path: String, body: B) async throws -> T`, `func delete(_ path: String) async throws`
- Token refresh uses Firebase SDK: `Auth.auth().currentUser?.getIDTokenForcingRefresh(true)`
- Certificate pinning implemented via `URLSessionDelegate.urlSession(_:didReceive:completionHandler:)`
- `X-Request-Id` enables correlating client-side errors with server-side logs

**Subtasks:**
- Create `Services/API/APIClient.swift`
- Create `Services/API/APIClientProtocol.swift`
- Create `Services/API/APIEnvironment.swift`
- Create `Services/API/APIError.swift` enum with all error cases
- Create `Services/API/APIRequestInterceptor.swift` for header injection
- Implement certificate pinning delegate
- Implement automatic token refresh
- Implement retry logic with exponential backoff
- Write unit tests with mock URLSession

#### Story: Define API Error Contract & iOS Error Handling

**Description:**
Establish the complete error contract between backend and iOS. Every error response follows a consistent JSON structure. iOS maps every error to a user-facing message or action. No raw error codes or unhandled states surface to the user.

**Acceptance Criteria:**
- [ ] Backend error response format (all error responses):
```json
{
  "error": {
    "code": "feature_gated",
    "message": "This feature requires a Pro subscription",
    "details": {
      "feature": "soundscapes",
      "required_tier": "pro",
      "current_tier": "free"
    },
    "request_id": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```
- [ ] Error codes enumerated: `invalid_token`, `token_expired`, `account_suspended`, `feature_gated`, `rate_limited`, `validation_error`, `not_found`, `conflict`, `internal_error`, `service_unavailable`
- [ ] iOS `APIError` enum cases map 1:1 to backend error codes
- [ ] `APIError.userMessage` computed property returns localised, user-friendly message for each case
- [ ] `feature_gated` errors: iOS shows contextual upgrade prompt with feature name and required tier (uses existing `PremiumCTAButton` component)
- [ ] `account_suspended` errors: iOS shows full-screen suspension notice with support contact
- [ ] `rate_limited` errors: iOS shows subtle "Please wait a moment" toast, auto-retries after `Retry-After` interval
- [ ] `validation_error` includes `details.fields` array for form-level error display
- [ ] `internal_error`: iOS shows generic "Something went wrong — please try again" with option to report
- [ ] All errors include `request_id` — displayed in error UI for support reference (small, grey, copy-on-tap)

**Technical Notes:**
- Backend uses `app/controllers/concerns/error_handler.rb` concern with `rescue_from` blocks for consistent error formatting
- `request_id` flows from iOS `X-Request-Id` header through the backend and back in error responses — enables end-to-end tracing
- Validation errors use `ActiveModel::Errors` serialisation: `{ "fields": [{ "field": "email", "message": "is invalid" }] }`
- iOS error messages stored in `Localizable.strings` — not hardcoded in error handling code

**Subtasks:**
- Create `app/controllers/concerns/error_handler.rb` with all rescue_from handlers
- Define OpenAPI error schemas
- Create iOS `APIError.swift` enum
- Create iOS `ErrorPresenter.swift` — translates API errors to UI actions
- Add `request_id` passthrough in error responses
- Write RSpec specs: each error type returns correct JSON structure
- Write iOS unit tests: each error code maps to correct user message

#### Story: Implement iOS Configuration Endpoint & App Bootstrap

**Description:**
Define the endpoint that iOS calls on every app launch to fetch runtime configuration: minimum supported version, maintenance mode flag, feature flags, and content update availability. This is the app's "preflight check" — it determines whether the app can proceed normally, needs an update, or is in maintenance.

**Acceptance Criteria:**
- [ ] `GET /api/v1/config` — authenticated endpoint returning app configuration
- [ ] Response schema:
```json
{
  "minimum_app_version": "2.1.0",
  "maintenance_mode": false,
  "maintenance_message": null,
  "feature_flags": {
    "new_onboarding_flow": false,
    "ai_grammar_hints": true,
    "enhanced_soundscapes": false
  },
  "content": {
    "latest_version": "2026.03.15",
    "update_available": true,
    "update_url": "/api/v1/content/manifest"
  },
  "rate_limits": {
    "entitlements_poll_seconds": 300,
    "config_poll_seconds": 3600
  }
}
```
- [ ] If `maintenance_mode: true`, iOS shows full-screen maintenance view with `maintenance_message` — no other navigation possible
- [ ] If current app version < `minimum_app_version`, iOS shows mandatory update screen with App Store deep link — no other navigation possible
- [ ] Feature flags passed to iOS `FeatureFlagManager` to toggle in-app behaviour
- [ ] `rate_limits` dynamically sets polling intervals (server can adjust client behaviour without app update)
- [ ] Response cached for 1 hour (via `Cache-Control: max-age=3600`)
- [ ] Endpoint must respond even if database is degraded (Redis-only path for cached config)

**Technical Notes:**
- Version comparison uses semantic versioning (major.minor.patch)
- `maintenance_mode` toggled via admin panel — stored in Redis for instant propagation (no DB query on hot path)
- Feature flags evaluated per-user (percentage flags use authenticated user ID for bucketing)
- This endpoint is the first call after authentication — its failure blocks app usage, so it must have the most aggressive caching and fallback strategy

**Subtasks:**
- Create `app/controllers/api/v1/config_controller.rb`
- Create `app/services/app_config_builder.rb`
- Store maintenance mode and minimum version in Redis
- Implement iOS `AppBootstrapService` that calls config on launch
- Implement iOS forced update and maintenance screens
- Write RSpec specs: normal config, maintenance mode, version enforcement
- Define endpoint in OpenAPI schema

#### Story: Implement Practice Session Sync API

**Description:**
Define the API contract for syncing practice session data between iOS and the backend. Practice sessions are created and tracked locally during gameplay and synced to the backend for persistence, analytics, and cross-device continuity. Sync is eventual — the app works fully offline and uploads results when connectivity is available.

**Acceptance Criteria:**
- [ ] `POST /api/v1/sessions` — submit a completed practice session
- [ ] Request body:
```json
{
  "session_id": "uuid (client-generated)",
  "session_type": "flashcards|grammar|word_builder",
  "language_pair": "english_spanish",
  "started_at": "2026-03-18T14:00:00Z",
  "ended_at": "2026-03-18T14:15:00Z",
  "duration_seconds": 900,
  "items_attempted": 25,
  "items_correct": 20,
  "accuracy": 0.80,
  "difficulty_level": 2,
  "metadata": {}
}
```
- [ ] Server stores session in `practice_sessions` table, linked to user
- [ ] Idempotent: re-submitting same `session_id` returns `200` with existing record (no duplicate)
- [ ] `GET /api/v1/sessions` — paginated list of user's sessions, filtered by `session_type`, `language_pair`, `date_range`
- [ ] `GET /api/v1/sessions/stats` — aggregated statistics: total sessions, total time, average accuracy, streak data, per-language-pair breakdown
- [ ] Practice sessions respect tier gating: `unlimited_practice` feature checked — free users limited to 30 minutes/day of tracked practice
- [ ] If daily limit exceeded: session accepted but flagged as `over_limit: true` in response (client shows "time's up" UI)
- [ ] Daily limit reset at midnight UTC (configurable per user timezone in future)

**Technical Notes:**
- `session_id` is client-generated UUID — enables offline creation and later sync
- `practice_sessions` table indexed on `(user_id, started_at DESC)` for timeline queries
- Daily limit tracking: Redis counter `practice_limit:#{user_id}:#{date}` with TTL of 48 hours
- Stats endpoint uses PostgreSQL aggregate functions — not application-layer computation (DB does the heavy lifting)
- Offline sync: iOS queues sessions in local CoreData/SwiftData store, uploads batch on connectivity restoration

**Subtasks:**
- Create `practice_sessions` table migration
- Create `app/models/practice_session.rb`
- Create `app/controllers/api/v1/sessions_controller.rb` with `create`, `index`, `stats` actions
- Create `app/services/practice_limit_checker.rb` — Redis-backed daily limit tracking
- Create `app/services/practice_stats_calculator.rb` — aggregate stats computation
- Write RSpec specs: session creation, idempotency, daily limit enforcement, stats calculation
- Define all session endpoints in OpenAPI schema

---

## 9. Frontend Admin (React + Tailwind)

### EPIC: Admin Dashboard — User Operations & System Visibility

**Goal:**
Build a React-based admin dashboard that provides internal teams with real-time visibility into user state, subscription health, entitlement management, and system configuration. The dashboard must be responsive, fast-loading, and designed for operational efficiency — support agents should resolve the most common issues (entitlement check, override grant, trial activation) in under 30 seconds per user.

**Rationale:**
An admin panel is the operational backbone of any subscription-based product. Without it, every user support request becomes an engineering task — querying databases, running console commands, and manually updating records. The admin panel turns hours-long support processes into clicks. For Lumen Lingo, where the tier system has nuanced entitlements (soundscapes count, language pair limits, difficulty levels), support visibility is critical — agents need to see exactly what a user can access and why.

**Success Metrics:**
- Admin page load time: < 2 seconds (initial), < 500ms (subsequent navigation)
- User lookup to resolution: < 30 seconds for standard cases (override grant, tier check, trial activation)
- Zero engineering tickets for routine user support operations
- Dashboard uptime: 99.9% (independent of user-facing API)

#### Story: Set Up Admin Application Architecture

**Description:**
Scaffold the React admin application with a clean component architecture, routing, authentication, and API client. The admin app is a standalone SPA served via its own Docker container (Nginx), communicating with the backend via the admin API.

**Acceptance Criteria:**
- [ ] Vite + React 19 project in `admin/` directory
- [ ] Tailwind CSS 4 configured with custom design tokens matching Lumen Lingo brand (dark theme, glass-morphic cards)
- [ ] React Router v7 for client-side routing
- [ ] Route structure:
  - `/login` — admin authentication (email → OTP code → verified)
  - `/dashboard` — overview metrics
  - `/users` — user list with search
  - `/users/:id` — user detail page
  - `/subscriptions` — subscription health view
  - `/feature-flags` — flag management
  - `/config` — environment configuration
  - `/audit-log` — admin action audit trail
- [ ] Auth context: `AdminAuthProvider` wraps entire app, stores admin JWT in httpOnly cookie (not localStorage). Login flow: enter email → request OTP → enter 6-digit code → JWT issued
- [ ] Protected routes: redirect to `/login` if not authenticated
- [ ] API client: `adminApi` module using `fetch` with JWT interceptor, error handling, and base URL from environment
- [ ] Loading states: skeleton loaders (not spinners) matching layout structure
- [ ] Error boundaries: graceful error pages per route, not white screen of death
- [ ] Toast notifications: success/error toasts for mutations (override granted, flag toggled, etc.)

**Technical Notes:**
- Admin JWT is a separate token from Firebase JWT — issued via passwordless flow: `POST /admin/api/v1/auth/request-otp` (sends 6-digit OTP to admin email) → `POST /admin/api/v1/auth/verify-otp` (validates OTP, returns JWT). No passwords anywhere in the system
- JWT stored in httpOnly secure cookie — immune to XSS extraction
- API base URL from `VITE_ADMIN_API_URL` environment variable (injected at build time)
- Component library: headless UI (Radix primitives or similar) + custom Tailwind styling — no heavy component framework
- State management: React Query (TanStack Query) for server state, React context for UI state

**Subtasks:**
- Scaffold Vite + React 19 project with TypeScript
- Install and configure: Tailwind CSS 4, React Router v7, TanStack Query v5
- Create `AdminAuthProvider` with OTP request/verify/logout/token refresh
- Create `adminApi` client with interceptors
- Set up route hierarchy with layout components
- Create shared components: `PageHeader`, `DataTable`, `SearchBar`, `SkeletonLoader`, `Toast`, `EmptyState`
- Create error boundary component
- Configure ESLint + Prettier

#### Story: Build User Management Dashboard

**Description:**
Create the user management pages that support agents use daily: searchable user list, detailed user profile with full state visibility, and action buttons for common operations. The user detail page is the operational cockpit — everything a support agent needs on one screen.

**Acceptance Criteria:**
- [ ] **User List Page** (`/users`):
  - Search bar: instant search across email, name, firebase UID (debounced 300ms)
  - Filter chips: tier (Free/Pro/Elite/Royal), provider (Apple/Google/Email), status (Active/Suspended/Trial)
  - Results table: avatar, name, email, tier badge (coloured matching iOS tier colours), provider icon, last seen (relative time), actions dropdown
  - Pagination: cursor-based, "Load more" button (not page numbers — consistent with API)
  - Empty state: helpful message when no results match filters
  - Bulk actions: select multiple users → grant override, export CSV

- [ ] **User Detail Page** (`/users/:id`):
  - **Header section**: avatar, name, email, tier badge, account status indicator (active/suspended/trial)
  - **Entitlements card**: real-time entitlement snapshot — table showing every feature, allowed count, source (tier/override/trial), with colour coding (green = has access, amber = override, grey = no access)
  - **Subscription card**: current subscription status, product ID, period dates, billing issue warning, cancellation info, pending downgrade notice
  - **Quick actions bar**: "Grant Trial" (disabled if not eligible), "Add Override" (opens modal), "Suspend/Unsuspend" toggle, "Sync RevenueCat" (forces reconciliation)
  - **Activity timeline**: scrollable event list with event type icons, timestamps, and metadata expandable sections
  - **Overrides section**: active overrides table with revoke button per override, expired overrides collapsed below
  - **RevenueCat link**: direct link to user's RevenueCat subscriber page (opens in new tab)
  - All sections load independently (parallel API calls) — fast partial render even if one section is slow

- [ ] **Override Modal** (triggered from user detail):
  - Feature selector dropdown (all 10 features)
  - Allowed count input (numeric, with tier-default shown as placeholder)
  - Reason textarea (required, minimum 10 characters)
  - Expiration date picker (required for `support` role, optional for `admin`)
  - Confirmation step: "Grant {feature} access ({count}) to {user_name} until {date}?"
  - Success: toast + entitlements card auto-refreshes

**Technical Notes:**
- Tier badge colours match iOS exactly: Free=#94a3b8, Pro=#a855f7, Elite=#7c3aed, Royal=#fbbf24
- Activity timeline uses virtual scrolling (react-window or similar) for users with thousands of events
- Each card is a separate React Query hook — `useUserEntitlements(id)`, `useUserSubscription(id)`, `useUserEvents(id)`, `useUserOverrides(id)`
- Override modal uses react-hook-form for form state management with zod validation
- "Sync RevenueCat" button calls `POST /admin/api/v1/users/:id/reconcile` — triggers immediate reconciliation job

**Subtasks:**
- Create `UserListPage` component with search and filters
- Create `UserDetailPage` layout with card grid
- Create `EntitlementsCard` component
- Create `SubscriptionCard` component
- Create `ActivityTimeline` component with virtual scroll
- Create `OverridesSection` component with revoke action
- Create `OverrideModal` with form validation
- Create `QuickActionsBar` with all action buttons
- Create `TierBadge` component with matching colour scheme
- Wire up all React Query hooks
- Write component tests for critical paths

#### Story: Build Feature Flags Management Page

**Description:**
Create the feature flags management interface that allows product managers and engineers to create, toggle, and monitor feature flags without code deployment. The interface must clearly communicate the impact of flag changes and prevent accidental production changes.

**Acceptance Criteria:**
- [ ] **Feature Flags Page** (`/feature-flags`):
  - Flag list: name, type, status (on/off/percentage), last changed, changed by
  - Create flag button → opens modal with: name, type selector (boolean/percentage/user list/tier list), description
  - Toggle switch for boolean flags (with confirmation dialog: "Toggle {flag_name} in production?")
  - Percentage slider for percentage flags (0-100, shows affected user count estimate)
  - User list editor for user-list flags (search and add users)
  - Tier checkbox group for tier-list flags
  - Audit log sidebar: shows recent changes to selected flag
  - Production safeguard: flags affecting production require typing flag name to confirm change

- [ ] **Flag Detail Panel** (slide-out or modal):
  - Current configuration
  - Evaluation preview: "Enter user ID to test" → shows what this flag would return for that user
  - Change history with diff view
  - JSON export of flag configuration

**Technical Notes:**
- Production confirmation: if `LUMEN_ENV === 'prod'`, flag mutations require typing the flag name (prevents accidental toggles)
- Percentage slider shows estimated affected count: `totalUsers * percentage / 100` (from cached user count)
- Evaluation preview calls `GET /admin/api/v1/feature-flags/:id/evaluate?user_id=<id>` — tests flag evaluation without changing state

**Subtasks:**
- Create `FeatureFlagsPage` component
- Create `FlagCreateModal` with type-specific form sections
- Create `FlagToggle` component with confirmation dialog
- Create `PercentageSlider` component with user count estimate
- Create `FlagAuditSidebar` component
- Create `EvaluationPreview` component
- Wire up admin API hooks
- Write component tests for flag toggle flow

#### Story: Build Dashboard Overview & System Health

**Description:**
Create the admin dashboard home page that provides at-a-glance system health, subscription metrics, and operational alerts. This is the first screen admins see — it must surface the most actionable information immediately.

**Acceptance Criteria:**
- [ ] **Metric cards** (top row):
  - Total users (with daily growth delta)
  - Active subscribers (by tier: Pro/Elite/Royal breakdown)
  - Trial conversions (last 7 days: trial → paid percentage)
  - Revenue (MRR — monthly recurring revenue, computed from active subscriptions)
- [ ] **Subscription health chart**: line chart showing active subscriptions over last 30 days, segmented by tier
- [ ] **Alert panel**: real-time alerts:
  - Reconciliation discrepancies > threshold
  - Webhook processing failures
  - High error rate on API endpoints
  - Users in grace period > threshold
- [ ] **Recent activity feed**: last 20 admin actions from audit log (who did what when)
- [ ] **Quick links**: most-used pages, recent user lookups (stored in localStorage)
- [ ] Metric cards auto-refresh every 60 seconds
- [ ] All metric data served by `GET /admin/api/v1/dashboard/metrics`

**Technical Notes:**
- Revenue calculation: sum of `tier.monthly_price_cents` for all active subscribers (not RevenueCat revenue — RevenueCat includes fees and taxes)
- Chart library: Recharts or Chart.js (lightweight, Tailwind-compatible)
- Alerts served by `GET /admin/api/v1/dashboard/alerts` — backend computes alert conditions from Redis counters and recent DB queries
- Dashboard metrics endpoint uses aggressive caching (60-second Redis cache) — not real-time, acceptable for operational dashboard

**Subtasks:**
- Create `DashboardPage` layout with grid
- Create `MetricCard` component (reusable)
- Create `SubscriptionChart` component
- Create `AlertPanel` component
- Create `RecentActivityFeed` component
- Create `QuickLinks` component with localStorage persistence
- Create `GET /admin/api/v1/dashboard/metrics` endpoint
- Create `GET /admin/api/v1/dashboard/alerts` endpoint
- Write component tests for metric card rendering

---

## 10. Environment & Configuration Management

### EPIC: Multi-Environment Configuration & Secrets Architecture

**Goal:**
Implement a configuration management system that ensures each environment (dev, qa, uat, pre-prod, prod) is fully isolated, secrets are never committed to source control, and configuration changes are auditable and reversible. Engineers can switch between environments with a single variable change. Support and product teams can modify safe configuration values (feature flags, maintenance mode) via the admin panel without engineering involvement.

**Rationale:**
Configuration management is where most "it works in staging but not production" bugs originate. Mismatched environment variables, incorrect secret values, and configuration drift between environments cause outages that are hard to diagnose and easy to prevent. By establishing a rigorous configuration hierarchy (environment variables > Rails credentials > defaults), auditing all changes, and providing a safe admin interface for runtime configuration, we eliminate the most common configuration failure modes.

**Success Metrics:**
- Zero secrets in source control (verified by CI scan)
- Environment switch from dev to any other: single `LUMEN_ENV` variable change
- Configuration change to runtime flag: < 30 seconds via admin panel
- Configuration drift between pre-prod and prod: zero (automated parity check)

#### Story: Define Configuration Hierarchy & Loading Strategy

**Description:**
Establish the configuration hierarchy that determines where each configuration value comes from and in what order. The hierarchy is: environment variables (highest priority) > Rails encrypted credentials > YAML config files > application defaults (lowest priority). Every configuration value must be documented with its source, type, and default.

**Acceptance Criteria:**
- [ ] `config/lumen_config.rb` initialiser loads and validates all configuration on application boot
- [ ] Configuration hierarchy enforced: ENV → Rails credentials → YAML → default
- [ ] Validation: missing required configuration causes boot failure with clear error message listing missing values
- [ ] Configuration registry: `LumenConfig.get(:firebase_project_id)` accessor for all known config keys
- [ ] Configuration keys documented in `config/lumen_config_schema.yml`:
```yaml
firebase_project_id:
  type: string
  required: true
  source: env
  env_key: FIREBASE_PROJECT_ID
  description: "Firebase project ID for JWT verification"

revenuecat_webhook_auth_key:
  type: string
  required: true
  source: env
  env_key: REVENUECAT_WEBHOOK_AUTH_KEY
  description: "Shared secret for RevenueCat webhook authentication"
  sensitive: true

daily_practice_limit_minutes:
  type: integer
  required: false
  default: 30
  source: yaml
  description: "Daily practice time limit for free tier users (minutes)"
```
- [ ] Sensitive values never logged — `LumenConfig.get(:revenuecat_webhook_auth_key)` returns value but `LumenConfig.to_h` redacts sensitive keys to `[REDACTED]`
- [ ] `LumenConfig.validate!` called during boot — fails fast if required values missing
- [ ] Config schema file serves as documentation: every possible config value is listed with type, source, and purpose

**Technical Notes:**
- Use `dry-configurable` or hand-rolled module — lightweight, no heavy framework
- YAML config files: `config/lumen/<LUMEN_ENV>.yml` (gitignored for sensitive environments) with `config/lumen/defaults.yml` (committed)
- Rails credentials: `config/credentials/<LUMEN_ENV>.yml.enc` (encrypted, committed; key not committed)
- Environment variables take precedence at every level — this is the standard Kubernetes/Docker pattern

**Subtasks:**
- Create `config/lumen_config.rb` initialiser
- Create `config/lumen_config_schema.yml` with all known config keys
- Create `config/lumen/defaults.yml` with non-sensitive defaults
- Implement `LumenConfig` module with `get`, `validate!`, `to_h` methods
- Implement sensitive value redaction
- Write RSpec specs: loading hierarchy, missing required value fails boot, sensitive redaction, environment variable override

#### Story: Implement Secrets Management Strategy

**Description:**
Define the secrets management approach for all environments. Development uses `.env` files (gitignored). CI uses GitHub Actions secrets. Production environments use Kubernetes Secrets backed by an external secrets operator (with a clear migration path to HashiCorp Vault or AWS Secrets Manager).

**Acceptance Criteria:**
- [ ] **Development**: `.env` file at repository root (gitignored), loaded by Docker Compose `env_file` directive
- [ ] `.env.example` committed with all keys and `CHANGE_ME` values — stays in sync with config schema
- [ ] **CI**: secrets set in GitHub Actions repository secrets, injected as environment variables in workflow steps
- [ ] **Kubernetes (qa through prod)**: secrets stored in Kubernetes Secrets objects, mounted as environment variables in pod specs
- [ ] Pre-commit hook: `scripts/check-secrets.sh` scans staged files for patterns matching API keys, tokens, credentials (regex-based, runs in < 1s)
- [ ] CI step: `bundler-audit` checks for vulnerable gem versions, `npm audit` checks admin frontend
- [ ] Secret rotation procedure documented: `docs/runbooks/secret-rotation.md` with step-by-step for each secret type (Firebase service account, RevenueCat keys, DB credentials, Redis credentials, admin JWT signing key, OTP HMAC secret)
- [ ] Secrets inventory: `docs/secrets/inventory.md` lists every secret, which environments use it, rotation frequency, and owner

**Technical Notes:**
- Pre-commit hook patterns: `/[A-Za-z0-9]{32,}/ near /(key|secret|token|credential)/i` — broad enough to catch real secrets, specific enough to avoid false positives on UUIDs
- Kubernetes External Secrets Operator (ESO) placeholder: `infra/k8s/base/external-secret.yml.example` — ready to activate when Vault is provisioned
- DB credential rotation: requires rolling restart of API and Sidekiq pods — documented in runbook
- Admin JWT signing key rotation: old key valid for 24h after rotation (dual-key verification period)

**Subtasks:**
- Create `.env.example` from config schema
- Create `scripts/check-secrets.sh` pre-commit hook
- Configure `.pre-commit-config.yaml` (or Git hooks directly)
- Create Kubernetes Secret manifests for each environment (with placeholder values)
- Create `docs/runbooks/secret-rotation.md`
- Create `docs/secrets/inventory.md`
- Add `bundler-audit` and `npm audit` to CI workflow

#### Story: Implement Runtime Configuration via Admin Panel

**Description:**
Allow admins to modify a curated set of safe runtime configuration values without code deployment or infrastructure access. Changes take effect within 60 seconds (Redis cache TTL). This enables rapid response to operational situations (maintenance mode, rate limit adjustment, practice time limits).

**Acceptance Criteria:**
- [ ] `runtime_configs` table: `id (uuid)`, `key (string, unique)`, `value (text)`, `value_type (enum: string, integer, boolean, json)`, `description (text)`, `editable_by (enum: admin, support, system)`, `last_changed_by_admin_id`, `last_changed_at`, `created_at`, `updated_at`
- [ ] Admin endpoint: `GET /admin/api/v1/config` — lists all runtime configs with current values
- [ ] Admin endpoint: `PATCH /admin/api/v1/config/:key` — updates a runtime config value
- [ ] Changes audit-logged (who, what, when, old value, new value)
- [ ] Values cached in Redis (key: `runtime_config:#{key}`, TTL: 60 seconds)
- [ ] `LumenConfig.runtime(:key)` method reads from Redis (falls back to DB, falls back to default)
- [ ] Editable runtime configs (initial set):
  - `maintenance_mode` (boolean) — admin only
  - `maintenance_message` (string) — admin only
  - `minimum_app_version` (string) — admin only
  - `daily_practice_limit_minutes` (integer) — support
  - `trial_duration_days` (integer) — admin only
  - `grace_period_hours` (integer) — admin only
  - `entitlements_cache_ttl_seconds` (integer) — admin only
- [ ] Admin UI: config page with grouped settings, inline editing, save confirmation
- [ ] Type validation enforced: boolean configs reject non-boolean values, integer configs reject non-numeric values

**Technical Notes:**
- Runtime configs are seeded on deployment — new keys added via migration or seed script
- `system` editable-by level: only changed by background jobs or system events (e.g., auto-maintenance during detected outage)
- Redis fallback chain: Redis → DB → ENV → default — ensures value always available even if Redis is down
- Admin UI groups configs by category: "App Behaviour", "Security", "Limits", "Feature Experiments"

**Subtasks:**
- Create `runtime_configs` table migration
- Create `app/models/runtime_config.rb` with type coercion and validation
- Create `app/services/runtime_config_manager.rb` with Redis caching
- Extend `LumenConfig` with `runtime` method
- Create admin API endpoints for config listing and updating
- Create admin UI `ConfigPage` component with inline editing
- Seed initial runtime configs
- Write RSpec specs: config reading, caching, type validation, audit logging

---

## 11. Security & Compliance

### EPIC: Defence-in-Depth Security Architecture

**Goal:**
Implement a multi-layered security architecture that protects user data, prevents abuse, ensures regulatory compliance, and provides complete audit trails. Security is not a bolt-on — it is embedded in every layer from network ingress to database queries. The system must withstand automated attacks, comply with GDPR and App Store review requirements, and provide forensic capability for incident response.

**Rationale:**
A language-learning app handles personal data (email, learning progress, subscription billing), authentication credentials (Firebase tokens), and payment indicators (RevenueCat subscriber IDs). A breach impacts user trust irreversibly. The OWASP Top 10 provides the baseline — our security posture must exceed it. Rate limiting prevents abuse and runaway costs. Audit logging enables incident response. Secure headers prevent client-side exploitation. Together, these layers create a security posture appropriate for a consumer subscription product.

**Success Metrics:**
- Zero OWASP Top 10 vulnerabilities in production (verified by automated scanning)
- 100% of API requests rate-limited (no unprotected endpoint)
- 100% of admin mutations audit-logged
- Incident detection to response: < 15 minutes (automated alerting)
- Annual penetration test: zero critical findings

#### Story: Implement JWT Validation & Token Security

**Description:**
Harden the JWT validation pipeline beyond basic signature verification. Handle edge cases: token reuse after revocation, clock skew attacks, algorithm confusion attacks, and key ID (kid) manipulation.

**Acceptance Criteria:**
- [ ] JWT validation explicitly specifies `algorithm: 'RS256'` — rejects tokens with different algorithm headers (prevents HS256 confusion attack where attacker uses public key as HMAC secret)
- [ ] Token `kid` (key ID) header validated against known Google JWKS key IDs — tokens with unknown `kid` rejected before signature verification (prevents key substitution)
- [ ] Token revocation check: after signature verification, check if `user.auth_revoked` flag is set — if true, reject with `403 account_revoked`
- [ ] Clock skew tolerance: maximum 30 seconds on `exp` and `iat` claims — larger skew indicates clock manipulation or replay
- [ ] Token reuse window: `jti` (JWT ID) claim tracked — if same `jti` appears within token's validity window, second usage rejected (prevents relay attacks)
  - `jti` tracking stored in Redis SET with TTL matching token lifetime (1 hour)
  - Only enforced for mutation requests (POST/PUT/PATCH/DELETE) — idempotent reads tolerate replay
- [ ] Custom claims extracted and validated: `firebase.sign_in_provider` must be in allowed list (`apple.com`, `google.com`, `emailLink`, `phone`) — `password` provider is explicitly rejected (passwordless-only policy)
- [ ] Malformed token handling: garbled tokens, tokens with extra segments, tokens with base64-invalid payloads — all return `401` with generic error (no information leakage about which check failed)

**Technical Notes:**
- Algorithm confusion attack: attacker sets JWT `alg` header to `HS256` and signs with the RS256 public key. If the verifier doesn't enforce algorithm, it verifies successfully. Prevention: `JWT.decode(token, key, true, algorithm: 'RS256')` — never `algorithms: ['RS256', 'HS256']`
- `jti` tracking is optional if performance impact is measured in production — start with logging duplicate `jti` occurrences, enforce blocking if abuse detected
- Error messages for auth failures: always generic "Invalid or expired token" — never "Token expired" vs "Invalid signature" (prevents oracle attacks)

**Subtasks:**
- Update `FirebaseAuthMiddleware` with explicit algorithm enforcement
- Add `kid` validation against JWKS key set
- Implement `jti` tracking in Redis
- Add `auth_revoked` check to user resolution
- Write RSpec specs: algorithm confusion attempt, unknown kid, revoked user, clock skew attack, duplicate jti
- Security review: ensure no information leakage in error responses

#### Story: Implement Rate Limiting & Abuse Prevention

**Description:**
Deploy rate limiting at multiple levels: global (infrastructure), per-IP, and per-user. Rate limits protect against brute force attacks, credential stuffing, API abuse, and denial of service. Limits are configurable per endpoint and per tier.

**Acceptance Criteria:**
- [ ] Rack::Attack middleware configured with the following rate limits:
  - **Global**: 1000 requests/second across all IPs (circuit breaker against DDoS)
  - **Per-IP (unauthenticated)**: 20 requests/minute to `/webhooks/*`, 5 requests/minute to login endpoints
  - **Per-User (authenticated)**: 120 requests/minute default, 60 requests/minute for `/api/v1/entitlements`, 10 requests/minute for mutation endpoints (POST/PUT/PATCH/DELETE)
  - **Admin API**: 300 requests/minute per admin user
- [ ] Rate limit headers on every response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` (Unix timestamp)
- [ ] On limit exceeded: `429 Too Many Requests` with `Retry-After` header (seconds) and JSON error body
- [ ] Throttle counter stored in Redis (not memory — survives process restarts and scales across pods)
- [ ] Safelist: internal monitoring IPs, health check probes
- [ ] Blocklist: admin can add IPs to blocklist via admin panel → returns 403 immediately
- [ ] Exponential penalty: after 3 rate limit violations in 10 minutes, client's limit reduced by 50% for 30 minutes (discourages automated retry)
- [ ] Rate limiting events logged: IP, path, user_id (if authenticated), counter value, limit value

**Technical Notes:**
- Rack::Attack uses Redis backend: `Rack::Attack.cache.store = ActiveSupport::Cache::RedisCacheStore.new(url: ENV['REDIS_URL'])`
- Per-user rate limiting requires user identification before rate check — use Firebase UID from JWT (middleware order: auth → rate limit)
- Tier-based rate adjustment: Royal users get 2x default limits (configurable in runtime config)
- Kubernetes also has nginx ingress rate limiting — this is the application-level layer (defence in depth, not redundancy)

**Subtasks:**
- Install and configure `rack-attack` gem
- Configure all rate limit rules in `config/initializers/rack_attack.rb`
- Implement Redis-backed rate limit counters
- Implement exponential penalty tracker
- Add safelist/blocklist from runtime config
- Create admin endpoints for blocklist management
- Write RSpec specs: each rate limit tier, exponential penalty, safelist bypass, blocklist rejection

#### Story: Implement Secure HTTP Headers & CORS Policy

**Description:**
Configure all HTTP responses with security headers that prevent XSS, clickjacking, MIME sniffing, and other client-side attacks. Define CORS policy that allows only the admin SPA to make cross-origin requests; iOS native requests do not require CORS.

**Acceptance Criteria:**
- [ ] All API responses include:
  - `X-Content-Type-Options: nosniff` — prevents MIME type sniffing
  - `X-Frame-Options: DENY` — prevents clickjacking via iframe embedding
  - `X-XSS-Protection: 0` — disables legacy XSS filter (CSP is preferred)
  - `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'` — API endpoints serve JSON only
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` — enforces HTTPS for 1 year
  - `Referrer-Policy: strict-origin-when-cross-origin` — limits referrer information leakage
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()` — disables browser features
  - `Cache-Control: no-store` — on authenticated responses (prevents caching of user data)
- [ ] CORS policy: `Access-Control-Allow-Origin` set to admin panel domain only (e.g., `https://admin.lumenlingo.com`)
- [ ] CORS credentials: `Access-Control-Allow-Credentials: true` (for httpOnly cookie auth)
- [ ] CORS allowed methods: `GET, POST, PATCH, DELETE, OPTIONS`
- [ ] CORS allowed headers: `Content-Type, Authorization, X-Request-Id, X-Client-Version, X-Platform, If-None-Match`
- [ ] CORS preflight cached: `Access-Control-Max-Age: 7200` (2 hours)
- [ ] No wildcard CORS: `Access-Control-Allow-Origin: *` is NEVER set

**Technical Notes:**
- Headers applied via Rails middleware: `config/initializers/security_headers.rb`
- CORS via `rack-cors` gem: configured per-environment (dev allows `localhost:5173`, prod allows only admin domain)
- `Cache-Control: no-store` on user-specific endpoints prevents CDN/proxy caching of authenticated data
- `HSTS preload` requires domain submission to hstspreload.org — add to deployment checklist

**Subtasks:**
- Create `config/initializers/security_headers.rb` middleware
- Install and configure `rack-cors` gem
- Configure per-environment CORS origins
- Write integration test: response headers present on all endpoints
- Write CORS test: cross-origin request from allowed origin succeeds, from disallowed origin fails

#### Story: Implement Audit Logging System

**Description:**
Build a comprehensive audit logging system that records every security-relevant event and every administrative action. Audit logs are immutable (append-only), timestamped, and retained for 24 months. They provide forensic capability for incident response and regulatory compliance.

**Acceptance Criteria:**
- [ ] `audit_logs` table: `id (uuid, generated)`, `event_type (string, indexed)`, `actor_type (enum: user, admin, system, webhook)`, `actor_id (uuid, nullable)`, `target_type (string, nullable)`, `target_id (uuid, nullable)`, `action (string)`, `details (jsonb)`, `ip_address (inet)`, `user_agent (text)`, `request_id (uuid)`, `created_at (timestamptz, indexed)`
- [ ] No UPDATE or DELETE allowed on `audit_logs` table — enforced by PostgreSQL RLS policy (role used by application has INSERT-only permission)
- [ ] Events recorded:
  - **Authentication**: login success, login failure (with IP), token refresh, auth revocation
  - **Authorization**: feature access granted, feature access denied (with feature and tier context)
  - **Subscription**: created, renewed, cancelled, expired, upgraded, downgraded, grace period entered/expired
  - **Admin actions**: all CRUD on users, overrides, feature flags, config changes, blocklist changes
  - **System events**: reconciliation discrepancy auto-corrected, background job failure, rate limit triggered (per-IP aggregate, not per-request)
- [ ] Audit log service: `AuditLogger.record(event_type:, actor:, target:, action:, details:, request:)`
- [ ] Request context (IP, user_agent, request_id) automatically captured from `Current.request` (ActiveSupport::CurrentAttributes)
- [ ] Table partitioned by month (same strategy as `user_events`)
- [ ] Admin endpoint: `GET /admin/api/v1/audit-logs` — paginated, filterable by event_type, actor, target, date range
- [ ] Retention: 24 months online, then archived to S3 as compressed JSONL files

**Technical Notes:**
- PostgreSQL RLS: create `audit_writer` role with INSERT-only on `audit_logs`; application connects with this role specifically for audit writes (connection pool separated)
- Alternatively, use a database trigger that prevents UPDATE/DELETE on `audit_logs` table (simpler to implement, same effect)
- `ActiveSupport::CurrentAttributes` pattern: `Current.request_id`, `Current.ip_address`, `Current.user_agent` set in `ApplicationController` before_action
- Async audit logging: records enqueued via Sidekiq to avoid adding latency to request path — audit writes cannot block user-facing response
- JSON search: `details @> '{"from_tier": "free"}' ` — JSONB @> operator for structured queries on details

**Subtasks:**
- Create partitioned `audit_logs` table migration
- Create database trigger or RLS policy preventing UPDATE/DELETE
- Create `app/services/audit_logger.rb`
- Create `app/jobs/write_audit_log_job.rb` (Sidekiq)
- Set up `ActiveSupport::CurrentAttributes` for request context
- Integrate audit logging into: auth middleware, admin controllers, subscription processor, entitlement resolver
- Create admin API endpoint for audit log viewing
- Create admin UI `AuditLogPage` component with filters
- Write RSpec specs: event recording, immutability enforcement, admin endpoint filtering

---

## 12. Observability & Monitoring

### EPIC: Full-Stack Observability Pipeline

**Goal:**
Implement structured logging, metrics collection, distributed tracing, and alerting across all system components. Every request must be traceable end-to-end (iOS → API → Sidekiq → database). Anomalies must be detected and alerted within 5 minutes. Dashboards must provide real-time operational visibility without requiring engineers to SSH into servers or query databases.

**Rationale:**
A system without observability is a system you cannot operate. When a user reports "my subscription isn't working," the support team needs to trace the event chain: RevenueCat webhook → event processor → tier change → entitlement update → iOS sync. Without structured logs and tracing, this investigation takes hours of cross-referencing log files. With proper observability, it takes seconds. Monitoring is not optional for production systems — it is the primary interface by which operations teams interact with the running system.

**Success Metrics:**
- Request tracing: any request traceable in < 30 seconds using request_id
- Alert detection to notification: < 5 minutes
- Dashboard load time: < 3 seconds
- Log search across 1 million entries: < 10 seconds
- Zero undetected outages exceeding 5 minutes

#### Story: Implement Structured JSON Logging

**Description:**
Replace Rails' default text logging with structured JSON logs that are parseable by log aggregation systems (Datadog, ELK, CloudWatch). Every log entry includes contextual fields that enable filtering and correlation without regex parsing.

**Acceptance Criteria:**
- [ ] All application logs output as JSON to stdout (12-factor app logging)
- [ ] Every log entry includes: `timestamp` (ISO 8601), `level` (debug/info/warn/error/fatal), `message`, `request_id`, `user_id` (if authenticated), `tier` (if authenticated), `source` (class/module name), `environment` (LUMEN_ENV)
- [ ] Request lifecycle logs (per-request, info level):
  - Request start: `method`, `path`, `ip`, `user_agent`, `content_length`
  - Request end: `status`, `duration_ms`, `db_time_ms`, `redis_time_ms`, `view_time_ms`
- [ ] Background job logs (per-job, info level):
  - Job start: `job_class`, `job_id`, `queue`, `args` (sanitised — no PII in args)
  - Job end: `job_class`, `job_id`, `status` (success/failure), `duration_ms`
  - Job failure: `job_class`, `job_id`, `error_class`, `error_message`, `backtrace` (first 10 lines)
- [ ] PII filtering: email addresses, Firebase tokens, and API keys automatically redacted in log output
- [ ] Log level configurable per environment via `LOG_LEVEL` env var (default: `info` in production, `debug` in development)
- [ ] No `puts`, `p`, or `pp` in production code — only structured logger calls

**Technical Notes:**
- Use `lograge` gem for request logging (replaces verbose Rails default) + `oj` gem for fast JSON serialisation
- Custom log formatter: `config/initializers/logging.rb` sets `Rails.logger = ActiveSupport::Logger.new(STDOUT)` with JSON formatter
- PII filter regex: `/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i` → `[EMAIL_REDACTED]`, `/eyJ[a-zA-Z0-9_-]+\.eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/` → `[JWT_REDACTED]`
- `request_id` propagated via `X-Request-Id` header — set by iOS client, echoed in response, present in all logs for that request

**Subtasks:**
- Install and configure `lograge` and `oj` gems
- Create custom JSON log formatter
- Implement PII filtering in log output
- Configure `ActiveSupport::CurrentAttributes` for request context propagation
- Configure Sidekiq structured logging
- Add request_id to response headers
- Write specs: log format validation, PII redaction, request correlation

#### Story: Implement Application Metrics & Health Endpoints

**Description:**
Expose application metrics via a Prometheus-compatible endpoint and health check endpoints for Kubernetes probes. Metrics provide quantitative insight into system behaviour; health checks provide binary up/down status for orchestration.

**Acceptance Criteria:**
- [ ] `GET /health` — Kubernetes liveness check: returns `200 OK` with `{ "status": "ok" }` if process is alive (no dependency checks)
- [ ] `GET /health/ready` — Kubernetes readiness check: returns `200 OK` if all dependencies healthy (PostgreSQL, Redis), `503 Service Unavailable` if any dependency unreachable
- [ ] `GET /metrics` — Prometheus-format metrics endpoint (protected by basic auth in production)
- [ ] Application metrics:
  - `http_requests_total` (counter): labels `method`, `path`, `status`
  - `http_request_duration_seconds` (histogram): labels `method`, `path`
  - `active_subscriptions` (gauge): labels `tier`
  - `entitlement_cache_hits_total` (counter)
  - `entitlement_cache_misses_total` (counter)
  - `revenuecat_webhook_processing_duration_seconds` (histogram)
  - `revenuecat_webhook_failures_total` (counter)
  - `sidekiq_jobs_processed_total` (counter): labels `queue`, `job_class`
  - `sidekiq_jobs_failed_total` (counter): labels `queue`, `job_class`
  - `sidekiq_queue_depth` (gauge): labels `queue`
  - `db_pool_size` (gauge), `db_pool_waiting` (gauge)
- [ ] Health check endpoints excluded from request logging and metrics (avoid noise)
- [ ] Metrics endpoint scrape time: < 100ms

**Technical Notes:**
- Use `prometheus-client` gem (or `yabeda` + `yabeda-rails` + `yabeda-sidekiq` for Rails-native integration)
- `yabeda` provides automatic Rails and Sidekiq instrumentation — minimal custom code required
- Health check dependency timeouts: PostgreSQL 2s, Redis 1s — don't let health checks hang
- Subscription gauge updated by periodic Sidekiq job (every 5 minutes), not on every request

**Subtasks:**
- Install and configure metrics gems (`yabeda-rails`, `yabeda-sidekiq`, `yabeda-prometheus`)
- Create `app/controllers/health_controller.rb` with liveness and readiness actions
- Create `config/initializers/metrics.rb` with custom metric definitions
- Create `UpdateSubscriptionMetricsJob` (periodic gauge update)
- Add health/metrics routes (excluded from JWT middleware)
- Write specs: health check responses, metric increments on requests

#### Story: Implement Distributed Tracing

**Description:**
Enable request tracing that follows a single operation across the iOS client, Rails API, Sidekiq jobs, and external service calls (Firebase, RevenueCat). A single `request_id` links all log entries and spans for a complete picture of request execution.

**Acceptance Criteria:**
- [ ] `X-Request-Id` header: if provided by iOS client, use it; if not, generate UUID and set it
- [ ] Request ID propagated to: all log entries, Sidekiq job metadata, external HTTP calls (Firebase JWKS, RevenueCat API), error reports, audit logs
- [ ] Sidekiq jobs include `request_id` in job payload — log entries for async processing link back to originating request
- [ ] External HTTP calls include `X-Request-Id` header (where endpoint supports it)
- [ ] Admin can search logs by request ID: `GET /admin/api/v1/logs?request_id=<uuid>`
- [ ] Trace context follows OpenTelemetry W3C Trace Context format for future compatibility with APM tools (Datadog, New Relic, Honeycomb)

**Technical Notes:**
- `ActionDispatch::RequestId` middleware (built into Rails) handles generation and propagation to log tags
- Sidekiq middleware: `app/middleware/sidekiq/request_id_middleware.rb` — injects `request_id` into job class before execution, sets `Current.request_id`
- External HTTP calls: use `Net::HTTP` wrapper that automatically adds `X-Request-Id` header
- OpenTelemetry: add `opentelemetry-sdk` and `opentelemetry-instrumentation-all` gems — works alongside existing logging

**Subtasks:**
- Configure `ActionDispatch::RequestId` middleware
- Create Sidekiq server middleware for request ID propagation
- Create HTTP client wrapper with request ID injection
- Update `AuditLogger` and `UserEventRecorder` to include request ID
- Configure OpenTelemetry SDK with stdout exporter (swap to Datadog/OTLP exporter when APM provisioned)
- Write specs: request ID propagation through request lifecycle, Sidekiq job correlation

#### Story: Implement Alerting & Anomaly Detection

**Description:**
Define alerting rules that detect operational anomalies and notify the on-call team. Alerts fire on: error rate spikes, latency degradation, subscription processing failures, security events, and infrastructure health issues. Every alert has a runbook reference.

**Acceptance Criteria:**
- [ ] Alerting rules defined in `infra/alerting/rules.yml` (Prometheus alerting format or equivalent):
  - **ErrorRateHigh**: `http_requests_total{status=~"5.."} / http_requests_total > 0.05` for 5 minutes → critical
  - **LatencyHigh**: `http_request_duration_seconds p99 > 2.0` for 5 minutes → warning
  - **WebhookProcessingFailed**: `revenuecat_webhook_failures_total increase > 10 in 15 minutes` → critical
  - **ReconciliationDiscrepancy**: `reconciliation discrepancy rate > 1%` → warning
  - **SidekiqQueueBacklog**: `sidekiq_queue_depth > 1000` for 10 minutes → warning, `> 5000` for 5 minutes → critical
  - **DatabaseConnectionsExhausted**: `db_pool_waiting > 0` for 5 minutes → critical
  - **RateLimitBurst**: single IP triggers rate limit > 100 times in 5 minutes → security warning
  - **AuthFailureSpike**: `auth_failures_total increase > 50 in 5 minutes` → security critical
  - **CertificateExpiry**: SSL certificate expires in < 14 days → warning, < 7 days → critical
- [ ] Each alert includes: severity (critical/warning/info), description, current value, threshold, runbook URL
- [ ] Notification channels: Slack (#alerts-critical, #alerts-warning), PagerDuty (critical only)
- [ ] Alert deduplication: same alert doesn't fire repeatedly (resolved → firing state machine)
- [ ] Runbook for each alert: `docs/runbooks/alert-<name>.md` with diagnosis steps and remediation

**Technical Notes:**
- Initial implementation: alerts evaluated by a Sidekiq-Cron job (every 1 minute) that queries Redis metrics counters and logs to Slack webhook
- Future: migrate to Prometheus Alertmanager when full monitoring stack is provisioned
- PagerDuty integration via webhook (secret in PAGERDUTY_API_KEY)
- Alert state stored in Redis: `alert:<name>:state` → `firing|resolved`, `alert:<name>:fired_at`

**Subtasks:**
- Create `app/services/alert_evaluator.rb` — evaluates all alerting rules against current metrics
- Create `app/services/alert_notifier.rb` — sends notifications to configured channels
- Create `app/jobs/evaluate_alerts_job.rb` (Sidekiq-Cron, every 1 minute)
- Create `infra/alerting/rules.yml` with all rule definitions
- Create runbook templates for each alert type
- Configure Slack webhook and PagerDuty integration (env vars)
- Write RSpec specs: alert evaluation logic, state transitions, notification delivery

---

## 13. Background Jobs & Async Processing

### EPIC: Reliable Asynchronous Job Processing Pipeline

**Goal:**
Build a robust background job processing system using Sidekiq Pro that handles all asynchronous operations: webhook processing, subscription reconciliation, entitlement cache management, metric aggregation, data archival, and notifications. Jobs must be idempotent, retriable, observable, and never lose work — even during deployments or infrastructure failures.

**Rationale:**
In a subscription-based system, the most critical operations happen asynchronously. RevenueCat webhooks arrive at unpredictable times. Reconciliation must run on schedule regardless of API traffic. Entitlement cache warming prevents cold-start latency. Email notifications cannot block API responses. The background job system is the nervous system of the backend — if it fails, subscriptions aren't processed, entitlements drift, and users lose access. Sidekiq Pro provides the reliability guarantees (reliable fetch, batch processing) that the open-source version lacks.

**Success Metrics:**
- Job failure rate: < 0.1% (99.9% success)
- Webhook processing latency: < 5 seconds (receipt to completion)
- Zero lost jobs during deployment (reliable fetch + graceful shutdown)
- Queue depth: < 100 during normal operation (backlog clears within 15 minutes of spike)
- Dead set: < 10 jobs at any time (dead jobs investigated within 24 hours)

#### Story: Configure Sidekiq Pro Infrastructure

**Description:**
Set up Sidekiq Pro with multiple queues, concurrency tuning, and reliability features. Queue priority ensures critical jobs (webhook processing, entitlement updates) execute before lower-priority work (metrics aggregation, data archival).

**Acceptance Criteria:**
- [ ] Sidekiq Pro 7+ installed with valid license key (ENV: `BUNDLE_GEMS__CONTRIBSYS__COM`)
- [ ] Queue hierarchy configured (descending priority):
  - `critical` (weight 6): webhook processing, entitlement invalidation, auth revocation
  - `default` (weight 3): subscription reconciliation, user provisioning, email notifications
  - `low` (weight 1): metrics aggregation, data archival, cache warming, log cleanup
  - `mailers` (weight 2): email delivery (separate queue for monitoring/throttling)
- [ ] Concurrency: 15 threads per process (Kubernetes: 2 Sidekiq pods in production, 1 in staging)
- [ ] Reliable fetch enabled: `super_fetch!` — jobs survive pod restarts without loss
- [ ] Death handler: when job moves to dead set, fire alert to Slack with job details
- [ ] Periodic jobs (Sidekiq-Cron / Sidekiq Enterprise periodic):
  - `SubscriptionReconciliationJob`: every 6 hours
  - `EntitlementCacheWarmJob`: every 30 minutes
  - `UpdateSubscriptionMetricsJob`: every 5 minutes
  - `EvaluateAlertsJob`: every 1 minute
  - `PurgeExpiredOverridesJob`: daily at 02:00 UTC
  - `ArchiveOldEventsJob`: daily at 03:00 UTC
  - `ArchiveOldAuditLogsJob`: weekly on Sunday at 04:00 UTC
- [ ] Redis namespace: `sidekiq:lumen:<environment>` — multiple environments can share a Redis cluster without collision
- [ ] Sidekiq Web UI mounted at `/admin/sidekiq` — protected by admin authentication middleware

**Technical Notes:**
- `super_fetch!` in `config/initializers/sidekiq.rb`: ensures jobs in-progress are returned to queue if worker crashes
- Weight-based priority: `critical` queue processed 6x as often as `low` — ensures webhooks never wait behind metric aggregation
- Database connection pool: each Sidekiq thread needs a DB connection — set `pool: 15` in `database.yml` for Sidekiq process
- Redis connection pool: Sidekiq needs `concurrency + 5` connections — set in `config/initializers/sidekiq.rb`

**Subtasks:**
- Configure Sidekiq Pro in Gemfile with license
- Create `config/initializers/sidekiq.rb` with queues, concurrency, Redis config
- Create `config/sidekiq.yml` with queue weights
- Configure periodic job schedule
- Mount Sidekiq Web UI with admin auth middleware
- Create death handler integration (Slack notification)
- Write deployment manifest for Sidekiq pods (Kubernetes)

#### Story: Implement Job Base Classes & Patterns

**Description:**
Create base job classes that enforce the patterns all background jobs must follow: idempotency, structured logging, error classification (transient vs permanent), retry configuration, and metric reporting. Every job that inherits from these bases automatically gets correct behaviour.

**Acceptance Criteria:**
- [ ] `app/jobs/application_job.rb`: base class for all Sidekiq workers:
  - Includes `Sidekiq::Job` with default options: `retry: 5`, `dead: true`
  - Wraps `perform` in structured logging (job start, job end, duration, status)
  - Captures `request_id` from job args for correlation
  - Reports job duration to Prometheus histogram
  - Classifies errors: transient (network timeout, Redis connection lost, DB connection pool exhaustion) vs permanent (validation error, missing record, logic error)
  - Transient errors: retry with exponential backoff (Sidekiq default)
  - Permanent errors: skip to dead set immediately (no retry waste)
- [ ] `app/jobs/concerns/idempotent_job.rb`: concern that adds idempotency key tracking:
  - Before perform: check Redis for `idempotent:<job_class>:<idempotency_key>` — if exists, skip execution
  - After successful perform: set Redis key with TTL (configurable, default 24 hours)
  - Idempotency key derived from job-specific logic (e.g., `webhook:<event_id>`, `reconcile:<user_id>:<date>`)
- [ ] `app/jobs/concerns/rate_limited_job.rb`: concern that limits job execution rate:
  - Before perform: check Redis rate counter — if over limit, re-enqueue with delay
  - Use case: RevenueCat API calls limited to 100/minute — reconciliation jobs must not exceed
- [ ] Error classification DSL:
```ruby
class ProcessWebhookJob < ApplicationJob
  transient_errors Network::TimeoutError, Redis::ConnectionError
  permanent_errors JSON::ParserError, ActiveRecord::RecordNotFound

  def perform(event_id)
    # If Network::TimeoutError → retry
    # If JSON::ParserError → dead set immediately
  end
end
```

**Technical Notes:**
- Sidekiq `retry: 5` with default backoff: ~25 retries over ~21 days is too many for most jobs. Override per-job: webhooks get 10 retries (in case of transient RevenueCat issues), reconciliation gets 3 retries
- Idempotency key TTL: 24 hours for webhooks (RevenueCat may replay), 6 hours for reconciliation (runs every 6 hours)
- Rate limiting uses Redis INCR with EXPIRE (sliding window) — same pattern as Rack::Attack but at job level
- Prometheus metrics: `sidekiq_job_duration_seconds{job_class}`, `sidekiq_job_errors_total{job_class,error_type}`

**Subtasks:**
- Create `app/jobs/application_job.rb` with logging and metric reporting
- Create `app/jobs/concerns/idempotent_job.rb`
- Create `app/jobs/concerns/rate_limited_job.rb`
- Create error classification module
- Update all existing jobs to inherit from `ApplicationJob`
- Write RSpec specs: idempotency (duplicate job skipped), rate limiting (excess job delayed), error classification (transient retried, permanent killed)

#### Story: Implement Data Lifecycle Management Jobs

**Description:**
Create background jobs that manage data lifecycle: archiving old events, cleaning expired overrides, rotating audit logs to cold storage, and pruning stale cache entries. These jobs prevent unbounded data growth while preserving data for compliance.

**Acceptance Criteria:**
- [ ] `ArchiveOldEventsJob`: moves `user_events` older than 6 months from active partitions to S3 as compressed JSONL files, then detaches and drops old partitions
  - Archive file naming: `s3://lumen-lingo-<env>-archive/user_events/{year}/{month}/events_{partition_name}.jsonl.gz`
  - Verification: row count in archive matches row count before partition drop
  - Runs daily at 03:00 UTC, processes one month's partition per run
- [ ] `ArchiveOldAuditLogsJob`: similar to events archival but for `audit_logs` — 24-month retention before archival
- [ ] `PurgeExpiredOverridesJob`: finds all `entitlement_overrides` with `expires_at < now`, sets `active = false`, invalidates cached entitlements for affected users
  - Runs daily at 02:00 UTC
  - Logs each expired override with user context
- [ ] `CleanupStaleSessionsJob`: removes `practice_sessions` in `started` state older than 24 hours (abandoned sessions) — marks as `abandoned`, doesn't delete
- [ ] `PruneRedisCacheJob`: deletes Redis keys matching `entitlements:*` with no TTL set (safety net for TTL bugs)
  - Runs weekly, uses SCAN (not KEYS) to avoid Redis blocking
- [ ] All archival jobs produce completion reports: rows processed, bytes archived, errors encountered

**Technical Notes:**
- S3 upload via `aws-sdk-s3` gem — credentials from environment (IRSA in Kubernetes, env vars in dev)
- Partition detach: `ALTER TABLE user_events DETACH PARTITION user_events_2024_01` — non-blocking in PostgreSQL 14+
- JSONL format (one JSON object per line): enables streaming reads, grep-friendly, compatible with Athena/BigQuery for ad-hoc analysis
- gzip compression: ~10:1 ratio for JSON data — 1GB of events → ~100MB in S3

**Subtasks:**
- Create `ArchiveOldEventsJob` with S3 upload and partition management
- Create `ArchiveOldAuditLogsJob`
- Create `PurgeExpiredOverridesJob` with entitlement cache invalidation
- Create `CleanupStaleSessionsJob`
- Create `PruneRedisCacheJob` with SCAN-based key discovery
- Create S3 client configuration
- Write RSpec specs: archival row count verification, expired override purging, stale session cleanup

---

## 14. Testing Strategy

### EPIC: Comprehensive Test Suite & Quality Assurance Pipeline

**Goal:**
Establish a testing strategy that catches defects before they reach production, validates business logic correctness (especially tier/entitlement rules), and runs fast enough to enable continuous deployment. The test suite is the safety net — no code ships without passing every layer of verification.

**Rationale:**
In a subscription-based product, correctness bugs directly impact revenue and user trust. If a Pro user loses access to soundscapes, they churn. If a Free user gains Royal access, we lose revenue. The entitlement system has complex business rules (10 features × 5 tiers × overrides × trials × grace periods) — manual testing cannot cover this matrix. Automated tests, structured by layer and purpose, provide confidence that every deployment preserves correctness.

**Success Metrics:**
- Test suite run time (full): < 5 minutes in CI
- Code coverage: > 90% line coverage, > 85% branch coverage
- Mutation testing: > 80% mutation score on critical paths (entitlements, subscriptions)
- Zero production defects traceable to untested code paths
- Every PR: green CI required for merge (no exceptions)

#### Story: Establish Test Infrastructure & Conventions

**Description:**
Set up the test infrastructure: RSpec configuration, factory definitions, shared examples, test database management, and CI integration. Establish conventions that every developer follows for test organisation, naming, and coverage.

**Acceptance Criteria:**
- [ ] RSpec 3.13+ configured as test framework
- [ ] FactoryBot factories for all models:
  - `user`: firebase_uid auto-generated, traits: `:free`, `:pro`, `:elite`, `:royal`, `:trial`, `:suspended`
  - `admin_user`: email auto-generated, traits: `:admin_role`, `:support_role`
  - `subscription`: traits: `:active`, `:cancelled`, `:expired`, `:in_grace_period`, `:pending_downgrade`
  - `entitlement_override`: traits: `:active`, `:expired`, `:revoked`
  - `runtime_config`: traits for each config key
  - `feature_flag`: traits: `:boolean_on`, `:boolean_off`, `:percentage`, `:user_list`
- [ ] Test database strategy: `DatabaseCleaner` with transaction strategy (fast), switching to truncation for tests needing it (e.g., multi-thread)
- [ ] Shared examples:
  - `it_behaves_like "an authenticated endpoint"` — tests 401 without token, 403 with invalid token, 403 with revoked user
  - `it_behaves_like "a paginated endpoint"` — tests cursor-based pagination, page size limits
  - `it_behaves_like "an admin-only endpoint"` — tests role-based access (admin vs support)
  - `it_behaves_like "an audited action"` — tests audit log creation for mutations
  - `it_behaves_like "a rate-limited endpoint"` — tests rate limit headers and 429 response
- [ ] VCR or WebMock for external service stubs (Firebase JWKS, RevenueCat API)
- [ ] SimpleCov configured: minimum coverage 90%, fail CI if below threshold
- [ ] Test organisation:
  - `spec/requests/` — API endpoint tests (integration)
  - `spec/services/` — service object unit tests
  - `spec/models/` — model validation and scope tests
  - `spec/jobs/` — background job tests
  - `spec/middleware/` — middleware tests
  - `spec/support/` — shared examples, helpers, factories

**Technical Notes:**
- Faker gem for realistic test data generation
- `let_it_be` from `test-prof` gem for test data that doesn't change between examples (significant speedup for read-only tests)
- CI parallelisation: `parallel_tests` gem splits spec files across CI nodes — target 2-3 minute wall time
- Pending test convention: `xit` or `pending` for known issues — tracked in CI output, never ignored indefinitely

**Subtasks:**
- Configure RSpec with recommended settings
- Install and configure: FactoryBot, Faker, SimpleCov, WebMock, DatabaseCleaner, test-prof
- Create factories for all models
- Create shared examples for authentication, pagination, admin access, auditing, rate limiting
- Configure SimpleCov with minimum threshold
- Configure CI workflow step for test execution with parallelisation
- Create test helper modules for common setup (authenticated requests, admin requests)

#### Story: Define Entitlement System Test Matrix

**Description:**
Create comprehensive tests for the entitlement resolution system — the most business-critical code in the backend. The test matrix must cover every combination of tier, feature, override state, trial state, and grace period state that affects what a user can access.

**Acceptance Criteria:**
- [ ] **Tier × Feature matrix tests**: for each of the 5 tiers (free, pro, elite, royal, trial) × 10 features, verify correct `allowed_count`:
  - free + soundscapes = 0
  - free + language_pairs = 1
  - free + unlimited_practice = 0
  - free + breathing_orbs = 0
  - free + quantum_flow = 0
  - free + nebula_drift = 0
  - free + offline_mode = 0
  - free + flashcard_deck_size = 30
  - free + grammar_difficulty = 1
  - free + word_builder_difficulty = 1
  - pro + soundscapes = 1
  - pro + language_pairs = 3
  - pro + flashcard_deck_size = 100
  - pro + grammar_difficulty = 3
  - pro + word_builder_difficulty = 3
  - elite + soundscapes = 8
  - elite + language_pairs = 10
  - elite + flashcard_deck_size = 500
  - elite + grammar_difficulty = 5
  - elite + word_builder_difficulty = 5
  - royal + soundscapes = 12
  - royal + language_pairs = 2147483647 (unlimited)
  - royal + flashcard_deck_size = 2147483647
  - royal + unlimited_practice = 1
  - royal + breathing_orbs = 1
  - royal + quantum_flow = 1
  - royal + nebula_drift = 1
  - royal + offline_mode = 1
  - trial: identical to royal for all features
- [ ] **Override tests**:
  - Active override increases allowed_count beyond tier level → override value returned
  - Active override for feature not in tier → override value returned (access granted)
  - Expired override → tier-level value returned (override ignored)
  - Revoked override → tier-level value returned
  - Multiple overrides for same feature → most recently created active override wins
- [ ] **Trial tests**:
  - User with active trial: royal-level entitlements for all features
  - Trial expired < 24h ago: royal-level entitlements still active (grace)
  - Trial expired > 24h ago: falls back to actual tier entitlements
  - Trial + override: override takes precedence if higher than trial value
- [ ] **Grace period tests**:
  - Subscription in grace period: previous tier entitlements maintained
  - Grace period expired: drops to free tier entitlements
  - Grace period + override: override maintained regardless of grace state
- [ ] **Edge case tests**:
  - User with no subscription record → free tier entitlements
  - User with deleted/nil tier_id → free tier entitlements
  - Feature not in database → returns 0 (deny by default)
  - Tier not in database → returns free tier entitlements (safe fallback)
  - Override with `allowed_count: 0` → explicitly denies feature (override can restrict)
  - Concurrent entitlement requests → consistent result (no race conditions)

**Technical Notes:**
- Use RSpec `shared_examples` + `where` table for matrix tests:
```ruby
shared_examples "correct entitlement" do |tier, feature, expected_count|
  it "#{tier} + #{feature} = #{expected_count}" do
    user = create(:user, tier.to_sym)
    result = EntitlementResolver.new(user).resolve
    expect(result.find { |e| e[:feature] == feature }[:allowed_count]).to eq(expected_count)
  end
end
```
- Matrix tests: 5 tiers × 10 features = 50 base cases, plus ~30 override/trial/grace/edge cases = ~80 tests
- Mutation testing (`mutant` gem) on `EntitlementResolver` — every conditional must be kill-tested

**Subtasks:**
- Create `spec/services/entitlement_resolver_spec.rb` with full tier × feature matrix
- Create override interaction tests
- Create trial state tests
- Create grace period interaction tests
- Create edge case tests
- Configure `mutant` gem for EntitlementResolver mutation testing
- Verify mutation score > 80%

#### Story: Implement API Integration Tests

**Description:**
Create request-level integration tests for every API endpoint. These tests verify the full request lifecycle: authentication, authorization, input validation, business logic, response format, and HTTP semantics. Each endpoint gets positive tests, negative tests, and edge case tests.

**Acceptance Criteria:**
- [ ] **Authentication endpoints** (`/api/v1/auth/*`):
  - Valid Firebase JWT → 200 with user data and entitlements
  - Missing Authorization header → 401
  - Malformed JWT → 401
  - Expired JWT → 401
  - Revoked user JWT → 403
  - First-time Firebase UID → user created (JIT provisioning)
  - Duplicate provision request → idempotent (same user returned)

- [ ] **Entitlements endpoint** (`/api/v1/entitlements`):
  - Authenticated free user → correct entitlements (10 features with free-tier counts)
  - Authenticated pro user → correct entitlements (10 features with pro-tier counts)
  - User with active override → override reflected in response
  - Response includes `cache_ttl`, `tier`, `all_features` array
  - `If-None-Match` with current ETag → 304 Not Modified
  - `If-None-Match` with stale ETag → 200 with fresh data

- [ ] **Practice sessions** (`/api/v1/practice-sessions`):
  - Create session → 201 with session ID
  - Complete session with score → 200
  - Complete already-completed session → 409 Conflict
  - Create session for locked language pair → 403

- [ ] **App config** (`/api/v1/config`):
  - Returns minimum app version, feature flags, maintenance mode
  - Maintenance mode active → includes maintenance message
  - Correct format for iOS consumption

- [ ] **Admin endpoints** (all under `/admin/api/v1/*`):
  - Admin JWT required (not Firebase JWT)
  - Support role: can view users, create overrides with expiry
  - Admin role: can do everything support can + modify config, manage flags, non-expiring overrides
  - Invalid admin JWT → 401
  - Support role attempts admin-only action → 403

- [ ] **Webhook endpoint** (`/webhooks/revenuecat`):
  - Valid webhook with auth key → 200 and job enqueued
  - Missing auth key → 401
  - Invalid auth key → 401
  - Duplicate event (same event ID) → 200 (idempotent, no duplicate processing)
  - Malformed JSON body → 400

**Technical Notes:**
- Use `request` specs (not controller specs) — tests full middleware stack including authentication
- Firebase JWT stubs: `WebMock.stub_request(:get, firebase_jwks_url).to_return(body: test_jwks_json)`
- Helper: `authenticated_headers(user)` — generates valid JWT for given user's Firebase UID
- Response format validation: use `json_matchers` gem or custom matchers to verify response schema

**Subtasks:**
- Create `spec/requests/api/v1/auth_spec.rb`
- Create `spec/requests/api/v1/entitlements_spec.rb`
- Create `spec/requests/api/v1/practice_sessions_spec.rb`
- Create `spec/requests/api/v1/config_spec.rb`
- Create `spec/requests/admin/api/v1/users_spec.rb`
- Create `spec/requests/admin/api/v1/overrides_spec.rb`
- Create `spec/requests/admin/api/v1/feature_flags_spec.rb`
- Create `spec/requests/admin/api/v1/config_spec.rb`
- Create `spec/requests/webhooks/revenuecat_spec.rb`
- Create JWT test helpers and factories
- Create response schema matchers

---

## 15. Deployment Pipelines

### EPIC: Zero-Downtime Continuous Deployment Pipeline

**Goal:**
Build a fully automated deployment pipeline that takes code from a pull request merge to running in production with zero downtime, automatic rollback on failure, and complete auditability. No human intervention required for standard deployments. Humans approve promotion to production only — everything else is automated.

**Rationale:**
Manual deployments are the leading cause of production incidents. Copy-paste errors, skipped steps, wrong environment targeting, and "it worked on my machine" are eliminated by automation. A robust CI/CD pipeline is the multiplier that turns development velocity into shipped features. For Lumen Lingo, where subscription correctness directly impacts revenue, every deployment must be validated by automated tests, staged through progressive environments, and instantly rollback-capable.

**Success Metrics:**
- PR merge to production: < 30 minutes (fully automated)
- Zero-downtime deployments: no 5xx errors during deploy
- Rollback time: < 2 minutes (automated on failure detection)
- CI pass rate: > 95% (flaky tests are bugs, not acceptable)
- Deployment frequency: multiple times per day when needed

#### Story: Configure GitHub Actions CI Pipeline

**Description:**
Set up the CI pipeline that runs on every push and pull request. The pipeline validates code quality, runs the full test suite, builds Docker images, and scans for vulnerabilities. All checks must pass before a PR can be merged.

**Acceptance Criteria:**
- [ ] `.github/workflows/ci.yml` triggered on: push to `main`, pull request to `main`
- [ ] **Lint step** (parallel):
  - `rubocop --parallel` (Ruby style + security cops)
  - `brakeman --no-pager` (Rails security static analysis)
  - `bundler-audit check` (vulnerable gem detection)
  - `eslint` on admin frontend (JS/TS linting)
  - `npm audit --production` on admin frontend (vulnerable npm packages)
- [ ] **Test step** (parallel, depends on lint):
  - `rspec --format progress --format RspecJunitFormatter --out test-results/rspec.xml`
  - Parallelised across 3 CI nodes using `parallel_tests`
  - PostgreSQL 16 and Redis 7 service containers
  - Coverage report uploaded as CI artifact
  - Minimum coverage threshold: 90% (fails if below)
- [ ] **Build step** (depends on test):
  - Docker multi-stage build for API image
  - Docker build for admin frontend image (Nginx + static assets)
  - Images tagged: `<sha>`, `latest`, `<branch-name>`
  - Images pushed to container registry (GitHub Container Registry or AWS ECR)
  - Image vulnerability scan: `trivy image scan` — fails on critical/high CVEs
- [ ] **PR status checks**: all steps required for merge (branch protection rule)
- [ ] **Caching**: Ruby gem cache, Node modules cache, Docker layer cache (BuildKit)
- [ ] CI duration target: < 8 minutes total

**Technical Notes:**
- Service containers: `services: postgres: image: postgres:16`, `services: redis: image: redis:7-alpine`
- `parallel_tests` splits by file runtime (uses persisted spec timing data) — balanced across nodes
- Docker BuildKit cache: `--cache-from` and `--cache-to` with registry-type cache — pulls cached layers from previous builds
- Trivy scan: `trivy image --severity CRITICAL,HIGH --exit-code 1 <image>` — blocks deploy of vulnerable images
- JUnit XML output: parsed by GitHub Actions for inline test failure annotations on PRs

**Subtasks:**
- Create `.github/workflows/ci.yml` with all steps
- Configure lint jobs (rubocop, brakeman, bundler-audit, eslint, npm audit)
- Configure test jobs with service containers and parallelisation
- Configure Docker build and push steps
- Add Trivy vulnerability scanning
- Configure caching (gems, node_modules, Docker layers)
- Set up branch protection rules requiring CI pass
- Create `.github/workflows/security-scan.yml` — weekly full dependency scan

#### Story: Implement Environment Promotion Pipeline

**Description:**
Create the deployment pipeline that promotes a validated build through environments: `main` merge → dev (auto) → qa (auto) → uat (manual gate) → pre-prod (auto) → prod (manual gate). Each environment runs smoke tests after deployment. Failures at any stage halt promotion and trigger alerts.

**Acceptance Criteria:**
- [ ] `.github/workflows/deploy.yml` triggered on: push to `main` (after CI passes)
- [ ] **Deploy to dev** (automatic):
  - `kustomize build infra/k8s/overlays/dev | kubectl apply`
  - Wait for rollout: `kubectl rollout status deployment/lumen-api --timeout=120s`
  - Run smoke tests: `scripts/smoke-test.sh dev` (health check, auth endpoint, entitlements endpoint)
  - On failure: rollback (`kubectl rollout undo`) + Slack alert
- [ ] **Deploy to qa** (automatic, after dev smoke passes):
  - Same pattern as dev with qa overlay
  - Extended smoke tests: full API test suite against qa environment
  - On failure: rollback + Slack alert, dev stays deployed
- [ ] **Deploy to uat** (manual approval gate):
  - GitHub Actions environment protection rule: requires approval from `uat-approvers` team
  - After approval: deploy + smoke test + notify
  - UAT is where product/QA team does manual validation
- [ ] **Deploy to pre-prod** (automatic, after uat approval):
  - Identical infrastructure to prod (same instance sizes, same config structure)
  - Load test: `scripts/load-test.sh pre-prod` (100 concurrent users, 5 minutes — verifies no regressions)
  - Database migration dry run: `bin/rails db:migrate:status` shows pending, `bin/rails db:migrate` succeeds
- [ ] **Deploy to prod** (manual approval gate):
  - Requires approval from `prod-deployers` team (engineering leads only)
  - Pre-deploy checklist auto-generated: pending migrations (yes/no), config changes (diff), dependency updates (diff)
  - Deploy: rolling update strategy (maxSurge: 1, maxUnavailable: 0 — zero-downtime)
  - Post-deploy smoke tests: 60 seconds of health checks + critical endpoint validation
  - Post-deploy metrics check: error rate must not increase by > 1% in 5 minutes post-deploy
  - On failure: automatic rollback + PagerDuty alert

**Technical Notes:**
- Rolling update with `maxUnavailable: 0`: Kubernetes never terminates old pods until new pods are Ready — zero dropped requests
- Smoke test script: `curl` based, verifies specific response shapes (not just 200 status) — catches misconfiguration that returns wrong data
- Pre-prod load test: uses `k6` or `wrk` — configured in `scripts/load-test.sh`
- Database migration strategy: migrations run before new pods start (Kubernetes init container or pre-deploy job)
- Post-deploy metrics: evaluated by separate workflow step that queries Prometheus/CloudWatch — alerts fire if error rate anomaly detected

**Subtasks:**
- Create `.github/workflows/deploy.yml` with full environment promotion
- Create `scripts/smoke-test.sh` with per-environment endpoint validation
- Create `scripts/load-test.sh` with k6/wrk configuration
- Configure GitHub Actions environments with protection rules (uat, prod)
- Create Kubernetes deployment manifests with rolling update strategy
- Create pre-deploy migration job manifest
- Create post-deploy metrics check step
- Create automatic rollback logic
- Configure Slack and PagerDuty notifications for deploy events

#### Story: Implement Database Migration Safety

**Description:**
Establish database migration practices that prevent downtime and data loss. Every migration must be reversible, backward-compatible with the previous code version (enables rollback without migration rollback), and tested in pre-prod before production.

**Acceptance Criteria:**
- [ ] Migration safety checker: `strong_migrations` gem configured to block dangerous operations:
  - Blocks: adding column with default (locks table in PG < 11), removing column in use, changing column type, adding index without `CONCURRENTLY`
  - Allows: adding nullable column, adding index concurrently, creating new tables
- [ ] All `add_index` operations use `algorithm: :concurrently` (no table locks)
- [ ] Column removal protocol (2-phase):
  1. Phase 1 (deploy N): `ignore_column :old_column` in model (code stops reading/writing)
  2. Phase 2 (deploy N+1): migration to drop column (safe because no code references it)
- [ ] Migrations must be reversible: every `change` block must be reversible, or provide explicit `up`/`down`
- [ ] Pre-prod migration validation: CI step runs pending migrations against a copy of production schema (pg_dump structure only)
- [ ] Large table migrations (> 1M rows): must use `INSERT INTO ... SELECT` with batching or `gh-ost` equivalent — never lock-and-alter
- [ ] Migration CI check: new migration files verified for `strong_migrations` compliance before merge
- [ ] Rollback testing: every migration's `down` tested in CI (runs `db:migrate` then `db:rollback` and verifies clean state)

**Technical Notes:**
- `strong_migrations` gem automatically blocks unsafe operations in production environments
- `algorithm: :concurrently` requires running outside a transaction — use `disable_ddl_transaction!` in migration
- Phase 2 column drops can be automated: if `ignore_column` has been in place for > 1 release cycle, column is safe to drop
- Large data migrations: Sidekiq job with batched processing, not in-migration loop — migration only creates new structures

**Subtasks:**
- Install and configure `strong_migrations` gem
- Create migration linting CI step
- Document column removal protocol in `docs/guides/migrations.md`
- Create migration rollback test step in CI
- Create pre-prod schema validation step
- Write examples of safe and unsafe migrations in documentation

---

## 16. Future Extensibility & AI/Personalisation Layer

### EPIC: Intelligent Learning Platform Foundation

**Goal:**
Design extension points and foundational infrastructure for the future AI-powered personalisation layer. This section does not implement AI features — it establishes the data collection, API contracts, and architectural boundaries that make future AI integration possible without backend rewrites. The goal is to collect the right data now so that the AI layer has high-quality signals when it arrives.

**Rationale:**
Lumen Lingo's competitive advantage will come from personalised learning paths — adapting content difficulty, suggesting review schedules, and identifying knowledge gaps per user. AI-powered personalisation requires extensive historical data: every practice session, every correct/incorrect answer, every time-to-answer measurement, every abandon event. If we don't collect this data from day one, we'll have no training data when the AI layer is built. The backend must be designed with extensibility in mind — plugin architecture for new features, event-driven processing for real-time signals, and clean API boundaries for the AI service.

**Success Metrics:**
- Data collection coverage: 100% of user learning events captured with full context
- API extensibility: new feature modules addable without modifying core code
- Event throughput: system can process 1000 learning events/second without backpressure
- AI service integration: when built, connects via documented API contract without backend changes

#### Story: Design Learning Event Schema & Collection

**Description:**
Define a rich learning event schema that captures everything an AI model would need: what the user practised, how they performed, how long they took, what errors they made, and what context surrounded the session. Events are collected via the existing practice session API and stored in an analytics-optimised format.

**Acceptance Criteria:**
- [ ] `learning_events` table (append-only, partitioned by month):
  - `id (uuid)`, `user_id (uuid, indexed)`, `session_id (uuid, indexed)`, `event_type (string, indexed)`
  - `language_pair (string)`, `content_type (string: flashcard, grammar, word_builder)`
  - `content_id (string)`: specific flashcard/grammar rule/puzzle ID
  - `difficulty_level (integer)`: 1-5 difficulty when event occurred
  - `outcome (string: correct, incorrect, skipped, timeout, hint_used)`
  - `response_time_ms (integer)`: milliseconds from card shown to user response
  - `attempt_number (integer)`: 1st try, 2nd try, etc. for same content
  - `streak_count (integer)`: user's current streak at time of event
  - `session_duration_seconds (integer)`: total session time at event occurrence
  - `user_tier (string)`: tier at time of event (captures tier context for analysis)
  - `client_metadata (jsonb)`: iOS version, device model, dark/light mode, soundscape active
  - `created_at (timestamptz, indexed)`
- [ ] iOS sends events in batches: `POST /api/v1/learning-events` with array of up to 50 events
- [ ] Events processed by `IngestLearningEventsJob` — validates, enriches, bulk inserts
- [ ] Enrichment: adds server-side fields (user current tier, subscription status) that iOS doesn't know
- [ ] Deduplication: `(user_id, session_id, content_id, created_at)` unique constraint — prevents duplicate events from retried batch uploads
- [ ] Analytics views (PostgreSQL materialized views, refreshed hourly):
  - `daily_user_stats`: sessions, total_time, correct_rate, unique_content, streak per user per day
  - `content_difficulty_stats`: per-content correct rate, average response time, skip rate — actual difficulty signal
  - `learning_velocity`: content mastered per week per user (content correct 3+ times in a row)

**Technical Notes:**
- Batch endpoint: iOS accumulates events locally, sends batch on session end or app background — minimises network calls
- Bulk insert via `INSERT INTO learning_events VALUES ... ON CONFLICT DO NOTHING` — handles duplicates silently
- Materialized views refreshed by `RefreshAnalyticsViewsJob` (hourly Sidekiq job) — not real-time, but sufficient for daily analysis
- Future: these materialized views become the training data source for the AI model

**Subtasks:**
- Create `learning_events` partitioned table migration
- Create materialized view migrations (daily_user_stats, content_difficulty_stats, learning_velocity)
- Create `POST /api/v1/learning-events` batch endpoint
- Create `IngestLearningEventsJob` with validation and enrichment
- Create `RefreshAnalyticsViewsJob` (hourly)
- Create deduplication constraint
- Write RSpec specs: batch ingestion, deduplication, enrichment, materialized view correctness

#### Story: Define AI Service Integration Contract

**Description:**
Define the API contract between the Lumen Lingo backend and the future AI service. The AI service will be a separate microservice (Python/FastAPI) that receives learning data and returns personalisation recommendations. This story defines the interface — not the implementation.

**Acceptance Criteria:**
- [ ] AI service API contract documented in `docs/api/ai-service-contract.md`:
  - `POST /ai/v1/recommendations/{user_id}` — returns personalised content recommendations:
    ```json
    {
      "user_id": "uuid",
      "recommendations": [
        {
          "content_type": "flashcard",
          "content_id": "abc-123",
          "reason": "spaced_repetition_due",
          "confidence": 0.87,
          "priority": 1
        }
      ],
      "next_review_in_hours": 4,
      "suggested_difficulty": 3,
      "generated_at": "2025-01-15T10:00:00Z",
      "model_version": "v1.2.0"
    }
    ```
  - `POST /ai/v1/difficulty-assessment/{user_id}` — returns current estimated difficulty level per content type
  - `POST /ai/v1/knowledge-gaps/{user_id}` — returns identified weak areas (topics, grammar rules, vocabulary categories)
  - `GET /ai/v1/health` — AI service health check

- [ ] Backend integration point: `app/services/ai_client.rb` — HTTP client stub that conforms to the contract:
  - Returns hardcoded fallback data when AI service is unavailable
  - Feature-flagged: `ai_recommendations_enabled` (boolean flag, default off)
  - Circuit breaker pattern: if 5 consecutive failures, stop calling for 60 seconds

- [ ] Data export endpoint: `GET /admin/api/v1/ai/training-data-export` — generates signed S3 URL for learning events export (CSV/Parquet):
  - Filters: date range, user tier, language pair
  - Anonymised option: replaces user_id with consistent hash (allows per-user analysis without PII)
  - Protected: admin role only

- [ ] Event-driven signals: when key events occur, publish to Redis Pub/Sub (future: Kafka/SQS):
  - `user.tier_changed` — AI can adjust recommendations for new tier
  - `user.streak_milestone` — AI can offer streak-appropriate challenges
  - `content.difficulty_recalculated` — AI can update its difficulty model

**Technical Notes:**
- Circuit breaker: use `circuitbox` gem or hand-rolled — prevents cascading failure if AI service is down
- Fallback recommendations: spaced repetition algorithm (SM-2) implemented in Ruby as fallback — not as good as AI but functional
- Redis Pub/Sub for event signals: lightweight, zero-config, sufficient for single-backend architecture. When scale demands it, swap to SQS or Kafka without changing the publisher interface
- AI service authentication: shared secret in `AI_SERVICE_API_KEY` env var (mutual TLS when service-to-service networking supports it)

**Subtasks:**
- Create `docs/api/ai-service-contract.md` with full contract specification
- Create `app/services/ai_client.rb` with circuit breaker and fallback
- Create `app/services/fallback_recommender.rb` (SM-2 based spaced repetition)
- Create training data export endpoint
- Create event signal publisher (Redis Pub/Sub)
- Create feature flag: `ai_recommendations_enabled`
- Write RSpec specs: AI client with circuit breaker, fallback recommender, event publishing

#### Story: Implement Plugin Architecture for Feature Modules

**Description:**
Design a plugin architecture that allows new feature modules (content types, practice modes, gamification features) to be added without modifying core code. Each plugin registers itself, declares its required tier, and hooks into the existing entitlement, event, and API systems.

**Acceptance Criteria:**
- [ ] Plugin registry: `LumenPlugins.register(name:, version:, required_tier:, &block)` — modules self-register at boot
- [ ] Plugin interface contract:
  - `routes` — returns array of route definitions (mounted under `/api/v1/plugins/:name/`)
  - `jobs` — returns array of Sidekiq job classes (auto-registered with scheduler)
  - `events` — returns array of event types this plugin produces
  - `features` — returns array of `PremiumFeature` entries this plugin gates on
  - `migrations` — returns migration paths (auto-discovered by `db:migrate`)
- [ ] Plugin discovery: all files matching `app/plugins/*/plugin.rb` are auto-loaded at boot
- [ ] Plugin entitlement check: plugin routes automatically check user tier against plugin's `required_tier` (middleware)
- [ ] Plugin isolation: plugins cannot directly access other plugins' database tables (enforced by convention, documented)
- [ ] Example plugin: `app/plugins/spaced_repetition/plugin.rb` — demonstrates all integration points:
  - Registers routes: `GET /api/v1/plugins/spaced_repetition/schedule`, `POST /api/v1/plugins/spaced_repetition/review`
  - Registers job: `SpacedRepetitionRescheduleJob`
  - Registers event: `spaced_repetition.review_completed`
  - Required tier: `pro` (free users don't get spaced repetition)

**Technical Notes:**
- Plugin architecture follows the Rails Engine pattern (lightweight version) — each plugin is a Ruby module, not a full engine
- Auto-loading: `Rails.application.config.after_initialize { LumenPlugins.discover_and_register! }`
- Plugin routes mounted dynamically: `Rails.application.routes.draw { LumenPlugins.each { |p| mount p.routes, at: "/api/v1/plugins/#{p.name}" } }`
- This architecture is intentionally simple — no dependency injection framework, no complex lifecycle hooks. It can evolve when we have 5+ plugins.

**Subtasks:**
- Create `app/lib/lumen_plugins.rb` with registry and discovery
- Create plugin interface module defining the contract
- Create plugin route mounting in `config/routes.rb`
- Create plugin entitlement middleware
- Create example spaced repetition plugin
- Document plugin creation guide: `docs/guides/creating-a-plugin.md`
- Write RSpec specs: plugin registration, route mounting, entitlement gating

---

## Appendix A: Complete API Endpoint Reference

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/api/v1/auth/provision` | Firebase JWT | Provision or retrieve user on first auth |
| `DELETE` | `/api/v1/auth/revoke` | Firebase JWT | Handle Apple Sign-In revocation |
| `GET` | `/api/v1/entitlements` | Firebase JWT | Fetch user entitlements (ETag support) |
| `GET` | `/api/v1/config` | Firebase JWT | App configuration and feature flags |
| `POST` | `/api/v1/practice-sessions` | Firebase JWT | Start practice session |
| `PATCH` | `/api/v1/practice-sessions/:id` | Firebase JWT | Update/complete practice session |
| `POST` | `/api/v1/learning-events` | Firebase JWT | Batch upload learning events |
| `POST` | `/webhooks/revenuecat` | Webhook Auth Key | RevenueCat subscription events |
| `GET` | `/health` | None | Kubernetes liveness probe |
| `GET` | `/health/ready` | None | Kubernetes readiness probe |
| `GET` | `/metrics` | Basic Auth | Prometheus metrics |
| `POST` | `/admin/api/v1/auth/request-otp` | Admin Email | Request OTP code for admin login |
| `POST` | `/admin/api/v1/auth/verify-otp` | OTP Code | Verify OTP and receive admin JWT |
| `GET` | `/admin/api/v1/dashboard/metrics` | Admin JWT | Dashboard metrics |
| `GET` | `/admin/api/v1/dashboard/alerts` | Admin JWT | Active alerts |
| `GET` | `/admin/api/v1/users` | Admin JWT | User list (search, filter, paginate) |
| `GET` | `/admin/api/v1/users/:id` | Admin JWT | User detail |
| `POST` | `/admin/api/v1/users/:id/reconcile` | Admin JWT | Force RevenueCat reconciliation |
| `POST` | `/admin/api/v1/users/:id/overrides` | Admin JWT | Create entitlement override |
| `DELETE` | `/admin/api/v1/users/:id/overrides/:oid` | Admin JWT | Revoke override |
| `GET` | `/admin/api/v1/feature-flags` | Admin JWT | List feature flags |
| `POST` | `/admin/api/v1/feature-flags` | Admin JWT | Create feature flag |
| `PATCH` | `/admin/api/v1/feature-flags/:id` | Admin JWT | Update feature flag |
| `GET` | `/admin/api/v1/feature-flags/:id/evaluate` | Admin JWT | Test flag evaluation |
| `GET` | `/admin/api/v1/config` | Admin JWT | Runtime config list |
| `PATCH` | `/admin/api/v1/config/:key` | Admin JWT | Update runtime config |
| `GET` | `/admin/api/v1/audit-logs` | Admin JWT | Audit log viewer |
| `GET` | `/admin/api/v1/ai/training-data-export` | Admin JWT (admin role) | AI training data export |

## Appendix B: Database Table Summary

| Table | Partitioned | Estimated Rows (Year 1) | Notes |
|-------|-------------|------------------------|-------|
| `users` | No | 50K-200K | Core user records |
| `tiers` | No | 5 (seeded) | Membership tier definitions |
| `features` | No | 10 (seeded) | Premium feature definitions |
| `tier_features` | No | 50 (seeded) | Tier × Feature matrix |
| `subscriptions` | No | 20K-80K | Active/historical subscriptions |
| `entitlement_overrides` | No | 500-2K | Manual overrides |
| `user_events` | By month | 1M-5M | User activity tracking |
| `audit_logs` | By month | 200K-1M | Immutable audit trail |
| `learning_events` | By month | 5M-20M | AI training data |
| `practice_sessions` | No | 500K-2M | Session tracking |
| `admin_users` | No | 5-20 | Admin panel users |
| `feature_flags` | No | 10-50 | Feature flag definitions |
| `runtime_configs` | No | 10-20 | Runtime configuration |
| `webhook_events` | No | 100K-500K | RevenueCat webhook log |

## Appendix C: Environment Variable Reference

| Variable | Required | Environments | Description |
|----------|----------|-------------|-------------|
| `LUMEN_ENV` | Yes | All | Environment name (dev/qa/uat/pre-prod/prod) |
| `DATABASE_URL` | Yes | All | PostgreSQL connection string |
| `REDIS_URL` | Yes | All | Redis connection string |
| `FIREBASE_PROJECT_ID` | Yes | All | Firebase project for JWT verification |
| `REVENUECAT_WEBHOOK_AUTH_KEY` | Yes | All | RevenueCat webhook shared secret |
| `REVENUECAT_API_KEY` | Yes | All | RevenueCat server-side API key |
| `ADMIN_JWT_SECRET` | Yes | All | HMAC secret for admin JWT signing |
| `RAILS_MASTER_KEY` | Yes | All | Rails credentials decryption key |
| `SECRET_KEY_BASE` | Yes | All | Rails session/cookie secret |
| `LOG_LEVEL` | No | All | Log verbosity (default: info) |
| `SIDEKIQ_CONCURRENCY` | No | All | Sidekiq thread count (default: 15) |
| `BUNDLE_GEMS__CONTRIBSYS__COM` | Yes | CI/Prod | Sidekiq Pro license key |
| `AWS_ACCESS_KEY_ID` | Yes | Prod | S3 archive access (or use IRSA) |
| `AWS_SECRET_ACCESS_KEY` | Yes | Prod | S3 archive secret (or use IRSA) |
| `S3_ARCHIVE_BUCKET` | Yes | Prod | S3 bucket for data archival |
| `SLACK_WEBHOOK_URL` | No | qa+ | Slack notifications for alerts |
| `PAGERDUTY_API_KEY` | No | Prod | PagerDuty alert integration |
| `AI_SERVICE_URL` | No | All | AI microservice base URL |
| `AI_SERVICE_API_KEY` | No | All | AI service authentication key |
| `VITE_ADMIN_API_URL` | Yes (admin) | All | Admin SPA API base URL |

---

*This specification is a living document. Each section represents an implementable epic with clearly defined stories, acceptance criteria, and technical guidance. Implementation order follows section numbering: infrastructure first (sections 1-2), then core backend (sections 3-8), then operational tooling (sections 9-14), then deployment (section 15), then extensibility (section 16). Every story is designed to be implemented, tested, and deployed independently within a 1-2 week sprint.*
