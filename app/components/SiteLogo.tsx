import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';

export default function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src={logo}
      alt="GS Edge"
      width={156}
      height={61}
      sizes={compact ? '120px' : '156px'}
      className={compact ? 'site-logo site-logo-compact' : 'site-logo'}
      priority={!compact}
    />
  );
}
