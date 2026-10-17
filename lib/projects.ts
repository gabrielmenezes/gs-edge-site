export const projects = [
  {
    slug: 'gsmoney', name: 'GSMoney', number: '01', kind: 'Finanças pessoais',
    status: 'Disponível na web', live: true,
    title: 'Mais clareza para cuidar do seu dinheiro.',
    summary: 'Um projeto de organização financeira pessoal, pensado para aproximar o planejamento do dia a dia.',
    description: 'O GSMoney nasce da ideia de tornar o planejamento financeiro mais visual. Uma forma de olhar para o presente, organizar prioridades e pensar nos próximos passos com mais clareza.',
    url: 'https://gsmoney.gsedge.com.br',
    topics: ['Organização financeira', 'Planejamento', 'Produto digital'],
    concept: 'Traduzir a complexidade das finanças em uma experiência simples de entender e usar.',
    details: ['Organização como ponto de partida', 'Uma visão mais clara das prioridades', 'Planejamento conectado ao cotidiano'],
  },
  {
    slug: 'game-de-datacenters', name: 'Game de Datacenters', number: '02', kind: 'Estratégia & simulação',
    status: 'Em breve', live: false,
    title: 'Infraestrutura vira um jogo de decisões.',
    summary: 'Um projeto de jogo sobre construir e gerenciar data centers, explorando os desafios da infraestrutura de tecnologia.',
    description: 'A proposta do Game de Datacenters é transformar decisões de infraestrutura em uma experiência de estratégia e simulação. Da capacidade dos servidores ao equilíbrio entre energia e refrigeração, cada escolha faz parte da evolução de um data center.',
    url: undefined,
    topics: ['Data centers', 'Simulação', 'Estratégia'],
    concept: 'Explorar os desafios da infraestrutura por meio de uma experiência interativa. O projeto ainda não tem uma versão pública anunciada aqui.',
    details: ['Construção e expansão de infraestrutura', 'Equilíbrio entre capacidade, energia e refrigeração', 'Decisões de operação e disponibilidade'],
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
