'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function BlogBackLink() {
  const { t } = useLanguage();
  return (
    <Link href="/blog" className="inline-block text-edge-cyan hover:text-edge-yellow transition-colors mb-8 font-semibold tracking-wide">
      {t('back_to_blog')}
    </Link>
  );
}
