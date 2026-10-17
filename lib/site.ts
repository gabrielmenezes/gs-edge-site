function normalizeSiteUrl(value: string): string {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('NEXT_PUBLIC_SITE_URL deve ser a origem HTTP(S) do site, sem caminho ou credenciais.');
  }
  return url.origin;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || 'https://gsedge.com.br');
export const siteName = 'Gabriel Soares';
export const siteDescription = 'Projetos de Gabriel Soares: GSMoney e Game de Datacenters. Artigos sobre software, infraestrutura, redes e arquitetura de sistemas.';
export const siteIndexable = process.env.SITE_INDEXABLE !== 'false' && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${siteUrl}/`).toString();
}
