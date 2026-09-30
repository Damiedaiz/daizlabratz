import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DaizLabRatZ - The 21-Day Sprint | Systems Over Hustle';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#030303',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          border: '4px solid #047857',
          position: 'relative',
        }}
      >
        {/* Abstract 2080 Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(4, 120, 87, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 120, 87, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top HUD Display */}
        <div style={{ position: 'absolute', top: 40, left: 50, display: 'flex', color: '#00ff9d', fontSize: 20, letterSpacing: '3px' }}>
          ● SYSTEM ACTIVE
        </div>
        <div style={{ position: 'absolute', top: 40, right: 50, display: 'flex', color: '#D4AF37', fontSize: 20, letterSpacing: '3px' }}>
          E2E_PROTOCOL_V1
        </div>

        {/* Main Typography Layer */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <div style={{ 
            display: 'flex', 
            fontSize: 90, 
            fontWeight: 900, 
            color: '#ffffff', 
            letterSpacing: '-2px', 
            textTransform: 'uppercase',
            textShadow: '0px 0px 20px rgba(0, 255, 157, 0.2)'
          }}>
            DaizLabRatZ<span style={{ color: '#00ff9d' }}>.Online</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            marginTop: 20, 
            fontSize: 38, 
            color: '#D4AF37', 
            letterSpacing: '12px', 
            textTransform: 'uppercase' 
          }}>
            The 21-Day Sprint
          </div>
          
          <div style={{ 
            display: 'flex', 
            marginTop: 50, 
            padding: '12px 30px', 
            border: '2px solid #D4AF37', 
            background: 'rgba(212, 175, 55, 0.05)', 
            color: '#ffffff', 
            fontSize: 24, 
            letterSpacing: '6px' 
          }}>
            EXPERT-TO-EXPERT ONBOARDING
          </div>
        </div>

        {/* Core Philosophy Tagline */}
        <div style={{ position: 'absolute', bottom: 50, display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{ 
            display: 'flex', 
            color: '#047857', 
            fontSize: 26, 
            letterSpacing: '8px', 
            textTransform: 'uppercase' 
          }}>
            Systems Over Hustle.
          </div>
        </div>
        
        {/* HUD Targeting Corners */}
        <div style={{ position: 'absolute', top: 30, left: 30, width: 40, height: 40, borderTop: '4px solid #00ff9d', borderLeft: '4px solid #00ff9d' }} />
        <div style={{ position: 'absolute', top: 30, right: 30, width: 40, height: 40, borderTop: '4px solid #00ff9d', borderRight: '4px solid #00ff9d' }} />
        <div style={{ position: 'absolute', bottom: 30, left: 30, width: 40, height: 40, borderBottom: '4px solid #00ff9d', borderLeft: '4px solid #00ff9d' }} />
        <div style={{ position: 'absolute', bottom: 30, right: 30, width: 40, height: 40, borderBottom: '4px solid #00ff9d', borderRight: '4px solid #00ff9d' }} />
      </div>
    ),
    {
      ...size,
    }
  );
}