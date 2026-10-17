# Plano de evolução — site pessoal

Status: implementação local concluída em 17/10/2026; publicação não iniciada.

Entregue: identidade de Gabriel Soares, dois projetos em destaque, páginas /projetos, blog pessoal, correção de acesso a arquivos, testes de regressão, lint, CI, sitemap e acessibilidade do menu. A interface foi consolidada em português, preservando os artigos em inglês no repositório. Contato e domínio existentes foram mantidos. O jogo permanece em breve. Ilustrações são conceituais.

Validação: build de produção com Webpack, TypeScript, ESLint e testes do blog; inspeção visual em desktop e celular. Os itens abaixo registram o planejamento original.

## Objetivo

Transformar o site institucional da GS Edge em um site pessoal de Gabriel Soares, apresentando sua atuação em tecnologia e dois projetos autorais: GSMoney e Game de Datacenters. O nome pessoal é uma premissa baseada no conteúdo atual e pode ser ajustado.

O visitante deve entender quem é Gabriel, conhecer os projetos e encontrar uma forma de contato. A oferta institucional de consultoria deixa de ser o eixo principal.

## Estrutura proposta

- Início: apresentação pessoal curta, dois projetos em destaque, resumo sobre o autor, artigos recentes e contato.
- Projetos: GSMoney e Game de Datacenters, com descrição, imagens, participação do autor, estado atual e acesso quando disponível.
- Sobre: seção na página inicial com trajetória e interesses confirmados pelo autor.
- Blog: preservar artigos existentes e adaptar a identidade editorial para autoria pessoal.
- Contato: links pessoais confirmados; agendamento apenas se fizer sentido para o novo posicionamento.

Navegação: Projetos, Sobre, Blog e Contato.

## Projetos

### GSMoney

Apresentar o problema de organização financeira, a proposta do produto e sua interface. O código atual informa o endereço https://gsmoney.gsedge.com.br; sua disponibilidade deve ser verificada na implementação. Publicar apenas funcionalidades comprovadas. Revisar alegações existentes sobre Open Finance, criptografia e garantias de segurança antes de reutilizá-las.

### Game de Datacenters

Usar “Game de Datacenters” como nome de apresentação provisório. O conteúdo atual o chama de “Hyperscale: Cloud & DC Manager” e o marca como “Em breve”. Confirmar nome, estágio e eventual URL antes de exibir botão para jogar. Mostrar a proposta de construção e gestão de data centers e somente mecânicas implementadas ou claramente identificadas como planejadas. Usar visuais específicos do jogo.

## Direção visual

Identidade pessoal, com tipografia legível, mais espaço e textos diretos em primeira pessoa. Manter inicialmente a base escura e os acentos em ciano como ponto de partida, reduzindo brilhos, animações contínuas e linguagem corporativa. Diferenciar os projetos por imagens e cores próprias. Foto pessoal apenas após confirmar que o arquivo existente é adequado.

## Etapas e critérios de conclusão

### 1. Base técnica

- Restringir o leitor de posts aos arquivos permitidos em content/blog; validar idioma na API.
- Corrigir o comando de lint e os erros identificados.
- Verificar TypeScript e build de produção; investigar qualquer bloqueio.
- Retirar a API de waitlist sem uso ou conectá-la a persistência real se a captação passar a fazer parte do escopo.

Conclusão: verificações executáveis e leitura fora do diretório rejeitada, com teste de regressão relevante.

### 2. Identidade e página inicial

- Substituir marca e discurso institucional por apresentação pessoal.
- Criar a abertura, a vitrine dos dois projetos, Sobre e Contato.
- Atualizar menu, rodapé e metadados; preservar os artigos.
- Remover as seções de serviços da página inicial.

Conclusão: página inicial apresenta o autor e os dois projetos com clareza, em desktop e celular.

### 3. Páginas dos projetos e migração

- Separar o componente extenso de produto em seções reutilizáveis e demonstrações específicas.
- Criar /projetos, /projetos/gsmoney e /projetos/game-de-datacenters.
- Redirecionar /products e os dois endereços antigos para seus correspondentes novos.
- Mapear os endereços de serviços antigos e definir destinos relevantes ou sua retirada, evitando redirecionamentos genéricos sem equivalência.
- Atualizar links internos, sitemap, canônicas e imagens de compartilhamento.

Conclusão: navegação coerente, sem links internos quebrados e com destinos antigos tratados.

### 4. Conteúdo, acessibilidade e entrega

- Revisar biografia, links pessoais, nome e estágio do jogo e funcionalidades divulgadas.
- Manter PT/EN apenas se a tradução puder ser completa; para ambos, alinhar conteúdo, URLs, metadados e atributo lang.
- Corrigir foco do menu, navegação por teclado e suporte a movimento reduzido.
- Evitar buscas redundantes de posts e enviar resumos nas listagens.
- Atualizar README e adicionar CI com lint, TypeScript e build.
- Validar visualmente desktop e celular e verificar acessos externos.

Conclusão: verificações aprovadas, conteúdo revisado e versão local pronta para avaliação. Domínio e publicação serão tratados em uma etapa própria.

## Fora deste primeiro ciclo

Alterações no aplicativo GSMoney ou no código do jogo, criação de autenticação, migração de hospedagem e troca de domínio.

## Informações a confirmar durante o trabalho

- Nome de apresentação e biografia curta do autor.
- Nome definitivo, estágio e link do Game de Datacenters.
- Contatos públicos e destino preferido para contato.
- Permanência do inglês e futura estratégia de domínio.

Essas definições podem ser incorporadas durante a implementação; a correção da base técnica independe delas.
