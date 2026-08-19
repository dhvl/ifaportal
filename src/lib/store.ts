import { IFAClient } from './types';

export const DEFAULT_SERVICES = [
  {
    id: 'retirement-planning',
    title: 'Retirement & Pension Planning',
    shortDescription: 'Comprehensive pension consolidations, drawdown strategies, and retirement income forecasting.',
    fullDescription: 'Our specialist retirement planners work with you to analyze existing workplace pensions, SIPP, and SSAS structures to optimize growth, minimize lifetime fees, and structure tax-efficient drawdown options for a secure retirement.',
    iconName: 'PiggyBank',
    category: 'Retirement' as const,
    featured: true,
  },
  {
    id: 'wealth-management',
    title: 'Discretionary Wealth Management',
    shortDescription: 'Tailored investment portfolio design aligned with your risk profile, ESG preferences, and tax allowances.',
    fullDescription: 'Custom multi-asset investment portfolios built using robust global asset allocation strategies. We continuously rebalance portfolios to navigate market volatility while protecting long-term capital.',
    iconName: 'TrendingUp',
    category: 'Wealth' as const,
    featured: true,
  },
  {
    id: 'inheritance-tax',
    title: 'Estate & Inheritance Tax Planning',
    shortDescription: 'Protect your legacy and pass wealth smoothly to future generations with minimal tax exposure.',
    fullDescription: 'Structure your estate using UK trusts, Business Property Relief (BPR) investments, and strategic gifting strategies to mitigate 40% Inheritance Tax (IHT) liability.',
    iconName: 'ShieldCheck',
    category: 'Tax' as const,
    featured: true,
  },
  {
    id: 'mortgages-property',
    title: 'Specialist Mortgages & Property Finance',
    shortDescription: 'Bespoke high-net-worth residential, buy-to-let, and commercial mortgage solutions across the UK.',
    fullDescription: 'Access whole-of-market mortgage rates and private banking lending channels tailored for complex income structures, self-employed directors, and property investors.',
    iconName: 'Home',
    category: 'Mortgages' as const,
    featured: true,
  },
  {
    id: 'life-protection',
    title: 'Personal & Family Protection',
    shortDescription: 'Life insurance, critical illness cover, and income protection tailored to safeguard your family.',
    fullDescription: 'Complete financial safety net planning ensuring your family or business stays financially sound in the event of unexpected illness or death.',
    iconName: 'HeartHandshake',
    category: 'Protection' as const,
    featured: false,
  },
  {
    id: 'corporate-advice',
    title: 'Corporate Financial Advice',
    shortDescription: 'Keyperson protection, director pension schemes, and employee benefit planning for UK businesses.',
    fullDescription: 'Helping UK business owners maximize corporate tax efficiency through executive pension planning, group risk benefits, and succession strategy.',
    iconName: 'Briefcase',
    category: 'Corporate' as const,
    featured: false,
  },
];

