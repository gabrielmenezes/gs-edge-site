# Gabriel Soares — site pessoal

Portfólio com GSMoney, Game de Datacenters e artigos técnicos. A interface é em português; as traduções dos artigos em inglês permanecem em `content/blog`.

## Desenvolvimento

Requer Node.js 22 e pnpm 9.15.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

O site fica em `http://localhost:3000`. Os comandos usam Webpack, validado neste ambiente.

## Verificações

```sh
pnpm check
```

Executa ESLint, testes, build, TypeScript e a inspeção do SEO no HTML de produção. Para executar cada etapa separadamente:

```sh
pnpm lint
pnpm test
pnpm build
pnpm typecheck
pnpm check:seo
```

`check:seo` depende de um build atualizado. Confere as nove páginas públicas, canônicas, um H1 por página, Open Graph, Twitter, JSON-LD, sitemap, robots e os redirecionamentos antigos. A CI executa as mesmas etapas.

## Organização

- `app/page.tsx`: página inicial.
- `app/projetos`: páginas dos dois projetos e imagens de compartilhamento.
- `app/blog`: listagem e artigos.
- `app/components`: componentes visuais e de leitura.
- `lib/projects.ts`: conteúdo e estado dos projetos.
- `lib/blog.ts`: leitura segura dos artigos Markdown.
- `lib/site.ts` e `lib/seo.ts`: configuração pública e SEO compartilhado.
- `lib/social-image.tsx`: renderização das imagens sociais.
- `content/blog`: artigos e traduções.
- `tests`: testes de segurança e SEO.
- `scripts/check-seo.mjs`: inspeção dos artefatos de produção.
- `docs`: plano e orientações de publicação.

## Configuração

Consulte `.env.example`. `NEXT_PUBLIC_SITE_URL` deve conter a origem pública do site, sem caminho (padrão: `https://gsedge.com.br`). `SITE_INDEXABLE=false` desabilita a indexação de homologação; Vercel Preview já usa `noindex`. O token opcional `GOOGLE_SITE_VERIFICATION` permite a verificação no Search Console.

As configurações afetam o HTML e os arquivos estáticos: faça novo build após alterá-las. Veja [SEO e publicação](docs/seo.md).

## Migração

Os endereços `/products`, `/products/gsmoney` e `/products/gsedge-dc-game` usam redirecionamentos permanentes configurados em `next.config.ts`. Páginas de serviços retiradas retornam 404. A API de waitlist foi removida por não ter armazenamento nem uso na interface.

O logo GS Edge, o domínio e o e-mail de contato atuais foram preservados. O Game de Datacenters permanece “Em breve”, sem link público para jogar. Os visuais dos projetos são ilustrações conceituais.

Stack: Next.js 16, React 19, TypeScript e Tailwind CSS. O repositório não contém o aplicativo GSMoney nem o código do jogo. O [plano de evolução](docs/plano-melhorias.md) registra as etapas desta mudança.
