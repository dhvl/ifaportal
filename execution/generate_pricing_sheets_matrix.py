#!/usr/bin/env python3
"""
Generate Google Sheets ready CSV and TSV files for IFA Media Pricing Feature Matrix.
Divides features into 2 segments: 1. Website Features, 2. Marketing & Growth Services.
Plain-English, non-technical marketing language designed for financial advisory practice owners.
"""

import csv
import os

features_data = [
    # Segment 1: Website Features
    {
        "segment": "1. Website Features",
        "title": "Custom Mobile & Desktop Website",
        "explainer": "Designed specifically for your advisory firm. Looks clean, loads fast, and works smoothly on mobile phones, tablets, and computers.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Instant WhatsApp & Phone Contact",
        "explainer": "Lets prospective clients call or message your advisers directly with a single tap.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "FCA & Regulatory Compliance Safeguards",
        "explainer": "Built with official FCA Firm Reference Number checks, Consumer Duty disclosures, and FSCS protection notices.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Adviser Profiles & Credentials",
        "explainer": "Dedicated profile pages showcasing qualifications, specialisms, and individual contact details for each adviser.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Fast UK Hosting & Bank-Grade Security",
        "explainer": "Hosted on secure UK cloud servers with SSL encryption to protect client information and guarantee fast load times.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "UK GDPR & Privacy Policy Controls",
        "explainer": "Includes compliant cookie consent banners and privacy policy pages to meet UK data protection laws.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Secure Client Enquiry Forms",
        "explainer": "Protected contact forms that deliver new client messages straight to your inbox without spam.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "24/7 Virtual Client Assistant (AI Chat)",
        "explainer": "A friendly automated assistant that greets website visitors, answers common questions, and collects contact details 24/7.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Pension & Retirement Drawdown Calculator",
        "explainer": "An interactive tool that lets prospective clients estimate tax-free cash and sustainable retirement income.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Inheritance Tax (IHT) Calculator",
        "explainer": "An easy-to-use tool showing visitors their potential estate tax liability to prompt an advisory consultation.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "ISA & Investment Growth Calculator",
        "explainer": "A visual tool showing visitors how their savings and investments could compound over time.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Free Retirement Guide for New Enquiries",
        "explainer": "A downloadable retirement guide that visitors can read in exchange for leaving their name and email address.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Online Meeting Booking (Calendar Sync)",
        "explainer": "Connects directly to your diary (Calendly, Outlook, etc.) so clients can book consultations online.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "1. Website Features",
        "title": "Client Portal Sign-In Button",
        "explainer": "A prominent button on your site where existing clients can log into their investment platform (e.g. moneyinfo, Intelliflo, Transact).",
        "growth": "",
        "scale": "✓",
    },

    # Segment 2: Marketing & Growth Services
    {
        "segment": "2. Marketing & Growth Services",
        "title": "3 Months of Hands-Off Social Media (Included)",
        "explainer": "We write, design, and publish weekly financial posts for your practice so you don't have to lift a finger.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Weekly LinkedIn & Social Media Articles",
        "explainer": "Timely, compliance-friendly market insights posted under your firm's name to build authority and trust.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Monthly Email Newsletter for Your Clients",
        "explainer": "A professionally written email newsletter ready to send to your clients with market updates and timely advice tips.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Google Maps & Local Search Setup",
        "explainer": "Puts your firm on Google Maps and local search results so local clients find you when searching for financial advice.",
        "growth": "✓",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Advanced Social Media & Visual Graphics",
        "explainer": "Custom charts, infographics, and visual posts designed to grab attention and attract higher-value clients.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Automated Follow-Up Emails for New Enquiries",
        "explainer": "Automatically sends friendly, helpful follow-up emails to prospects who get in touch, helping convert them into booked calls.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Local Business Directory Listings",
        "explainer": "Registers your firm across trusted UK financial and local business directories to improve your online presence.",
        "growth": "",
        "scale": "✓",
    },
    {
        "segment": "2. Marketing & Growth Services",
        "title": "Monthly Website & Enquiry Reports",
        "explainer": "A clear, simple monthly summary showing how many people visited your website and how many enquiries were generated.",
        "growth": "",
        "scale": "✓",
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
        writer.writerow(["Category", "Feature Title", "Simple Explanation ('i' tooltip)", "Growth Plan", "Scale Plan"])
        for row in features_data:
            writer.writerow([row["segment"], row["title"], row["explainer"], row["growth"], row["scale"]])
            
    # 2. Google Sheet Matching Format
    sheet_csv_path = os.path.join(output_dir, "ifa_media_google_sheets_import.csv")
    with open(sheet_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Feature Title", "Simple Explanation ('i' tooltip)", "GROWTH PLAN", "SCALE PLAN"])
        
        # Segment 1
        writer.writerow(["--- 1. WEBSITE FEATURES ---", "", "WEBSITE", "WEBSITE"])
        for row in [r for r in features_data if r["segment"] == "1. Website Features"]:
            writer.writerow([row["title"], row["explainer"], row["growth"], row["scale"]])
            
        # Segment 2
        writer.writerow(["--- 2. MARKETING & GROWTH SERVICES ---", "", "MARKETING", "MARKETING"])
        for row in [r for r in features_data if r["segment"] == "2. Marketing & Growth Services"]:
            writer.writerow([row["title"], row["explainer"], row["growth"], row["scale"]])

    # 3. TSV Format (For 1-click clipboard paste directly into Google Sheets cells!)
    tsv_path = os.path.join(output_dir, "ifa_media_google_sheets_paste.tsv")
    with open(tsv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, delimiter="\t")
        writer.writerow(["Feature Title", "Simple Explanation ('i' tooltip)", "GROWTH PLAN", "SCALE PLAN"])
        writer.writerow(["--- 1. WEBSITE FEATURES ---", "", "WEBSITE", "WEBSITE"])
        for row in [r for r in features_data if r["segment"] == "1. Website Features"]:
            writer.writerow([row["title"], row["explainer"], row["growth"], row["scale"]])
        writer.writerow(["--- 2. MARKETING & GROWTH SERVICES ---", "", "MARKETING", "MARKETING"])
        for row in [r for r in features_data if r["segment"] == "2. Marketing & Growth Services"]:
            writer.writerow([row["title"], row["explainer"], row["growth"], row["scale"]])

    print(f"Generated CSV: {csv_path}")
    print(f"Generated Google Sheets CSV: {sheet_csv_path}")
    print(f"Generated TSV: {tsv_path}")

if __name__ == "__main__":
    main()