export const INITIAL_CLIENTS: IFAClient[] = [
  {
    id: 'client-mlp-wealth',
    slug: 'mlp-wealth',
    firmName: 'MLP Wealth Management',
    fcaFrn: '592810',
    isIndependent: true,
    registeredOffice: 'MLP House, 12 Park Square, Leeds, LS1 2JH',
    phone: '0113 245 8900',
    email: 'enquiries@mlpwealth.co.uk',
    address: '12 Park Square, Leeds, West Yorkshire, LS1 2JH',
    compliance: {
      fcaFrn: '592810',
      isIndependent: true,
      registeredOffice: 'MLP House, 12 Park Square, Leeds, LS1 2JH',
      companyRegistrationNumber: '08129402',
      fscsProtected: true,
      mortgageWarningRequired: true,
      feeStructureSummary: 'Transparent fixed initial consultation + 0.50% - 0.75% p.a. ongoing discretionary management with zero exit fees.',
      fcaStatusText: 'MLP Wealth Management is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference Number: 592810).',
    },
    branding: {
      primaryColor: '#0f2744',
      secondaryColor: '#c5a059',
      accentColor: '#1e3a8a',
      fontFamily: 'playfair',
      heroHeadline: 'Preserving & Growing Wealth Across Generations',
      heroSubheadline: 'Chartered Independent Financial Advisers providing bespoke wealth management, retirement strategies, and estate planning across the UK.',
    },
    templateId: 'modern-wealth',
    services: DEFAULT_SERVICES,
    team: [
      {
        id: 'team-1',
        name: 'Mark L. Phillips',
        role: 'Managing Director & Senior IFA',
        qualifications: 'Chartered Financial Planner, APFS',
        fcaIrn: 'MLP01284',
        bio: 'Over 22 years of experience providing high-net-worth individuals, business owners, and trustees with strategic financial guidance.',
        phone: '0113 245 8901',
        email: 'mark@mlpwealth.co.uk',
      },
      {
        id: 'team-2',
        name: 'Sarah Jenkins',
        role: 'Head of Retirement & Tax Planning',
        qualifications: 'DipPFS, Certified Estate Specialist',
        fcaIrn: 'SXJ99214',
        bio: 'Specializes in complex UK pension consolidations, inheritance tax mitigation, and family trust structures.',
        phone: '0113 245 8902',
        email: 'sarah@mlpwealth.co.uk',
      },
    ],
    testimonials: [
      {
        id: 'test-1',
        clientName: 'David & Helen Vance',
        location: 'Harrogate',
        serviceCategory: 'Retirement Planning',
        rating: 5,
        quote: 'MLP Wealth transformed our pension outlook. Their independent advice gave us the confidence to retire 3 years earlier than planned.',
        date: 'June 2026',
        verifiedSource: 'VouchedFor',
      },
      {
        id: 'test-2',
        clientName: 'Robert Stirling',
        location: 'Leeds',
        serviceCategory: 'Inheritance Tax Planning',
        rating: 5,
        quote: 'Incredible clarity on complex tax structures. They saved our family significant IHT while keeping our investments liquid.',
        date: 'May 2026',
        verifiedSource: 'VouchedFor',
      },
    ],
    calculatorsEnabled: {
      pension: true,
      inheritanceTax: true,
      investmentGrowth: true,
    },
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-08-19T10:00:00Z',
  },
  {
    id: 'client-agile-ifa',
    slug: 'agile-ifa',
    firmName: 'Agile Financial Advice',
    fcaFrn: '684201',
    isIndependent: true,
    registeredOffice: 'Innovation Hub, 45 Church Street, Birmingham, B3 2NP',
    phone: '0121 680 4420',
    email: 'hello@agileifa.co.uk',
    address: '45 Church Street, Birmingham, West Midlands, B3 2NP',
    compliance: {
      fcaFrn: '684201',
      isIndependent: true,
      registeredOffice: 'Innovation Hub, 45 Church Street, Birmingham, B3 2NP',
      companyRegistrationNumber: '09912048',
      fscsProtected: true,
      mortgageWarningRequired: true,
      feeStructureSummary: 'Capped fixed fees for pension consolidations + clear ongoing advisory options.',
      fcaStatusText: 'Agile Financial Advice is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference Number: 684201).',
    },
    branding: {
      primaryColor: '#064e3b',
      secondaryColor: '#10b981',
      accentColor: '#047857',
      fontFamily: 'plus-jakarta',
      heroHeadline: 'Modern, Flexible Financial Advice Built Around Your Life Goals',
      heroSubheadline: 'Transparent, tech-enabled independent advice covering pensions, investments, and mortgage protection with zero hidden costs.',
    },
    templateId: 'agile-dynamic',
    services: DEFAULT_SERVICES,
    team: [
      {
        id: 'team-3',
        name: 'James Aris',
        role: 'Principal Financial Adviser',
        qualifications: 'DipPFS, MSc Finance',
        fcaIrn: 'JXA44102',
        bio: 'Passionate about bringing transparent, modern financial planning tools to young professionals and business directors.',
        phone: '0121 680 4421',
        email: 'james@agileifa.co.uk',
      },
    ],
    testimonials: [
      {
        id: 'test-3',
        clientName: 'Claire Thornton',
        location: 'Solihull',
        serviceCategory: 'Pension Consolidation',
        rating: 5,
        quote: 'Agile IFA combined 4 old workplace pensions into one clear dashboard with half the fees. Highly recommended!',
        date: 'July 2026',
        verifiedSource: 'Trustpilot',
      },
    ],
    calculatorsEnabled: {
      pension: true,
      inheritanceTax: false,
      investmentGrowth: true,
    },
    createdAt: '2026-03-15T10:00:00Z',
    updatedAt: '2026-08-19T10:00:00Z',
  },
  {
    id: 'client-heritage-trust',
    slug: 'heritage-trust',
    firmName: 'Heritage & Trust Financial',
    fcaFrn: '419203',
    isIndependent: true,
    registeredOffice: 'The Old Rectory, St. Peter Square, Manchester, M2 3DE',
    phone: '0161 832 9900',
    email: 'info@heritagetrust.co.uk',
    address: 'St. Peter Square, Manchester, M2 3DE',
    compliance: {
      fcaFrn: '419203',
      isIndependent: true,
      registeredOffice: 'The Old Rectory, St. Peter Square, Manchester, M2 3DE',
      companyRegistrationNumber: '05419283',
      fscsProtected: true,
      mortgageWarningRequired: false,
      feeStructureSummary: 'Bespoke retainer & agreed percentage management for estate trusts.',
      fcaStatusText: 'Heritage & Trust Financial is authorised and regulated by the Financial Conduct Authority (FCA Firm Reference Number: 419203).',
    },
    branding: {
      primaryColor: '#1e293b',
      secondaryColor: '#d97706',
      accentColor: '#92400e',
      fontFamily: 'inter',
      heroHeadline: 'Safeguarding Your Legacy with Executive Financial Care',
      heroSubheadline: 'Established UK Independent Financial Advisers dedicated to wealth preservation, retirement stability, and family legacy planning.',
    },
    templateId: 'heritage-trust',
    services: DEFAULT_SERVICES,
    team: [
      {
        id: 'team-4',
        name: 'Edward Montgomery',
        role: 'Senior Wealth Partner',
        qualifications: 'FPFS Chartered Financial Planner',
        fcaIrn: 'EWM33019',
        bio: 'Specialist in multi-generational wealth transfer, trust management, and executive pension schemes.',
        phone: '0161 832 9901',
        email: 'edward@heritagetrust.co.uk',
      },
    ],
    testimonials: [
      {
        id: 'test-4',
        clientName: 'Arthur & Margaret Finch',
        location: 'Cheshire',
        serviceCategory: 'Estate Planning',
        rating: 5,
        quote: 'The team at Heritage & Trust provided empathetic, highly professional counsel for our family estate.',
        date: 'August 2026',
        verifiedSource: 'VouchedFor',
      },
    ],
    calculatorsEnabled: {
      pension: true,
      inheritanceTax: true,
      investmentGrowth: true,
    },
    createdAt: '2026-04-01T10:00:00Z',
    updatedAt: '2026-08-19T10:00:00Z',
  },
];

