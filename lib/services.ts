export interface ServicePillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  iconName: 'network' | 'audit' | 'training' | 'code' | 'advisory';
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  description: string;
  targetAudience: string;
  highlights: string[];
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: ServicePillar[];
  techsTitle: string;
  techsSubtitle: string;
  techs: string[];
  deliverablesTitle: string;
  deliverablesSubtitle: string;
  deliverables: ServiceDeliverable[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  metaTitle: string;
  metaDescription: string;
}

const slugAliases: Record<string, string> = {
  'desenvolvimento-software-sob-medida': 'auditoria-modernizacao-sistemas-legados',
  'consultoria-design-sistemas-infraestrutura': 'consultoria-arquitetura-sistemas-nuvem',
  'treinamento-tecnologias-ti': 'tech-leadership-capacitacao-ti',
};

export const servicesData: Record<'pt' | 'en', Service[]> = {
  pt: [
    {
      slug: 'consultoria-arquitetura-sistemas-nuvem',
      iconName: 'network',
      title: 'Consultoria de Arquitetura de Sistemas & Nuvem',
      badge: 'Arquitetura & Resiliência',
      tagline: 'Desenhamos arquiteturas resilientes, escaláveis e à prova de falhas para sistemas e redes de missão crítica.',
      summary: 'Consultoria especializada em design de sistemas distribuídos, topologias de rede corporativa (SD-WAN/BGP), estratégias multicloud e blueprints de escalabilidade extrema.',
      description: 'Na GS Edge, transformamos complexidade tecnológica em arquiteturas previsíveis, escaláveis e altamente seguras. Apoiamos CTOs e líderes de tecnologia na concepção e validação de topologias de redes corporativas (SD-WAN, BGP, MPLS, VPNs tolerantes a falhas) e na arquitetura de sistemas distribuídos na nuvem (AWS, GCP, Azure), eliminando pontos únicos de falha e otimizando a eficiência operacional.',
      targetAudience: 'CTOs, Diretores de Tecnologia e empresas que exigem 99.99% de disponibilidade, latência mínima e arquiteturas preparadas para escala global.',
      highlights: [
        'Eliminação de pontos únicos de falha (SPOF) em redes, clusters e serviços de missão crítica',
        'Modelagem de arquiteturas multinuvem e híbridas de alta vazão e baixa latência',
        'Recomendações agnósticas de provedor e dimensionamento ideal de recursos e instâncias',
        'Estruturação de observabilidade avançada, SLOs/SLAs e telemetria preditiva 24/7',
      ],
      pillarsTitle: 'Nossa Metodologia de Consultoria Arquitetural',
      pillarsSubtitle: 'Um processo consultivo estruturado em 4 fases para desenhar soluções com respaldo executivo e operacional.',
      pillars: [
        {
          title: '1. Diagnóstico & Mapeamento de Topologia',
          subtitle: 'Visibilidade total do ecossistema',
          description: 'Análise minuciosa do ecossistema atual, gargalos de conectividade, dependências ocultas e riscos operacionais.',
        },
        {
          title: '2. Arquitetura Alvo & Blueprint de Referência',
          subtitle: 'Projetado para escala e resiliência',
          description: 'Criação de diagramas técnicos C4, topologias de roteamento (BGP, OSPF, SD-WAN), matriz de conectividade e blueprint multicloud.',
        },
        {
          title: '3. Roadmap de Transição & Migração Segura',
          subtitle: 'Mitigação de riscos com zero downtime',
          description: 'Planejamento de migração faseada com janelas controladas, automação com Infraestrutura como Código (Terraform) e testes de estresse.',
        },
        {
          title: '4. Governança de Confiabilidade & Observabilidade',
          subtitle: 'Observabilidade contínua e padrões SRE',
          description: 'Definição de métricas de telemetria, runbooks operacionais, alertas preventivos e políticas de resiliência para seu time.',
        },
      ],
      techsTitle: 'Ecossistemas & Padrões Arquiteturais',
      techsSubtitle: 'Profundo domínio nos principais provedores de nuvem e hardware de rede corporativo.',
      techs: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Cisco', 'Juniper', 'Arista Networks', 'Fortinet', 'SD-WAN', 'BGP / OSPF', 'Terraform', 'Kubernetes', 'Microservices & Event-Driven'],
      deliverablesTitle: 'O que sua empresa recebe',
      deliverablesSubtitle: 'Documentação arquitetural rigorosa com foco em longevidade e autonomia do seu time.',
      deliverables: [
        {
          title: 'Blueprint Arquitetural Completo',
          description: 'Diagramas de arquitetura detalhados em alta resolução, especificações técnicas de sizing e matrizes de conectividade.',
        },
        {
          title: 'Análise de SPOF & Plano de Resiliência',
          description: 'Identificação formal de todos os pontos únicos de falha e roteiro de mitigação com garantias de alta disponibilidade.',
        },
        {
          title: 'Infraestrutura como Código (IaC Blueprint)',
          description: 'Repositórios e templates versionados de Terraform/Ansible para automação, reprodutibilidade e conformidade.',
        },
        {
          title: 'Plano de Continuidade & Disaster Recovery (DRP)',
          description: 'Procedimentos claros de failover, backups automatizados e acordos de nível de serviço de recuperação (RTO/RPO).',
        },
      ],
      ctaTitle: 'Precisa validar ou redesenhar a arquitetura da sua empresa?',
      ctaSubtitle: 'Agende uma sessão diagnóstica de 30 minutos com nossos arquitetos de tecnologia.',
      ctaButtonText: 'Agendar Sessão Consultiva',
      metaTitle: 'Consultoria de Arquitetura de Sistemas & Nuvem | GS Edge',
      metaDescription: 'Design de arquitetura de alta disponibilidade, redes corporativas resilientes, multicloud e estratégias de escalabilidade pela GS Edge.',
    },
    {
      slug: 'auditoria-modernizacao-sistemas-legados',
      iconName: 'audit',
      title: 'Auditoria Técnica, Modernização & Governança',
      badge: 'Diagnóstico, FinOps & Segurança',
      tagline: 'Avaliamos a saúde dos seus sistemas, reduzimos custos de nuvem e traçamos o plano de modernização do seu legado.',
      summary: 'Auditorias aprofundadas de dívida técnica, segurança perimetral, otimização de custos de nuvem (FinOps) e estratégias de modernização de sistemas legados sem disrupção do negócio.',
      description: 'Sistemas legados e infraestruturas infladas drenam o orçamento e retardam o crescimento da sua empresa. A consultoria da GS Edge realiza diagnósticos técnicos imparciais para identificar vulnerabilidades de segurança, gargalos de performance e gastos excessivos com nuvem. Desenvolvemos estratégias pragmáticas de modernização (re-platform, refactor, API facades) para desbloquear a inovação sem paralisar sua operação.',
      targetAudience: 'Empresas com sistemas consolidados ou legados, lideranças de TI que buscam cortar custos de nuvem ou organizações que precisam de auditoria técnica pré-M&A/investimento.',
      highlights: [
        'Auditoria independente de arquitetura, segurança perimetral e dívida técnica',
        'Estratégia de modernização de sistemas legados via Strangler Pattern e APIs modernas',
        'Redução comprovada de custos de infraestrutura em nuvem através de metodologia FinOps',
        'Due diligence técnica e análise de conformidade de sistemas para fusões e aquisições',
      ],
      pillarsTitle: 'Etapas da Nossa Auditoria e Consultoria de Modernização',
      pillarsSubtitle: 'Um método analítico e fundamentado em dados para decisões de engenharia assertivas.',
      pillars: [
        {
          title: '1. Auditoria de Dívida Técnica & Riscos',
          subtitle: 'Mapeamento de vulnerabilidades e gargalos',
          description: 'Varredura profunda de componentes obsoletos, gargalos de performance, acoplamentos críticos e vulnerabilidades de segurança.',
        },
        {
          title: '2. Análise FinOps & Eficiência de Custos',
          subtitle: 'Eliminação de desperdício em nuvem',
          description: 'Mapeamento minucioso de custos de nuvem, instâncias superdimensionadas, tráfego ineficiente e planos de contratação otimizados.',
        },
        {
          title: '3. Arquitetura de Transição & Desacoplamento',
          subtitle: 'Evolução sem risco à operação atual',
          description: 'Desenho de fachadas de API, barramentos de mensageria e estratégias de desacoplamento gradual de ERPs e bases legadas.',
        },
        {
          title: '4. Roadmap Executivo de Modernização',
          subtitle: 'Decisões com base em ROI e esforço',
          description: 'Cronograma executivo priorizado por valor de negócio versus esforço de engenharia, com KPIs claros de retorno sobre investimento.',
        },
      ],
      techsTitle: 'Ferramentas, Frameworks & Metodologias de Auditoria',
      techsSubtitle: 'Práticas consolidadas de engenharia de confiabilidade (SRE) e governança em nuvem.',
      techs: ['FinOps Foundation', 'Well-Architected Framework', 'Zero Trust Architecture', 'SonarQube & SAST/DAST', 'Grafana / Prometheus', 'Datadog', 'N8N & Integration APIs', 'PostgreSQL / Legacy DBs', 'Kafka / RabbitMQ', 'Docker / Containerization'],
      deliverablesTitle: 'Entregáveis da Consultoria',
      deliverablesSubtitle: 'Relatórios executivos e técnicos com plano de ação imediato.',
      deliverables: [
        {
          title: 'Relatório Completo de Auditoria Técnica',
          description: 'Mapeamento executivo com matriz de riscos, vulnerabilidades de segurança identificadas e inventário de dívida técnica.',
        },
        {
          title: 'Plano de Otimização de Custos (FinOps)',
          description: 'Recomendações práticas e estimativa imediata de economia mensal em infraestrutura sem abrir mão de performance.',
        },
        {
          title: 'Roadmap Estratégico de Modernização',
          description: 'Guia de migração passo a passo para modernizar ou substituir módulos legados com segurança e continuidade do negócio.',
        },
        {
          title: 'Matriz de Decisão Arquitetural (ADRs)',
          description: 'Documentação formal com os prós, contras e justificativas técnicas e financeiras para cada escolha de tecnologia proposta.',
        },
      ],
      ctaTitle: 'Descubra o real estado da sua infraestrutura e sistemas',
      ctaSubtitle: 'Converse com nossos consultores e receba uma avaliação preliminar de gargalos e oportunidades de modernização.',
      ctaButtonText: 'Solicitar Auditoria Técnica',
      metaTitle: 'Auditoria Técnica, Modernização & FinOps | GS Edge',
      metaDescription: 'Auditoria de dívida técnica, redução de custos em nuvem com FinOps e estratégias de modernização de sistemas legados pela GS Edge.',
    },
    {
      slug: 'tech-leadership-capacitacao-ti',
      iconName: 'training',
      title: 'Tech Leadership Advisory & Capacitação',
      badge: 'Liderança & Enablement',
      tagline: 'Aconselhamento técnico sênior para tomadores de decisão e workshops especializados para elevar times de engenharia.',
      summary: 'Atuação como Conselheiro de Tecnologia / Fractional CTO, mentoria para arquitetos e líderes técnicos, e programas customizados de capacitação corporativa em arquitetura, nuvem e redes.',
      description: 'Grandes decisões de tecnologia definem a velocidade e o custo de uma organização pelos próximos anos. Atuamos como conselheiros técnicos de confiança (Fractional CTO / Advisory Board) para founders, CEOs e diretores de TI, auxiliando na escolha de tecnologias, contratação de lideranças e governança técnica. Além disso, capacitamos suas equipes através de workshops in-company de alto nível técnico.',
      targetAudience: 'CEOs, CTOs e gestores de tecnologia que buscam uma segunda opinião sênior em decisões de alto impacto ou precisam acelerar a maturidade técnica do seu time.',
      highlights: [
        'Aconselhamento executivo para decisões de arquitetura, contratações e fornecedores',
        'Mentoria individualizada para Tech Leads e Arquitetos de Software',
        'Workshops in-company práticos em redes avançadas, nuvem e microsserviços',
        'Alinhamento estratégico entre a visão de negócios e a capacidade real de execução técnica',
      ],
      pillarsTitle: 'Formatos de Advisory e Capacitação',
      pillarsSubtitle: 'Modelos consultivos adaptados à rotina e aos objetivos estratégicos da sua empresa.',
      pillars: [
        {
          title: '1. Fractional CTO & Strategic Advisory',
          subtitle: 'Apoio executivo para alta gestão',
          description: 'Encontros regulares com a diretoria para validação de roadmap técnico, governança de arquitetura e avaliação de riscos.',
        },
        {
          title: '2. Mentoria Técnica para Tech Leads',
          subtitle: 'Aceleração de maturidade técnica',
          description: 'Acompanhamento contínuo de líderes técnicos para formação de pensamento arquitetural e resolução de impasses complexos.',
        },
        {
          title: '3. Workshops Corporativos In-Company',
          subtitle: 'Imersões práticas e focadas',
          description: 'Treinamentos intensivos de 1 a 3 dias dedicados a tópicos críticos (Migração Cloud, SD-WAN, Observabilidade e Microsserviços com Go).',
        },
        {
          title: '4. Assessoria em Seleção & Avaliação Técnica',
          subtitle: 'Contratações técnicas assertivas',
          description: 'Apoio estratégico na definição de perfis técnicos seniores e avaliação de competências de engenharia em processos de contratação.',
        },
      ],
      techsTitle: 'Áreas de Domínio & Advisory',
      techsSubtitle: 'Cobertura abrangente em liderança de engenharia, arquitetura de sistemas e infraestrutura.',
      techs: ['Estratégia de Tecnologia', 'Arquitetura de Nuvem (AWS/GCP)', 'Redes Corporativas & SD-WAN', 'Governança & Segurança', 'Engenharia de Confiabilidade (SRE)', 'Automação & DevOps', 'Go, Python & Next.js', 'Liderança de Times de Engenharia'],
      deliverablesTitle: 'O que sua liderança e equipe recebem',
      deliverablesSubtitle: 'Orientação contínua e capacitação prática de alto retorno sobre investimento.',
      deliverables: [
        {
          title: 'Relatórios de Recomendação Estratégica',
          description: 'Pareceres técnicos formais e independentes para orientar compras, licenças e investimentos em tecnologia.',
        },
        {
          title: 'Sessões de Mentoria com Atas & Action Items',
          description: 'Acompanhamento direto e documentado dos desafios reais enfrentados pelos seus líderes técnicos.',
        },
        {
          title: 'Playbooks e Blueprints de Engenharia',
          description: 'Padrões de arquitetura, guias de boas práticas e checklists operacionais adaptados à sua realidade corporativa.',
        },
        {
          title: 'Laboratórios Práticos & Material Didático',
          description: 'Acesso a ambientes isolados na nuvem e documentação de referência para os treinamentos in-company.',
        },
      ],
      ctaTitle: 'Precisa de liderança técnica sênior para seu próximo desafio?',
      ctaSubtitle: 'Converse com nossos consultores para desenhar o modelo de advisory ou capacitação ideal para sua organização.',
      ctaButtonText: 'Agendar Conversa de Advisory',
      metaTitle: 'Tech Leadership Advisory & Capacitação Corporativa | GS Edge',
      metaDescription: 'Consultoria de liderança técnica, Fractional CTO, mentoria para arquitetos e workshops corporativos de TI pela GS Edge.',
    },
  ],
  en: [
    {
      slug: 'consultoria-arquitetura-sistemas-nuvem',
      iconName: 'network',
      title: 'Systems & Cloud Architecture Consulting',
      badge: 'Architecture & Resilience',
      tagline: 'We architect fault-tolerant, scalable, and high-availability digital infrastructures and enterprise networks.',
      summary: 'Specialized advisory in distributed systems design, enterprise network topologies (SD-WAN/BGP), multi-cloud strategies, and extreme scalability blueprints.',
      description: 'At GS Edge, we turn complex infrastructure into predictable, scalable, and ultra-secure digital foundations. We support CTOs and engineering leaders in designing and validating enterprise network topologies (SD-WAN, BGP, MPLS, high-redundancy VPNs) and distributed cloud systems (AWS, GCP, Azure), eliminating single points of failure and maximizing operational efficiency.',
      targetAudience: 'CTOs, Heads of Engineering, and enterprises requiring 99.99% availability, ultra-low latency, and architectures engineered for scale.',
      highlights: [
        'Elimination of single points of failure (SPOF) across networks, clusters, and critical services',
        'Hybrid and multi-cloud architectures optimized for high throughput and low latency',
        'Vendor-neutral recommendations and right-sizing of cloud infrastructure instances',
        'Advanced observability frameworks, predictive telemetry, and strict SLO/SLA governance',
      ],
      pillarsTitle: 'Our Architectural Consulting Framework',
      pillarsSubtitle: 'A structured 4-phase advisory methodology delivering executive alignment and operational excellence.',
      pillars: [
        {
          title: '1. Diagnostic & Topology Mapping',
          subtitle: 'Complete ecosystem visibility',
          description: 'In-depth analysis of existing infrastructure, pinpointing connectivity bottlenecks, hidden dependencies, and operational risks.',
        },
        {
          title: '2. Target Architecture & Reference Blueprint',
          subtitle: 'Engineered for scale and fault tolerance',
          description: 'Creation of technical C4 diagrams, routing topologies (BGP, OSPF, SD-WAN), connectivity matrices, and cloud blueprints.',
        },
        {
          title: '3. Phased Transition & Migration Roadmap',
          subtitle: 'Zero downtime during transitions',
          description: 'Controlled phased rollouts, Infrastructure as Code automation (Terraform, Ansible), and end-to-end stress testing.',
        },
        {
          title: '4. Reliability Governance & Observability',
          subtitle: 'Continuous observability and SRE practices',
          description: 'Telemetry dashboards, predictive alerting, disaster runbooks, and comprehensive architectural documentation.',
        },
      ],
      techsTitle: 'Ecosystems & Architectural Standards',
      techsSubtitle: 'Deep mastery across leading cloud hyperscalers, enterprise networking vendors, and distributed patterns.',
      techs: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Cisco', 'Juniper', 'Arista Networks', 'Fortinet', 'SD-WAN', 'BGP / OSPF', 'Terraform', 'Kubernetes', 'Microservices & Event-Driven'],
      deliverablesTitle: 'What Your Organization Receives',
      deliverablesSubtitle: 'Tangible engineering assets and rigorous technical documentation.',
      deliverables: [
        {
          title: 'Comprehensive Architecture Blueprint',
          description: 'High-definition architecture diagrams, compute sizing specs, and connectivity matrices.',
        },
        {
          title: 'SPOF Analysis & Resilience Strategy',
          description: 'Formal diagnostic identifying all single points of failure with prioritized mitigation roadmaps.',
        },
        {
          title: 'Infrastructure as Code (IaC Blueprint)',
          description: 'Versioned Terraform and Ansible templates for automated provisioning, reproducibility, and compliance.',
        },
        {
          title: 'Business Continuity & Disaster Recovery Plan',
          description: 'Actionable failover runbooks, automated backup policies, and strict recovery targets (RTO/RPO).',
        },
      ],
      ctaTitle: 'Need to validate or redesign your enterprise architecture?',
      ctaSubtitle: 'Schedule a free 30-minute technical diagnostic with our principal technology architects.',
      ctaButtonText: 'Schedule Advisory Session',
      metaTitle: 'Systems & Cloud Architecture Consulting | GS Edge',
      metaDescription: 'High-availability architecture design, enterprise network topologies, multi-cloud resilience, and scalability strategies by GS Edge.',
    },
    {
      slug: 'auditoria-modernizacao-sistemas-legados',
      iconName: 'audit',
      title: 'Technical Audits, Modernization & Governance',
      badge: 'Diagnostics, FinOps & Security',
      tagline: 'We evaluate system health, optimize cloud expenditure, and engineer migration strategies for legacy platforms.',
      summary: 'Deep-dive audits into technical debt, perimeter security, cloud cost optimization (FinOps), and risk-free modernization strategies for legacy enterprise systems.',
      description: 'Legacy platforms and bloated cloud setups drain budgets and hinder agility. GS Edge provides impartial technical diagnostics to pinpoint security vulnerabilities, performance bottlenecks, and runaway cloud costs. We formulate pragmatic modernization strategies (re-platforming, refactoring, API facades) to unlock innovation without disrupting ongoing business operations.',
      targetAudience: 'Enterprises with mission-critical legacy systems, IT leaders looking to optimize cloud spending, and organizations preparing for M&A or funding technical due diligence.',
      highlights: [
        'Independent code, architecture, perimeter security, and technical debt audits',
        'Pragmatic legacy modernization strategies utilizing the Strangler Pattern and modern APIs',
        'Proven cloud cost reduction via FinOps principles without sacrificing performance',
        'Technical due diligence and architectural compliance assessments for mergers and acquisitions',
      ],
      pillarsTitle: 'Our Audit & Modernization Methodology',
      pillarsSubtitle: 'Data-driven insights guiding high-conviction engineering decisions.',
      pillars: [
        {
          title: '1. Technical Debt & Risk Assessment',
          subtitle: 'Vulnerability and bottleneck identification',
          description: 'Deep audit of deprecated dependencies, architectural bottlenecks, tight couplings, and security risks.',
        },
        {
          title: '2. FinOps & Cloud Cost Optimization',
          subtitle: 'Eliminating cloud waste',
          description: 'Detailed analysis of billing telemetry, oversized instances, inefficient traffic routes, and reserved commitment planning.',
        },
        {
          title: '3. Transition Architecture & Decoupling',
          subtitle: 'Risk-free evolution of core workflows',
          description: 'Designing API gateways, messaging buses, and gradual decoupling patterns for legacy ERPs and relational stores.',
        },
        {
          title: '4. Executive Modernization Roadmap',
          subtitle: 'Prioritization by ROI and business value',
          description: 'Prioritized transition milestones balancing business value against engineering effort, complete with clear ROI metrics.',
        },
      ],
      techsTitle: 'Audit Tooling, Frameworks & Standards',
      techsSubtitle: 'Established industry practices for Site Reliability Engineering (SRE) and cloud governance.',
      techs: ['FinOps Foundation', 'Well-Architected Framework', 'Zero Trust Architecture', 'SonarQube & SAST/DAST', 'Grafana / Prometheus', 'Datadog', 'N8N & Integration APIs', 'PostgreSQL / Legacy DBs', 'Kafka / RabbitMQ', 'Docker / Containerization'],
      deliverablesTitle: 'What Your Organization Receives',
      deliverablesSubtitle: 'Executive-level insights paired with actionable engineering steps.',
      deliverables: [
        {
          title: 'Comprehensive Technical Audit Report',
          description: 'Executive risk matrix, security posture findings, and detailed technical debt inventory.',
        },
        {
          title: 'Cloud Cost Optimization (FinOps) Plan',
          description: 'Immediate actionable recommendations with projected monthly infrastructure savings.',
        },
        {
          title: 'Strategic Modernization Roadmap',
          description: 'Step-by-step phased migration guide ensuring business continuity throughout legacy modernization.',
        },
        {
          title: 'Architectural Decision Records (ADRs)',
          description: 'Formal documentation detailing trade-offs, rationale, and business justifications for each proposed technology selection.',
        },
      ],
      ctaTitle: 'Discover the true health and efficiency of your systems',
      ctaSubtitle: 'Speak with our senior consultants to receive a preliminary assessment of bottlenecks and modernization paths.',
      ctaButtonText: 'Request Technical Audit',
      metaTitle: 'Technical Audits, Modernization & FinOps | GS Edge',
      metaDescription: 'Technical debt audits, cloud cost optimization with FinOps, and pragmatic legacy modernization strategies by GS Edge.',
    },
    {
      slug: 'tech-leadership-capacitacao-ti',
      iconName: 'training',
      title: 'Tech Leadership Advisory & Enablement',
      badge: 'Leadership & Enablement',
      tagline: 'Senior technical advisory for decision-makers and high-impact corporate workshops to upskill engineering teams.',
      summary: 'Fractional CTO advisory, mentorship for tech leads and architects, and specialized corporate enablement programs in cloud architecture, networking, and engineering practices.',
      description: 'Critical technology decisions shape an organization’s agility and cost trajectory for years to come. We serve as trusted technical advisors (Fractional CTO / Advisory Board) for founders, CEOs, and IT Directors—guiding technology selection, vendor evaluations, and engineering governance. Additionally, we upskill your internal teams through practical, high-level corporate workshops.',
      targetAudience: 'CEOs, CTOs, and engineering leaders seeking an experienced second opinion on high-stakes technical decisions or looking to accelerate team capability.',
      highlights: [
        'Executive advisory on architectural choices, major vendor procurement, and technical strategy',
        'Targeted 1-on-1 and small-group mentorship for Tech Leads and Software Architects',
        'In-company hands-on workshops in advanced networking, cloud platforms, and microservices',
        'Bridging the gap between executive business goals and engineering execution reality',
      ],
      pillarsTitle: 'Advisory & Enablement Delivery Formats',
      pillarsSubtitle: 'Tailored consulting models aligned with your company’s strategic timeline.',
      pillars: [
        {
          title: '1. Fractional CTO & Strategic Advisory',
          subtitle: 'Executive guidance for leadership',
          description: 'Regular strategy sessions with executives to validate technical roadmaps, architecture governance, and risk mitigation.',
        },
        {
          title: '2. Tech Lead & Architect Mentorship',
          subtitle: 'Engineering maturity acceleration',
          description: 'Continuous advisory sessions helping senior engineers develop architectural foresight and resolve complex trade-offs.',
        },
        {
          title: '3. In-Company Corporate Workshops',
          subtitle: 'Focused hands-on immersions',
          description: 'Intensive 1-to-3 day deep dives covering critical domains (Cloud Migration, Enterprise SD-WAN, Observability, and Go Microservices).',
        },
        {
          title: '4. Technical Hiring & Candidate Evaluation',
          subtitle: 'Uncompromising engineering talent',
          description: 'Advisory support in defining technical role requirements, interviewing senior candidates, and evaluating technical caliber.',
        },
      ],
      techsTitle: 'Domains & Core Competencies',
      techsSubtitle: 'Comprehensive coverage across engineering leadership, system architecture, and modern infrastructure.',
      techs: ['Technology Strategy', 'Cloud Architecture (AWS/GCP)', 'Enterprise Networks & SD-WAN', 'Governance & Security', 'Reliability Engineering (SRE)', 'Automation & DevOps', 'Go, Python & Next.js', 'Engineering Team Leadership'],
      deliverablesTitle: 'What Your Team Receives',
      deliverablesSubtitle: 'Ongoing strategic counsel and high-ROI technical enablement.',
      deliverables: [
        {
          title: 'Strategic Advisory Reports & Position Papers',
          description: 'Formal, vendor-neutral technical reviews to guide high-capital technology purchases and investments.',
        },
        {
          title: 'Mentorship Logs & Action Items',
          description: 'Documented advisory sessions focusing on live architectural challenges faced by your engineering leads.',
        },
        {
          title: 'Engineering Playbooks & Blueprints',
          description: 'Custom architecture standards, operational checklists, and design blueprints tailored to your tech stack.',
        },
        {
          title: 'Cloud Lab Access & Courseware',
          description: 'Sandboxed cloud environments and curated technical documentation for in-company training programs.',
        },
      ],
      ctaTitle: 'Ready for senior technical leadership on your next initiative?',
      ctaSubtitle: 'Connect with our consultants to design the ideal advisory or enablement engagement for your organization.',
      ctaButtonText: 'Book Advisory Consultation',
      metaTitle: 'Tech Leadership Advisory & Corporate Enablement | GS Edge',
      metaDescription: 'Technical advisory, Fractional CTO, architecture mentorship, and enterprise IT enablement workshops by GS Edge.',
    },
  ],
};

export function getAllServices(lang: 'pt' | 'en' = 'pt'): Service[] {
  return servicesData[lang] || servicesData.pt;
}

export function getServiceBySlug(slug: string, lang: 'pt' | 'en' = 'pt'): Service | null {
  const normalizedSlug = slugAliases[slug.toLowerCase()] || slug.toLowerCase();
  const services = getAllServices(lang);
  return services.find((s) => s.slug.toLowerCase() === normalizedSlug) || null;
}

export function getServiceSlugs(): string[] {
  const slugs = servicesData.pt.map((s) => s.slug);
  // Also include aliases to ensure static generation covers old URLs
  return Array.from(new Set([...slugs, ...Object.keys(slugAliases)]));
}
