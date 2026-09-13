import React from 'react';
import { notFound } from 'next/navigation';
import { getClientBySlug } from '@/lib/store';
import { ModernWealthTemplate } from '@/components/templates/ModernWealthTemplate';
import { HeritageTrustTemplate } from '@/components/templates/HeritageTrustTemplate';
import { AgileDynamicTemplate } from '@/components/templates/AgileDynamicTemplate';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    return {
      title: 'IFA Client Not Found',
    };
  }

  return {
    title: `${client.firmName} | Independent Financial Advisers (FCA FRN: ${client.fcaFrn})`,
    description: `${client.branding.heroSubheadline} Authorised and regulated by the Financial Conduct Authority.`,
    keywords: [
      client.firmName,
      'Independent Financial Adviser UK',
      'IFA Media',
      'Pension Planning UK',
      'Wealth Management',
      'FCA Regulated',
    ],
    alternates: {
      canonical: `https://ifamedia.co.uk/portal/${slug}`,
    },
    openGraph: {
      title: `${client.firmName} | Independent Financial Advisers`,
      description: `${client.branding.heroSubheadline} Authorised and regulated by the Financial Conduct Authority.`,
      url: `https://ifamedia.co.uk/portal/${slug}`,
      type: 'website',
      locale: 'en_GB',
    },
  };
}

export default async function ClientPortalPage({ params }: Props) {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    notFound();
  }

  switch (client.templateId) {
    case 'heritage-trust':
      return <HeritageTrustTemplate client={client} />;
    case 'agile-dynamic':
      return <AgileDynamicTemplate client={client} />;
    case 'modern-wealth':
    default:
      return <ModernWealthTemplate client={client} />;
  }
}
