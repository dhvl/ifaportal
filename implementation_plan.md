# Implementation Plan - UK IFA Portal Creator Platform

Create a state-of-the-art UK Independent Financial Adviser (IFA) Website & Portal Creator platform. The system will allow administrators to onboard new IFA practices via a guided questionnaire, customize branding, colors, and services, select pre-designed FCA-compliant website templates, and instantly generate live, responsive, SEO-optimized IFA client portals.

## User Review Required

> [!IMPORTANT]
> **Key Architecture Decisions:**
> 1. **Framework & Styling**: Next.js 16 App Router + Tailwind CSS v4 + Lucide Icons + Framer Motion for smooth micro-interactions.
> 2. **Template Architecture**: 3 pre-designed IFA Website Templates tailored after UK industry leaders (*MLP Wealth* & *Agile IFA*):
>    - **Template 1: Modern Wealth (Clean & Minimalist)** - Clean navy/gold aesthetic, high conversion focus, ideal for wealth management practices.
>    - **Template 2: Heritage & Trust (Classic Executive)** - Deep forest green/warm cream tones, focusing on retirement & estate planning tradition.
>    - **Template 3: Dynamic Agile (Tech-Forward & Modern)** - Slate/emerald glassmorphism layout with live interactive pension calculators and quick booking widgets.
> 3. **Admin Onboarding & Client Management System**:
>    - Interactive multi-step Onboarding Questionnaire (Firm Details, FCA FRN, Brand Palette, Services, Team Members, Selected Template).
>    - Real-Time Live Preview Pane during onboarding.
>    - Persistent Client Storage (JSON-backed local state with pre-populated sample clients like *MLP Wealth Management* & *Agile Financial Planning*).
> 4. **UK IFA Compliance & Trust Features**:
>    - Mandatory FCA Disclaimers & FRN badge generator.
>    - Independent vs. Restricted advice explanation block.
>    - VouchedFor & Trustpilot rating widgets.
>    - Interactive UK Pension & Retirement Tax Calculator.

---

## Proposed Changes

### Core UI & Component Library Setup

#### [NEW] [package.json](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/package.json)
- Add `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge` for UI components.

#### [NEW] [lib/types.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/types.ts)
- Define TypeScript models for `IFAClient`, `IFABranding`, `IFAService`, `TeamMember`, `TemplateId`, `CalculatorSettings`, and `AdminQuestionnaire`.

#### [NEW] [lib/store.ts](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/lib/store.ts)
- Implement client store with localStorage persistence and default demo clients (*MLP Wealth Management*, *Agile Financial Advice*, *Premier Capital IFA*).

---

### Admin Onboarding & Dashboard System

#### [NEW] [app/admin/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/page.tsx)
- Admin Portal Dashboard showing onboarded IFA clients, template status, quick actions (Edit, View Live Site, Duplicate, Delete).

#### [NEW] [app/admin/onboard/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/admin/onboard/page.tsx)
- Multi-step interactive onboarding questionnaire:
  - Step 1: Practice Information & FCA FRN Number
  - Step 2: Branding & Color Customizer (Primary, Secondary, Fonts, Logo Upload)
  - Step 3: Service Selection & Advisory Details
  - Step 4: Team Profiles & Credentials
  - Step 5: Template Selector & Live Instant Preview
  - Step 6: Confirmation & Deployment

---

### IFA Client Website Templates & Dynamic Renderer

#### [NEW] [app/portal/[slug]/page.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/app/portal/[slug]/page.tsx)
- Dynamic route for rendering any onboarded client website with their custom branding, template selection, and full SEO metadata.

#### [NEW] [components/templates/ModernWealthTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/ModernWealthTemplate.tsx)
- Inspired by *MLP Wealth*: High-trust hero, wealth audit CTA, pension/retirement modules, VouchedFor testimonials, fee transparency modal.

#### [NEW] [components/templates/HeritageTrustTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/HeritageTrustTemplate.tsx)
- Classic executive IFA styling with dark green/gold palette, retirement planning spotlight, estate planning calculator, team bio modal.

#### [NEW] [components/templates/AgileDynamicTemplate.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/templates/AgileDynamicTemplate.tsx)
- Inspired by *Agile IFA*: Tech-forward glassmorphism, instant booking widget, interactive retirement projection tool, mobile-first design.

---

### Interactive IFA Tools & Compliance Components

#### [NEW] [components/calculators/PensionCalculator.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/calculators/PensionCalculator.tsx)
- Interactive UK Retirement & Pension Pot Projection tool (Monthly contribution, growth rate, tax relief estimates).

#### [NEW] [components/common/FCABadgeFooter.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/common/FCABadgeFooter.tsx)
- Standard UK FCA regulation notice, FRN validator display, risk warnings ("Capital at Risk"), and legal links.

#### [NEW] [components/modals/ConsultationModal.tsx](file:///Users/apple/Documents/gemini/antigravity-ide/scratch/ifa-portal-uix/src/components/modals/ConsultationModal.tsx)
- Interactive lead-capture modal for booking initial financial reviews.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to ensure error-free TypeScript compilation and server components validation.
- Verify zero console errors or broken imports.

### Manual Verification
- Test Admin Onboarding flow: create a new custom IFA client (e.g. "Apex Independent Wealth"), configure brand colors, select template, and launch.
- Test live website rendering at `/portal/apex-wealth` and `/portal/mlp-wealth`.
- Verify interactive pension calculator calculations.
- Test responsive mobile layout and theme customizer.
