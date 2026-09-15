#!/usr/bin/env python3
"""
Generate Google Sheets ready CSV and TSV files for IFA Media Pricing Feature Matrix.
Divides features into 2 segments: 1. Website Features, 2. Digital Marketing Features.
Includes concise titles, 1-line hover explainers for the 'i' icon, and Basic vs Advanced plan availability.
"""

import csv
import os

features_data = [
    # Segment 1: Website Features
    {
        "segment": "1. Website Features",
        "title": "Modern Bespoke Responsive Website",
        "explainer": "Custom Next.js design tailored to your advisory firm, fully responsive across mobile, tablet, and desktop.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Direct WhatsApp & Call Routing",
        "explainer": "One-tap instant WhatsApp consultation trigger and click-to-call routing for immediate prospect contact.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "FCA Consumer Duty & FRN Verification",
        "explainer": "Embedded regulatory compliance, FCA registration validation badge, and statutory FSCS disclaimers.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Adviser Bio & Qualifications Directory",
        "explainer": "Professional adviser profiles showcasing SPS credentials, Chartered status, specialisms, and experience.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "High-Speed UK Cloud Hosting & SSL",
        "explainer": "Ultra-fast UK-based cloud infrastructure with automatic SSL certification, DDoS defense, and 99.9% uptime.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "UK GDPR & Cookie Consent Management",
        "explainer": "Compliant granular cookie consent banner, audit-ready data privacy architecture, and regulatory policy pages.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Secure SSL Contact & Inquiry Forms",
        "explainer": "Encrypted lead inquiry forms delivering instant notifications directly to your primary practice inbox.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "24/7 Conversational AI Concierge",
        "explainer": "Trained UK wealth assistant that greets visitors, answers practice FAQs, and pre-qualifies high-net-worth leads.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Pension Drawdown Calculator",
        "explainer": "Interactive tool allowing prospects to simulate tax-free cash lump sums and retirement income sustainability.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Inheritance Tax (40% IHT) Calculator",
        "explainer": "Engaging tool calculating potential estate tax liability above nil-rate bands to prompt wealth transfer planning.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Compound ISA / Wealth Calculator",
        "explainer": "Visual investment growth calculator demonstrating long-term tax-efficient compounding returns.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Gated Retirement Guide Lead Magnet",
        "explainer": "High-value downloadable wealth & retirement guide designed to capture verified prospect emails.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Adviser Booking Calendar Integration",
        "explainer": "Seamless real-time appointment booking synced with Calendly, HubSpot, or Microsoft Outlook calendars.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Client Portal Login Integration",
        "explainer": "Direct single-click client portal access gateway for moneyinfo, Intelliflo, Transact, or standard platforms.",
        "basic": "",
        "advanced": "✓",
    },

    # Segment 2: Digital Marketing Features
    {
        "segment": "2. Digital Marketing Features",
        "title": "3-Month DFY Social Media Retainer",
        "explainer": "Comprehensive 90-day Done-For-You social media strategy, scheduling, and execution included with launch.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Weekly LinkedIn & X Financial Content",
        "explainer": "Curated weekly thought-leadership posts to build trust and authority among local and corporate clients.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Monthly Branded Client Newsletter",
        "explainer": "Professionally formatted email newsletter template with timely market updates for client retention.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Google Business Profile & Local SEO",
        "explainer": "Full setup, category optimization, and local map-pack targeting for regional search dominance.",
        "basic": "✓",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Expanded Multi-Channel Social Campaigns",
        "explainer": "Tailored multi-platform campaigns with custom infographic assets, infographics, and carousel posts.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Automated Email Lead Nurture Funnel",
        "explainer": "Automated multi-touch email drip sequence warming cold inquiries into committed booked consultations.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "UK Local Search Citation Building",
        "explainer": "High-authority UK financial directory and citation syndication to maximize organic local search ranking.",
        "basic": "",
        "advanced": "✓",
    },
    {
        "segment": "2. Digital Marketing Features",
        "title": "Monthly Performance & ROI Analytics",
        "explainer": "Executive monthly reporting dashboard detailing traffic volume, lead conversion rates, and acquisition ROI.",
        "basic": "",
        "advanced": "✓",
    },
]

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_dir = os.path.join(base_dir, ".tmp")
    os.makedirs(output_dir, exist_ok=True)
    
    # 1. Standard CSV
    csv_path = os.path.join(output_dir, "ifa_media_pricing_matrix.csv")
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Category", "Feature Title", "Hover Explainer ('i' tooltip)", "Basic (Starter Plan)", "Advanced (Growth Plan)"])
        for row in features_data:
            writer.writerow([row["segment"], row["title"], row["explainer"], row["basic"], row["advanced"]])
            
    # 2. Google Sheet Matching Format (Matching Client Screenshot)
    sheet_csv_path = os.path.join(output_dir, "ifa_media_google_sheets_import.csv")
    with open(sheet_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Feature Title", "Hover Explainer ('i' tooltip)", "BASIC", "ADVANCED"])
        
        # Segment 1
        writer.writerow(["--- 1. WEBSITE FEATURES ---", "", "WEBSITE", "WEBSITE"])
        for row in [r for r in features_data if r["segment"] == "1. Website Features"]:
            writer.writerow([row["title"], row["explainer"], row["basic"], row["advanced"]])
            
        # Segment 2
        writer.writerow(["--- 2. DIGITAL MARKETING FEATURES ---", "", "SOCIAL MEDIA", "SOCIAL MEDIA"])
        for row in [r for r in features_data if r["segment"] == "2. Digital Marketing Features"]:
            writer.writerow([row["title"], row["explainer"], row["basic"], row["advanced"]])

    # 3. TSV Format (For 1-click clipboard paste directly into Google Sheets cells!)
    tsv_path = os.path.join(output_dir, "ifa_media_google_sheets_paste.tsv")
    with open(tsv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, delimiter="\t")
        writer.writerow(["Feature Title", "Hover Explainer ('i' tooltip)", "BASIC", "ADVANCED"])
        writer.writerow(["--- 1. WEBSITE FEATURES ---", "", "WEBSITE", "WEBSITE"])
        for row in [r for r in features_data if r["segment"] == "1. Website Features"]:
            writer.writerow([row["title"], row["explainer"], row["basic"], row["advanced"]])
        writer.writerow(["--- 2. DIGITAL MARKETING FEATURES ---", "", "SOCIAL MEDIA", "SOCIAL MEDIA"])
        for row in [r for r in features_data if r["segment"] == "2. Digital Marketing Features"]:
            writer.writerow([row["title"], row["explainer"], row["basic"], row["advanced"]])

    print(f"Generated CSV: {csv_path}")
    print(f"Generated Google Sheets CSV: {sheet_csv_path}")
    print(f"Generated TSV: {tsv_path}")

if __name__ == "__main__":
    main()