const STORAGE_KEY = 'ifa_portal_clients';

export function getClients(): IFAClient[] {
  if (typeof window === 'undefined') return INITIAL_CLIENTS;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CLIENTS));
      return INITIAL_CLIENTS;
    }
    const parsed = JSON.parse(data);
    // Ensure backwards compatibility with compliance object
    return parsed.map((c: any) => ({
      ...c,
      compliance: c.compliance || {
        fcaFrn: c.fcaFrn || '123456',
        isIndependent: c.isIndependent ?? true,
        registeredOffice: c.registeredOffice || c.address,
        companyRegistrationNumber: '00000000',
        fscsProtected: true,
        mortgageWarningRequired: true,
        feeStructureSummary: 'Transparent initial consultation + ongoing advisory management.',
        fcaStatusText: `${c.firmName} is authorised and regulated by the Financial Conduct Authority (FCA FRN: ${c.fcaFrn || '123456'}).`,
      },
    }));
  } catch (e) {
    console.error('Failed to load clients from localStorage', e);
    return INITIAL_CLIENTS;
  }
}

export function getClientBySlug(slug: string): IFAClient | undefined {
  const clients = getClients();
  return clients.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function saveClient(client: IFAClient): IFAClient[] {
  const clients = getClients();
  const index = clients.findIndex((c) => c.id === client.id);
  let updated: IFAClient[];
  if (index >= 0) {
    updated = [...clients];
    updated[index] = { ...client, updatedAt: new Date().toISOString() };
  } else {
    updated = [...clients, { ...client, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }];
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function deleteClient(id: string): IFAClient[] {
  const clients = getClients();
  const updated = clients.filter((c) => c.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}
