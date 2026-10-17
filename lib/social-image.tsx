import { ImageResponse } from 'next/og';

export function socialImage(title: string, subtitle: string) {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#0b1115', color: '#edf2ef' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#a8e6cf' }}>
        <span>GABRIEL SOARES</span><span>TECNOLOGIA & PROJETOS</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 70, fontWeight: 600, lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: 'flex', fontSize: 28, color: '#a8e6cf' }}>{subtitle}</div>
      </div>
      <div style={{ display: 'flex', fontSize: 22, color: '#a7b5b9' }}>Projetos, tecnologia e ideias em construção.</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
