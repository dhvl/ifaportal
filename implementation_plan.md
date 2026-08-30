# Implementation Plan: 3-Tier Plan Integration Across Onboarding, Admin Dashboard & Dynamic Templates

Integrate our newly defined **3-Tier Product Plans** into the IFA Portal platform:
1. **Starter Growth (£49/mo)**
2. **Client Acquisition Pro (£99/mo)** *(Best Value / Recommended)*
3. **Elite Wealth Automation (£189/mo)**
4. **DFY LinkedIn & Blog Marketing Add-On (£169/mo bundled / £199/mo)**

Each template and portal will dynamically display the appropriate widgets, lead magnets, calculators, and chatbot automations based on the active plan tier.

---

## User Review Required

> [!IMPORTANT]
> - **Default Demo Clients**: We will assign each demo client to a specific plan to immediately showcase all 3 tiers (`agile-ifa` = Starter, `mlp-wealth` = Pro, `heritage-trust` = Elite).
> - **Onboarding Step**: A new dedicated "Plan & Growth Add-ons" step will be added to the onboarding wizard with real-time preview of the tier features.

---

## Proposed Changes

### Data Model & Store Layer

#### [MODIFY] [types.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/types.ts)
- Add `PlanTier = 'starter' | 'pro' | 'elite'`.
- Add `planTier: PlanTier`, `hasDfySocialMedia?: boolean`, `whatsappNumber?: string`, `clientPortalUrl?: string` to `IFAClient` and `AdminQuestionnaireFormData`.
- Add types for `LeadMagnetItem`, `ScorecardQuiz`, and `ChatbotConfig`.

#### [MODIFY] [store.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/store.ts)
- Update default clients to showcase distinct plan tiers:
  - `Agile Financial Advice` (`agile-ifa`) -> **Starter Growth (£49/mo)**
  - `MLP Wealth Management` (`mlp-wealth`) -> **Client Acquisition Pro (£99/mo)**
  - `Heritage & Trust Financial` (`heritage-trust`) -> **Elite Wealth Automation (£189/mo)** + DFY LinkedIn Add-On.
- Provide helper methods for calculating monthly MRR and plan feature flags.

---

### Interactive Widgets & Lead Generation Components

#### [NEW] [WhatsAppLeadBot.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/common/WhatsAppLeadBot.tsx)
- **Starter Mode**: Floating WhatsApp Click-to-Chat button with pre-filled message ("Hi, I'd like to ask a question about pension/wealth advice").
- **Pro Mode**: Interactive WhatsApp Lead Qualifier Drawer (collects asset size, main advice goal, postcode, phone number) with direct WhatsApp redirect + instant notification preview.
- **Elite Mode**: 24/7 AI Financial Concierge Bot (FCA-safe conversational Q&A, booking integration, client portal gateway).

#### [NEW] [LeadMagnetSection.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/common/LeadMagnetSection.tsx)
- **Starter**: Single high-converting lead magnet (UK Retirement Readiness Guide 2026).
- **Pro & Elite**: Multi-guide tabbed selector (Inheritance Tax Guide, Pension Maximizer, High-Net-Worth Tax Matrix) + 2-minute "Financial Health Scorecard" interactive assessment modal.

#### [NEW] [CalculatorSuite.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/calculators/CalculatorSuite.tsx)
- Unifies Pension Calculator, Inheritance Tax (IHT) Calculator, and Compound Growth Calculator with seamless tab navigation based on client plan tier.

---

### Templates Layer (Dynamic Feature Rendering by Plan)

#### [MODIFY] [ModernWealthTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/ModernWealthTemplate.tsx)
- Integrate Plan-aware widgets:
  - Embed `CalculatorSuite`
  - Embed `LeadMagnetSection`
  - Embed `WhatsAppLeadBot`
  - Show VouchedFor/Unbiased review badge for Pro/Elite tiers
  - Show Client Portal login button for Elite tier.

#### [MODIFY] [AgileDynamicTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/AgileDynamicTemplate.tsx)
- Update to support dynamic plan features with modern tech aesthetic.

#### [MODIFY] [HeritageTrustTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/HeritageTrustTemplate.tsx)
- Update to support executive/elite styling with multi-location directory and wealth concierge.

---

### Onboarding & Demo Admin Backend

#### [MODIFY] [onboard/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/onboard/page.tsx)
- Add dedicated **Plan Selection & DFY Marketing Step**:
  - Interactive cards for **Starter (£49/mo)**, **Pro (£99/mo - Recommended)**, **Elite (£189/mo)**.
  - Checkbox toggle for **DFY LinkedIn & Blog Marketing Engine (+£169/mo)**.
  - Live preview badge showing current plan features in the split preview panel.

#### [MODIFY] [admin/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/page.tsx)
- Display Plan Tier badges on client cards.
- Add MRR / Subscription stats overview (£49/£99/£189).
- Allow instant plan switching in the client editor.

---

## Verification Plan

### Automated Build & Typecheck
- Run `npm run build` or `npx tsc --noEmit` to verify type safety.

### Manual Verification
1. Open `/admin` and verify that the 3 demo IFA clients clearly show their respective plans (Starter, Pro, Elite) with active MRR calculation.
2. Open `/admin/onboard` and test selecting each of the 3 plans + DFY LinkedIn add-on, observing real-time preview updates.
3. Open `/portal/mlp-wealth` (Pro Plan):
   - Check Full Calculator Suite (Pension, IHT, Growth).
   - Check Lead Magnets & Scorecard Quiz.
   - Check WhatsApp Lead Qualifier Chatbot.
   - Check VouchedFor live review badge.
4. Open `/portal/agile-ifa` (Starter Plan):
   - Check WhatsApp Click-to-Chat widget.
   - Check Single Pension Calculator & Retirement Guide lead magnet.
5. Open `/portal/heritage-trust` (Elite Plan):
   - Check 24/7 AI Concierge Bot & Client Portal link.
