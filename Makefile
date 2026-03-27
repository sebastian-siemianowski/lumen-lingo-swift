.PHONY: generate build-dev build-qa build-uat build-preprod build-prod test clean check-translations check-legal-version

SIMULATOR = iPhone 17 Pro Max
PROJECT = LumenLingo.xcodeproj

generate:
	cd LumenLingo && xcodegen generate

build-dev: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-Dev \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' build

build-qa: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-QA \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' build

build-uat: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-UAT \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' build

build-preprod: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-PreProd \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' build

build-prod: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-Prod \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' build

test: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-Dev \
		-destination 'platform=iOS Simulator,name=$(SIMULATOR)' test

archive-prod: generate
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-Prod \
		-configuration Prod-Release \
		-archivePath build/LumenLingo-Prod.xcarchive archive

clean:
	cd LumenLingo && xcodebuild -project $(PROJECT) -scheme LumenLingo-Dev clean
	rm -rf LumenLingo/build

check-translations:
	python3 scripts/audit_translations.py

check-legal-version:
	python3 scripts/check_legal_version.py
