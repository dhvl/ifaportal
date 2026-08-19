export type TemplateId = 'modern-wealth' | 'heritage-trust' | 'agile-dynamic';

export interface IFABranding {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: 'inter' | 'playfair' | 'plus-jakarta';
  logoUrl?: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImageUrl?: string;
}

export interface IFAService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'Retirement' | 'Wealth' | 'Mortgages' | 'Protection' | 'Tax' | 'Corporate';
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string; // e.g., 'DipPFS, Chartered Financial Planner'
  fcaIrn?: string; // Individual Reference Number
  bio: string;
  imageUrl?: string;
  email: string;
  phone: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  serviceCategory: string;
  rating: number; // 1-5
  quote: string;
  date: string;
  verifiedSource?: 'VouchedFor' | 'Trustpilot' | 'Google';
}

export interface IFAComplianceDetails {
  fcaFrn: string;
  isIndependent: boolean;
  registeredOffice: string;
  companyRegistrationNumber?: string;
  fscsProtected: boolean; // FSCS £85,000 cover
  mortgageWarningRequired: boolean; // "Your home may be repossessed..."
  feeStructureSummary: string; // e.g. "Fixed initial advice fee + 0.50% - 0.75% p.a. ongoing management"
  fcaStatusText: string;
}

export interface IFAClient {
  id: string;
  slug: string;
  firmName: string;
  fcaFrn: string;
  isIndependent: boolean;
  registeredOffice: string;
  phone: string;
  email: string;
  address: string;
  compliance: IFAComplianceDetails;
  branding: IFABranding;
  templateId: TemplateId;
  services: IFAService[];
  team: TeamMember[];
  testimonials: Testimonial[];
  calculatorsEnabled: {
    pension: boolean;
    inheritanceTax: boolean;
    investmentGrowth: boolean;
  };
  customDomain?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminQuestionnaireFormData {
  firmName: string;
  fcaFrn: string;
  isIndependent: boolean;
  phone: string;
  email: string;
  address: string;
  registeredOffice: string;
  companyRegistrationNumber: string;
  mortgageWarningRequired: boolean;
  feeStructureSummary: string;
  templateId: TemplateId;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: 'inter' | 'playfair' | 'plus-jakarta';
  heroHeadline: string;
  heroSubheadline: string;
  selectedServiceIds: string[];
}
