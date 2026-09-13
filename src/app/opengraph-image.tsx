import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'IFA Media | Websites for Financial Advisors, Planners & Wealth Managers';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          backgroundColor: '#08232C',
          backgroundImage: 'radial-gradient(circle at 90% 10%, #143946 0%, #08232C 60%)',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: '#143946',
                border: '2px solid #235364',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F3C044',
                fontWeight: 900,
                fontSize: '24px',
              }}
            >
              IFA
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                IFA Media
              </span>
              <span style={{ fontSize: '13px', color: '#5CDFB0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                UK Specialist Web Studio
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: '#143946',
              border: '1px solid #235364',
              color: '#F3C044',
              fontSize: '13px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            FCA &amp; Consumer Duty FG22/5 Ready
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              color: 'white',
            }}
          >
            We only know one thing
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: 1.3,
              color: '#AFC3C9',
            }}
          >
            and that is creating websites for Financial Advisors, Financial Planners and Wealth Managers.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #143946', paddingTop: '28px' }}>
          <div style={{ display: 'flex', gap: '14px' }}>
            <div
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '14px',
                fontWeight: 700,
                color: '#5CDFB0',
              }}
            >
              ✓ 24/7 AI Concierge
            </div>
            <div
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '14px',
                fontWeight: 700,
                color: '#F3C044',
              }}
            >
              ✓ 3-Month Social Media Retainer
            </div>
            <div
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '14px',
                fontWeight: 700,
                color: '#93C5FD',
              }}
            >
              ✓ Ultra-Fast Next.js Cloud
            </div>
          </div>

          <span style={{ fontSize: '18px', fontWeight: 800, color: 'white', fontFamily: 'monospace' }}>
            ifamedia.co.uk
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
