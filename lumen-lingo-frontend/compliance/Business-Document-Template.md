# Business Document Template — Lumenshore Limited

This template defines the mandatory legal information that must appear on all business 
documents issued by Lumenshore Limited, as required by:

- **UK Companies Act 2006, Section 82** — company information on business letters
- **Company, Limited Liability Partnership and Business (Names and Trading Disclosures) Regulations 2015**
- **VAT Act 1994** — VAT number disclosure requirements

---

## Mandatory Header / Footer Block

```
Lumenshore Limited
Company No. 09607326
Registered in England and Wales
Registered Office: Windsor House, Troon Way Business Centre,
  Humberstone Lane, Leicester, England, LE4 9HA
VAT Registration: GB 270411929
```

### Notes on Directors

Per Companies Act 2006 s.82(4): Director names are **not required** on business
correspondence **unless** you include *any* director's name — in which case **all**
directors' names must be listed. Current policy: **do not include individual director
names on standard business correspondence** to avoid triggering this requirement.

---

## Invoice Template (Direct Sales)

For any invoices issued directly by Lumenshore Limited (not via Apple IAP):

| Field                 | Required by  | Example                           |
|-----------------------|-------------|-----------------------------------|
| Company name          | Companies Act | Lumenshore Limited               |
| Company number        | Companies Act | 09607326                         |
| Registered office     | Companies Act | Windsor House, Troon Way...      |
| VAT number            | VAT Act      | GB 270411929                     |
| Invoice number        | VAT Act      | INV-2025-0001 (sequential)       |
| Invoice date          | VAT Act      | 2025-07-22                       |
| Supply description    | VAT Act      | LumenLingo Pro — Annual          |
| Taxable amount (net)  | VAT Act      | £49.99                           |
| VAT rate              | VAT Act      | 20%                              |
| VAT amount            | VAT Act      | £10.00                           |
| Total (gross)         | VAT Act      | £59.99                           |
| Customer name/address | VAT Act      | (if known)                       |

### Sequential Invoice Numbering

All invoices must be sequentially numbered with no gaps. Format: `INV-YYYY-NNNN`

---

## Email Footer (All Business Communications)

All emails sent by or on behalf of Lumenshore Limited must include:

```
Lumenshore Limited | Company No. 09607326 | Registered in England and Wales
Registered Office: Windsor House, Troon Way Business Centre,
  Humberstone Lane, Leicester, England, LE4 9HA
VAT: GB 270411929
```

This is implemented as `EMAIL_COMPANY_FOOTER` in `lumen-lingo-frontend/src/lib/consent-log.ts`
and must be included in all ESP templates when an email service provider is configured.

---

## Apple IAP Invoicing

Apple handles all consumer invoicing for in-app purchases (IAP). Per Apple's
Developer Program License Agreement:

- **Apple acts as the merchant of record** for all App Store transactions
- Apple issues consumer invoices/receipts directly to users
- Lumenshore receives **agency settlement statements** from Apple (not customer-facing)
- Lumenshore does **not** issue consumer invoices for IAP transactions
- Apple remits proceeds to Lumenshore after deducting commission (15–30%)
- VAT on digital services to consumers is handled by Apple under the marketplace
  rules (Finance Act 2021, effective 1 January 2021 for UK)

### What Lumenshore Must Do

1. **Record Apple settlement statements** for accounting purposes
2. **Do not issue duplicate invoices** for IAP transactions
3. **Report Apple commission** as a cost of sales
4. For **B2B sales** outside the App Store (if any): issue VAT invoices directly
   using the invoice template above

---

*Last reviewed: July 2025*
