# Walkthrough: 3-Tier Product Packaging & Automation Integration

We have integrated the newly designed **3-Tier Growth Plans** into the IFA Portal Platform, onboarding questionnaire, admin backend, and dynamic templates.

---

## 1. Plan Structure & Pricing Configured

| Plan Tier | Monthly Investment | Best For | Inclusions & Automations |
| :--- | :--- | :--- | :--- |
| **1. Starter Growth** | **£49 / month** *(£490/yr • £0 setup)* | Solo IFAs & newly qualified Appointed Reps (ARs) | • Modern Wealth Template<br>• Standard UK Pension Calculator<br>• **WhatsApp Click-to-Chat Button**<br>• 1 Lead Magnet *(Retirement Readiness Guide)*<br>• Automated FCA Compliance & Disclaimers |
| **2. Client Acquisition Pro** ⭐<br>*(Most Popular)* | **£99 / month** *(£990/yr • £0 setup)* | Established practices & boutique firms (2–5 advisers) | • **All 3 Premium Templates**<br>• **Automated WhatsApp Lead Qualifier Bot** + Mobile Alerts<br>• **Full UK Calculator Suite** (Pension, 40% IHT, ISA Growth)<br>• **3 Lead Magnets & 2-Minute Scorecard Quiz**<br>• **Live VouchedFor & Unbiased Review Sync** |
| **3. Elite Wealth Automation** | **£189 / month** *(£1,890/yr • £0 setup)* | Multi-branch networks & wealth managers | • **24/7 AI Financial Assistant Bot (FCA-safe)**<br>• **Client Portal Gateway Integration** (Moneyinfo/Advicefront)<br>• Full Bespoke Theme Styling & Unlimited Funnels |

### Optional Add-on
- **Done-For-You (DFY) LinkedIn & Blog Thought Leadership Engine**: **£169 / month** *(bundled discount)*. Includes 8-10 branded FCA-compliant LinkedIn posts/mo + 2 long-form SEO articles.

---

## 2. Changes Made & Files Updated

### 1. Types & Data Models
- **[types.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/types.ts)**: Added `PlanTier` type (`'starter' | 'pro' | 'elite'`), `planTier`, `hasDfySocialMedia`, `whatsappNumber`, and `clientPortalUrl`.
- **[store.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/store.ts)**: Added `PLAN_DETAILS` configuration matrix and mapped demo practices:
  - `Agile Financial Advice` (`agile-ifa`) &rarr; **Starter Growth (£49/mo)**
  - `MLP Wealth Management` (`mlp-wealth`) &rarr; **Client Acquisition Pro (£99/mo)**
  - `Heritage & Trust Financial` (`heritage-trust`) &rarr; **Elite Wealth Automation (£189/mo)**

### 2. New Interactive Components
- **[WhatsAppLeadBot.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/common/WhatsAppLeadBot.tsx)**:
  - **Starter**: Floating WhatsApp Click-to-Chat button with pre-filled message.
  - **Pro**: Interactive WhatsApp Lead Qualifier Drawer (collects asset size, main goal, postcode, phone number) with instant mobile notification.
  - **Elite**: 24/7 AI Financial Concierge Bot with conversational Q&A, booking integration, and client portal gateway.
- **[LeadMagnetSection.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/common/LeadMagnetSection.tsx)**:
  - Downloadable gated guides + 2-Minute Financial Readiness Scorecard quiz.
- **[CalculatorSuite.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/calculators/CalculatorSuite.tsx)**:
  - Tabbed interface uniting Pension Projection, 40% Inheritance Tax (IHT) liability estimator, and Compound ISA Growth calculators.

### 3. Dynamic Template Integration
- **[ModernWealthTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/ModernWealthTemplate.tsx)**, **[AgileDynamicTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/AgileDynamicTemplate.tsx)**, and **[HeritageTrustTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/HeritageTrustTemplate.tsx)** now dynamically adapt their widgets, review badges, calculators, and WhatsApp bots based on the active client plan.

### 4. Onboarding & Admin Backend
- **[onboard/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/onboard/page.tsx)**: Added 6-step questionnaire with dedicated Plan & DFY selection and real-time live preview.
- **[admin/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/page.tsx)**: Displays live Monthly Recurring Revenue (MRR), client plan badges, and an on-the-fly tier switcher.

---

## 3. Verification & Build
- Ran `npm run build`: Compiled with zero TypeScript or bundle errors across all routes.
