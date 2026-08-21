import { ImageResponse } from 'next/og';
import { PERSONAL_INFO } from '@/constants/personal-info';

export const alt = PERSONAL_INFO.siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #202c39 0%, #283845 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 600,
            color: '#f2d492',
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {PERSONAL_INFO.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 500,
            color: '#f29559',
            marginBottom: 40,
          }}
        >
          {PERSONAL_INFO.currentRole}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#b8b08d',
          }}
        >
          {PERSONAL_INFO.specialization}
        </div>
      </div>
    ),
    { ...size }
  );
}
