import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#475569"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(45, 11 * inch - 32, "UK IFA Growth Platform — Market Intelligence & Product Packaging Proposal")
            self.drawRightString(8.5 * inch - 45, 11 * inch - 32, "CONFIDENTIAL")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.75)
            self.line(45, 11 * inch - 38, 8.5 * inch - 45, 11 * inch - 38)
        
        # Footer
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.75)
        self.line(45, 38, 8.5 * inch - 45, 38)
        
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        self.drawString(45, 26, "UK IFA Website Builder, Lead Funnels & Automation Engine — Strategy Report")
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(8.5 * inch - 45, 26, page_text)
        self.restoreState()

def build_pdf(filename="UK_IFA_Website_Builder_Market_Research_and_Pricing_Strategy.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=45,
        rightMargin=45,
        topMargin=46,
        bottomMargin=46
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_primary = colors.HexColor("#0F172A")    # Slate 900
    c_secondary = colors.HexColor("#1E3A8A")  # Blue 900
    c_accent = colors.HexColor("#0284C7")     # Sky 600
    c_slate_dark = colors.HexColor("#334155")
    c_slate_light = colors.HexColor("#64748B")
    c_bg_light = colors.HexColor("#F8FAFC")
    c_card_border = colors.HexColor("#CBD5E1")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=c_primary,
        spaceAfter=3
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=c_accent,
        spaceAfter=8
    )
    
    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=12.5,
        leading=16,
        textColor=c_secondary,
        spaceBefore=8,
        spaceAfter=5,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12.4,
        textColor=c_slate_dark,
        spaceAfter=4
    )

    body_tight = ParagraphStyle(
        'BodyTight',
        parent=body_style,
        fontSize=8.5,
        leading=11.8,
        spaceAfter=3
    )
    
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.8,
        textColor=c_slate_dark
    )
    
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=table_cell,
        fontName='Helvetica-Bold',
        textColor=c_primary
    )
    
    table_header = ParagraphStyle(
        'TableHeader',
        parent=table_cell,
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.white
    )

    story = []

    # ================= PAGE 1 =================
    story.append(Paragraph("UK IFA Website & Client Acquisition Platform", title_style))
    story.append(Paragraph("Competitor Intelligence, Strategic Positioning & 3-Tier Growth Packaging", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_accent, spaceBefore=0, spaceAfter=8))

    # Executive Summary Box
    exec_summary_text = (
        "<b>Executive Summary:</b> The UK Independent Financial Adviser (IFA) market currently suffers from a deep structural polarization. "
        "Advisers are forced to choose between <b>legacy template vendors</b> (charging £225–£750 setup fees with dated 2010s websites) "
        "or <b>bespoke marketing agencies</b> (charging £4,000–£12,000+ upfront). Our platform disrupts this sector by combining "
        "<b>Next.js ultra-fast modern web design, automated FCA compliance safety, high-converting UK financial lead magnets & calculators, and WhatsApp/Chatbot automation</b> "
        "into three high-value monthly tiers with <b>£0 setup fees</b> and an optional <b>Done-For-You (DFY) LinkedIn & Blog Marketing engine</b>."
    )
    
    exec_table = Table(
        [[Paragraph(exec_summary_text, body_style)]],
        colWidths=[522]
    )
    exec_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#EFF6FF")),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#93C5FD")),
        ('PADDING', (0, 0), (-1, -1), 7),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(exec_table)
    story.append(Spacer(1, 6))

    # 1. Competitor Landscape
    story.append(Paragraph("1. UK IFA Digital Provider Landscape & Competitor Audit", h1_style))

    comp_data = [
        [
            Paragraph("Competitor / Category", table_header),
            Paragraph("Pricing Model", table_header),
            Paragraph("Key Strengths", table_header),
            Paragraph("Critical Vulnerabilities & Weaknesses", table_header)
        ],
        [
            Paragraph("<b>IFA Web Pro</b><br/><i>(Specialist Template)</i>", table_cell),
            Paragraph("• £225 one-off setup<br/>• £45 / month", table_cell),
            Paragraph("• Quarterly FCA newsletters<br/>• Low recurring subscription", table_cell),
            Paragraph("• Outdated 2010s layouts & rigid styles<br/>• No interactive calculators or lead magnets<br/>• Basic static contact forms with low conversion", table_cell)
        ],
        [
            Paragraph("<b>WEBPRO Adviser</b><br/><i>(Webpro IT)</i>", table_cell),
            Paragraph("• £250–£750 setup<br/>• £34.95–£69.95+/mo", table_cell),
            Paragraph("• Financial calculators<br/>• Pre-approved tax copy", table_cell),
            Paragraph("• Clunky WordPress CMS & slow page speeds<br/>• Hidden fees for essential add-on modules<br/>• Poor mobile UX and high friction", table_cell)
        ],
        [
            Paragraph("<b>Goldmine Media</b><br/><i>(Agency / Content)</i>", table_cell),
            Paragraph("• £197 / mo (12m lock)<br/>• £3,500–£7,500 build", table_cell),
            Paragraph("• High-quality magazines<br/>• Strong financial copy", table_cell),
            Paragraph("• Strict 12-month lock-in contract<br/>• High upfront capital expense for small IFAs<br/>• Long 6-8 week build and rollout cycles", table_cell)
        ],
        [
            Paragraph("<b>The Yardstick Agency</b><br/><i>(Bespoke Agency)</i>", table_cell),
            Paragraph("• £4,000–£12,000+ build<br/>• £450–£1,500+/mo", table_cell),
            Paragraph("• Premium bespoke branding<br/>• Excellent conversion copy", table_cell),
            Paragraph("• Prohibitive pricing for solo / boutique practices<br/>• 3–4 month project delivery queues<br/>• High ongoing retainer required", table_cell)
        ],
        [
            Paragraph("<b>Generic DIY Builders</b><br/><i>(Wix, Squarespace)</i>", table_cell),
            Paragraph("• £15–£35 / month<br/>• (DIY effort)", table_cell),
            Paragraph("• Drag-and-drop builder<br/>• Low software cost", table_cell),
            Paragraph("• <b>Zero FCA compliance safety</b> (high regulatory risk)<br/>• No UK tax/pension calculators or VouchedFor sync<br/>• Demands 40+ hours of manual adviser setup", table_cell)
        ]
    ]

    comp_table = Table(comp_data, colWidths=[110, 100, 140, 172])
    comp_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_secondary),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
        ('GRID', (0, 0), (-1, -1), 0.5, c_card_border),
        ('PADDING', (0, 0), (-1, -1), 4.5),
    ]))
    story.append(comp_table)
    story.append(Spacer(1, 6))

    # 2. Market Gaps & Value Proposition
    story.append(Paragraph("2. Strategic Market Gaps & Our 5-Pillar Advantage", h1_style))

    advantages = [
        "<b>Pillar 1 — Next.js 15 & Sub-Second Speeds:</b> Instant page loads, sleek animated UI, pristine mobile ergonomics, and 99+ Core Web Vitals SEO scores.",
        "<b>Pillar 2 — Automated FCA Compliance Engine:</b> Built-in risk warnings, automatic FCA register footer links, GDPR-compliant consent, and encrypted lead processing.",
        "<b>Pillar 3 — Turnkey UK Financial Calculators & Lead Magnets:</b> Interactive Pension Pot projection, Inheritance Tax (IHT) estimates, and downloadable tax planning guides.",
        "<b>Pillar 4 — WhatsApp & AI Lead Automation:</b> Instant Click-to-WhatsApp routing, real-time lead SMS/WhatsApp alerts to the adviser's mobile, and 24/7 qualification bots.",
        "<b>Pillar 5 — 15-Minute Instant Onboarding & Zero Setup Fees:</b> Instant brand customization (colors, fonts, team profiles) and live preview with £0 upfront barrier."
    ]
    for adv in advantages:
        story.append(Paragraph(f"• {adv}", body_tight))
    
    story.append(PageBreak())

    # ================= PAGE 2 =================
    story.append(Paragraph("3. Our Proposed 3-Tier Growth & Automation Packaging", h1_style))
    story.append(Paragraph(
        "Each plan is structured around clear conversion milestones, lead generation capabilities, and operational scale:",
        body_style
    ))
    story.append(Spacer(1, 2))

    plan_matrix_data = [
        [
            Paragraph("Pillar & Capabilities", table_header),
            Paragraph("1. Starter Growth<br/><b>£49 / month</b><br/>(£490/yr • £0 setup)", table_header),
            Paragraph("2. Client Acquisition Pro<br/><b>£99 / month</b> ⭐ <i>(Best Value)</i><br/>(£990/yr • £0 setup)", table_header),
            Paragraph("3. Elite Wealth Automation<br/><b>£189 / month</b><br/>(£1,890/yr • £0 setup)", table_header)
        ],
        [
            Paragraph("<b>Target Profile</b>", table_cell_bold),
            Paragraph("Solo IFAs, Appointed Reps, newly authorized planners", table_cell),
            Paragraph("Established IFA practices & boutiques (2–5 advisers)", table_cell),
            Paragraph("Multi-branch advisory networks & wealth managers", table_cell)
        ],
        [
            Paragraph("<b>Website & Templates</b>", table_cell_bold),
            Paragraph("1 High-converting Modern Wealth template + SSL & domain", table_cell),
            Paragraph("<b>All 3 Premium Templates</b> + instant visual theme customizer", table_cell),
            Paragraph("<b>Full Bespoke Theme Styling</b> + multi-branch location pages", table_cell)
        ],
        [
            Paragraph("<b>FCA Compliance Engine</b>", table_cell_bold),
            Paragraph("FCA register footer, risk disclaimers, GDPR cookie banner", table_cell),
            Paragraph("Pre-approved financial copy + dynamic disclaimer updates", table_cell),
            Paragraph("Custom compliance audit mode + regulatory logs & archives", table_cell)
        ],
        [
            Paragraph("<b>Lead Magnets & Conversion</b>", table_cell_bold),
            Paragraph("• 1 Turnkey Lead Magnet<br/><i>(UK Retirement Readiness Guide)</i><br/>• Consultation Booking Modal", table_cell),
            Paragraph("• <b>3 Pre-built Lead Magnets</b> (IHT Guide, Pension Maximiser)<br/>• <b>Interactive Assessment Quiz</b>", table_cell),
            Paragraph("• <b>Unlimited Custom Lead Magnets</b><br/>• Dynamic gated PDF downloads<br/>• Dedicated campaign landing pages", table_cell)
        ],
        [
            Paragraph("<b>UK Financial Calculators</b>", table_cell_bold),
            Paragraph("Standard UK Pension & Compound Growth Calculator", table_cell),
            Paragraph("<b>Full Suite:</b> Pension Pot, IHT, Mortgage, ISA Growth", table_cell),
            Paragraph("Full Suite + Custom Branded Lead-Capture Gated Calculators", table_cell)
        ],
        [
            Paragraph("<b>WhatsApp & Chatbot Automations</b>", table_cell_bold),
            Paragraph("• <b>WhatsApp Click-to-Chat</b><br/>• Pre-filled consultation text", table_cell),
            Paragraph("• <b>Automated Lead Qualifier Bot</b> (Pot size, goals, location)<br/>• <b>Instant WhatsApp Lead Alerts</b>", table_cell),
            Paragraph("• <b>24/7 AI Financial Assistant Bot</b><br/>• Automated WhatsApp appointment booking & reminder sync", table_cell)
        ],
        [
            Paragraph("<b>Reviews & Social Proof</b>", table_cell_bold),
            Paragraph("Curated testimonial cards", table_cell),
            Paragraph("<b>Live VouchedFor & Unbiased</b> review badge sync", table_cell),
            Paragraph("Live Review Feeds + Video Testimonial Showcase section", table_cell)
        ],
        [
            Paragraph("<b>CRM & Integrations</b>", table_cell_bold),
            Paragraph("Instant email lead alerts", table_cell),
            Paragraph("Webhook sync: HubSpot, Plannr, Intelliflo, Zapier", table_cell),
            Paragraph("Full 2-Way CRM Sync + Dedicated API Access & Gateway", table_cell)
        ],
        [
            Paragraph("<b>Setup & Onboarding</b>", table_cell_bold),
            Paragraph("<b>£0 Setup</b> (Self-serve instant)", table_cell),
            Paragraph("<b>£0 Setup</b> (Instant live preview)", table_cell),
            Paragraph("<b>£0 Setup</b> (Optional £299 VIP White-Glove Onboarding)", table_cell)
        ]
    ]

    plan_table = Table(plan_matrix_data, colWidths=[108, 130, 142, 142])
    plan_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_secondary),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
        ('GRID', (0, 0), (-1, -1), 0.5, c_card_border),
        ('PADDING', (0, 0), (-1, -1), 4.2),
    ]))
    story.append(plan_table)
    
    story.append(PageBreak())

    # ================= PAGE 3 =================
    # 4. Done-For-You (DFY) LinkedIn & Blog Marketing Add-On
    story.append(Paragraph("4. Optional Add-On: Done-For-You (DFY) LinkedIn & Blog Marketing", h1_style))
    story.append(Paragraph(
        "A critical bottleneck for UK IFAs is producing consistent, high-authority thought leadership that strictly complies with FCA financial promotion rules. We solve this through a specialized turnkey service:",
        body_style
    ))

    dfy_text = (
        "<b>'LinkedIn Authority & Thought Leadership Engine' — £199 / month</b> <i>(or £169/mo bundled with Pro / Elite)</i><br/><br/>"
        "• <b>8 to 10 FCA-Compliant LinkedIn Posts / Month:</b> Educational content covering tax year planning, pension allowances, ISA strategies, and market perspectives tailored to attract high-net-worth (HNW) clients.<br/>"
        "• <b>2 Long-Form Blog / LinkedIn Pulse Articles (1,000+ words):</b> In-depth thought leadership pieces published to the IFA's website blog for organic Google SEO, and syndicated as LinkedIn Articles.<br/>"
        "• <b>Custom Branded Graphics & Slide Carousels:</b> High-engagement visual assets tailored in the firm's brand colors to maximize algorithmic reach.<br/>"
        "• <b>Lead Magnet Promotion Campaigns:</b> Dedicated organic posts designed to funnel LinkedIn connections directly into the website's lead magnet download gates.<br/>"
        "• <b>FCA Compliance Pre-Screening:</b> All materials adhere strictly to UK financial promotion regulations (clear risk warnings, balanced commentary, no return promises)."
    )

    dfy_table = Table([[Paragraph(dfy_text, body_style)]], colWidths=[522])
    dfy_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#F0FDF4")),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#86EFAC")),
        ('PADDING', (0, 0), (-1, -1), 8),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(dfy_table)
    story.append(Spacer(1, 10))

    # 5. Financial ROI & Client Decision Matrix
    story.append(Paragraph("5. Financial ROI Analysis & Competitor Comparison", h1_style))
    
    roi_text = (
        "<b>Why This Offers an Asymmetric Return for Financial Advisers:</b><br/>"
        "In the UK wealth advisory space, a single new client onboarding typically delivers <b>£1,500 to £5,000+ in upfront advice fees</b> plus recurring ongoing management fees. "
        "At <b>£99/month (£1,188/year)</b> for the <i>Client Acquisition Pro</i> plan, winning just <b>ONE client every 12 months</b> via an automated WhatsApp lead alert or downloadable IHT guide represents an immediate <b>200% to 400%+ net ROI</b>."
    )
    story.append(Paragraph(roi_text, body_style))
    story.append(Spacer(1, 6))

    roi_compare_data = [
        [
            Paragraph("Metric", table_header),
            Paragraph("Traditional Legacy Vendors", table_header),
            Paragraph("Bespoke Design Agencies", table_header),
            Paragraph("Our Platform Solution", table_header)
        ],
        [
            Paragraph("<b>Upfront Setup Cost</b>", table_cell_bold),
            Paragraph("£225 – £750", table_cell),
            Paragraph("£4,000 – £12,000+", table_cell),
            Paragraph("<b>£0 Setup</b>", table_cell_bold)
        ],
        [
            Paragraph("<b>Launch Timeline</b>", table_cell_bold),
            Paragraph("4 – 8 Weeks", table_cell),
            Paragraph("8 – 16 Weeks", table_cell),
            Paragraph("<b>15 Minutes (Instant Live)</b>", table_cell_bold)
        ],
        [
            Paragraph("<b>Lead Conversion Tech</b>", table_cell_bold),
            Paragraph("Basic static form", table_cell),
            Paragraph("Custom landing pages", table_cell),
            Paragraph("<b>Quizzes, Calculators & Magnets</b>", table_cell_bold)
        ],
        [
            Paragraph("<b>WhatsApp & Chat Automation</b>", table_cell_bold),
            Paragraph("None (Email only)", table_cell),
            Paragraph("Expensive custom add-on", table_cell),
            Paragraph("<b>Built-in WhatsApp & AI Bot</b>", table_cell_bold)
        ]
    ]

    roi_compare_table = Table(roi_compare_data, colWidths=[130, 125, 130, 137])
    roi_compare_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_secondary),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
        ('GRID', (0, 0), (-1, -1), 0.5, c_card_border),
        ('PADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(roi_compare_table)
    story.append(Spacer(1, 10))

    # Client Sign-Off Box
    story.append(Paragraph("6. Client Plan Selection & Authorization", h1_style))
    signoff_data = [
        [
            Paragraph("<b>Select Core Growth Plan:</b>", table_cell_bold),
            Paragraph("[  ] <b>Starter Growth</b> (£49/mo)<br/>[  ] <b>Client Acquisition Pro</b> (£99/mo) ⭐<br/>[  ] <b>Elite Wealth Automation</b> (£189/mo)", table_cell),
        ],
        [
            Paragraph("<b>DFY LinkedIn & Blog Marketing:</b>", table_cell_bold),
            Paragraph("[  ] <b>Yes</b>, include DFY LinkedIn Engine (£169/mo bundled discount)<br/>[  ] Not at this stage", table_cell),
        ],
        [
            Paragraph("<b>Authorized Signatory:</b> ___________________________", table_cell),
            Paragraph("<b>Date of Confirmation:</b> ____ / ____ / 2026", table_cell)
        ]
    ]
    signoff_table = Table(signoff_data, colWidths=[175, 347])
    signoff_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_bg_light),
        ('BOX', (0, 0), (-1, -1), 1, c_card_border),
        ('GRID', (0, 0), (-1, -1), 0.5, c_card_border),
        ('PADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(signoff_table)

    # Build Document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated clean 3-page PDF report: {filename}")

if __name__ == "__main__":
    build_pdf()
