# SEO e publicação

## O que o código entrega

- Título, descrição, URL canônica, Open Graph e Twitter próprios em cada página.
- Imagens sociais específicas de cada projeto e uso da capa real nos artigos.
- Identificação de Gabriel Soares como autor por `Person`, `WebSite` e `ProfilePage`.
- Dados de artigos em `BlogPosting`, com autor, categoria, imagem e data de publicação.
- Dados de projetos em `CreativeWork`, sem preços, avaliações ou funcionalidades inventadas.
- `BreadcrumbList` nas páginas internas e um H1 por página.
- `sitemap.xml` com as nove páginas canônicas e imagens dos artigos; as páginas antigas e os arquivos de tradução sem rota pública não entram no sitemap.
- `robots.txt`, bloqueio de indexação de previews e `noindex` para respostas da API.
- Redirecionamentos permanentes dos produtos antigos para os projetos atuais.
- JSON-LD renderizado no servidor, com caracteres de marcação escapados.

A configuração comum fica em `lib/site.ts` e `lib/seo.ts`. Cada página informa seu próprio conteúdo ao helper `pageMetadata`.

## Variáveis

Configure as variáveis antes do build:

```dotenv
NEXT_PUBLIC_SITE_URL=https://gsedge.com.br
SITE_INDEXABLE=true
# Opcional, após obter o token no Search Console:
GOOGLE_SITE_VERIFICATION=
```

A URL deve usar HTTP(S), sem caminho, query ou fragmento. Ao mudar de domínio, atualize essa variável e configure os redirecionamentos do domínio antigo na hospedagem. O domínio atual foi mantido.

Em homologação use `SITE_INDEXABLE=false`. Deploys com `VERCEL_ENV=preview` ou `development` também recebem `noindex` e `robots.txt` restritivo. Produção deve permitir o rastreamento.

## Datas de artigos

`date` no front matter é a data original de publicação. Se houver atualização editorial relevante, informe `updated` com a data real:

```yaml
date: "2026-08-07"
updated: "2026-10-17"
```

`updated` alimenta `dateModified` e `lastmod`. Sem esse campo, o código não inventa uma data de atualização a cada build.

## Validação

`pnpm check` executa os testes de segurança, a validação do JSON-LD e a conferência do HTML de produção. A etapa `pnpm check:seo` também verifica canônicas, títulos sociais, imagens por página, H1, sitemap e redirecionamentos.

Após publicar:

1. Verifique o domínio no [Google Search Console](https://search.google.com/search-console/).
2. Envie `/sitemap.xml` do domínio publicado.
3. Inspecione a página inicial e um artigo com a ferramenta de inspeção de URL.
4. Confira os artigos no [Rich Results Test](https://search.google.com/test/rich-results).

Os testes locais verificam a implementação; rastreamento, indexação e posição nas buscas dependem da publicação e dos mecanismos de busca.

## Referências

- [Metadados do Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [JSON-LD no Next.js](https://nextjs.org/docs/app/guides/json-ld)
- [Dados estruturados de artigos — Google](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Dados estruturados de páginas de perfil — Google](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
