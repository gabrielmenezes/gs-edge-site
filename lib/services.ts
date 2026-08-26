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
  iconName: 'network' | 'code' | 'training';
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

export const servicesData: Record<'pt' | 'en', Service[]> = {
  pt: [
    {
      slug: 'consultoria-design-sistemas-infraestrutura',
      iconName: 'network',
      title: 'Consultoria para Design de Sistemas e Infraestrutura',
      badge: 'Arquitetura & Resiliência',
      tagline: 'Projetamos infraestruturas de rede e sistemas de missão crítica à prova de falhas.',
      summary: 'Design de arquitetura de alta disponibilidade, planejamento topológico de redes corporativas e data centers, estratégias multinuvem e auditorias avançadas de resiliência.',
      description: 'Na GS Edge, transformamos infraestruturas complexas em arquiteturas previsíveis, escaláveis e altamente seguras. Atuamos desde a concepção de topologias de redes corporativas (SD-WAN, BGP, MPLS, VPNs tolerantes a falhas) até a arquitetura de sistemas distribuídos na nuvem (AWS, GCP, Azure), eliminando pontos únicos de falha e otimizando custos operacionais.',
      targetAudience: 'Empresas em expansão, fintechs, varejistas com múltiplas filiais e provedores de serviços que exigem 99.99% de disponibilidade e segurança de nível corporativo.',
      highlights: [
        'Eliminação de pontos únicos de falha (SPOF) em redes e servidores',
        'Topologias híbridas e multinuvem com alta vazão e baixa latência',
        'Auditoria rigorosa de segurança perimetral, firewalls e controle de acessos',
        'Otimização de custos de infraestrutura em nuvem (FinOps)',
      ],
      pillarsTitle: 'Como Estruturamos sua Infraestrutura',
      pillarsSubtitle: 'Uma abordagem de engenharia em 4 fases para garantir estabilidade e previsibilidade absoluta.',
      pillars: [
        {
          title: '1. Diagnóstico & Mapeamento Topológico',
          subtitle: 'Visibilidade total do ecossistema',
          description: 'Análise profunda da infraestrutura atual, identificação de gargalos de rede, riscos de segurança e vulnerabilidades operacionais.',
        },
        {
          title: '2. Arquitetura de Referência & Design',
          subtitle: 'Projetado para escala e resiliência',
          description: 'Elaboração de diagramas técnicos, especificações de equipamentos, topologia de roteamento (BGP, OSPF, SD-WAN) e blueprint em nuvem.',
        },
        {
          title: '3. Implementação & Migração Segura',
          subtitle: 'Zero downtime para sua operação',
          description: 'Execução planejada com janelas controladas, automação de infraestrutura como código (Terraform, Ansible) e testes de estresse.',
        },
        {
          title: '4. Monitoramento & Governança',
          subtitle: 'Observabilidade 24/7 e evolução contínua',
          description: 'Configuração de telemetria avançada, alertas preditivos, métricas de SLA e documentação técnica completa para sua equipe.',
        },
      ],
      techsTitle: 'Ecossistema & Tecnologias de Infraestrutura',
      techsSubtitle: 'Domínio avançado nos principais players de hardware, roteamento e computação em nuvem do mercado.',
      techs: ['Cisco', 'Juniper', 'Arista Networks', 'Fortinet', 'Palo Alto', 'MikroTik', 'AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Terraform', 'Ansible', 'WireGuard', 'BGP / OSPF', 'SD-WAN'],
      deliverablesTitle: 'O que sua empresa recebe',
      deliverablesSubtitle: 'Entregáveis tangíveis e documentação técnica rigorosa.',
      deliverables: [
        {
          title: 'Blueprint Arquitetural Completo',
          description: 'Diagramas de rede em alta definição, especificações de hardware/instâncias e matriz de conectividade.',
        },
        {
          title: 'Relatório de Auditoria & Vulnerabilidades',
          description: 'Diagnóstico detalhado de riscos técnicos, conformidade e recomendações priorizadas por impacto.',
        },
        {
          title: 'Infraestrutura como Código (IaC)',
          description: 'Repositórios prontos e versionados com scripts Terraform/Ansible para automação e recuperação de desastres.',
        },
        {
          title: 'Plano de Continuidade & Disaster Recovery',
          description: 'Procedimentos claros de failover, backups automatizados e SLAs de recuperação (RTO/RPO).',
        },
      ],
      ctaTitle: 'Pronto para modernizar sua infraestrutura?',
      ctaSubtitle: 'Agende um diagnóstico técnico gratuito de 30 minutos com nossos engenheiros seniores.',
      ctaButtonText: 'Agendar Diagnóstico Técnico',
      metaTitle: 'Consultoria de Design de Sistemas e Infraestrutura | GS Edge',
      metaDescription: 'Design de arquitetura de alta disponibilidade, redes corporativas resilientes, SD-WAN e estratégias em nuvem pela GS Edge.',
    },
    {
      slug: 'desenvolvimento-software-sob-medida',
      iconName: 'code',
      title: 'Desenvolvimento de Software sob Medida',
      badge: 'Engenharia de Software',
      tagline: 'Sistemas web de alta performance e integração fluida com sistemas legados.',
      summary: 'Engenharia de plataformas web escaláveis, microsserviços modernos, APIs seguras e integração inteligente com ERPs, CRMs e bancos de dados legados.',
      description: 'Construímos softwares que impulsionam negócios reais. Combinamos arquiteturas modernas baseadas em Next.js, Golang, Python e Node.js com a capacidade técnica de conectar seus novos sistemas a softwares legados existentes. Eliminamos retrabalho manual, modernizamos fluxos e entregamos interfaces fluidas, responsivas e intuitivas.',
      targetAudience: 'Empresas que precisam de sistemas próprios para automatizar operações, substituir planilhas complexas ou construir novas fontes de receita digital.',
      highlights: [
        'Integração transparente com sistemas legados (ERPs, mainframes, bases relacionais antigas)',
        'Aplicações web ultra rápidas com Next.js, React e Tailwind CSS',
        'APIs REST e gRPC com alta vazão, segurança e documentação interativa',
        'Automação inteligente de fluxos operacionais e pipelines de dados com N8N e filas',
      ],
      pillarsTitle: 'Nosso Ciclo de Engenharia de Software',
      pillarsSubtitle: 'Metodologia ágil com entregas contínuas, testes automatizados e foco no valor de negócio.',
      pillars: [
        {
          title: '1. Discovery & Engenharia de Requisitos',
          subtitle: 'Entendimento profundo do seu negócio',
          description: 'Mapeamos suas regras de negócio, fluxos de trabalho e integrações necessárias para desenhar a solução exata.',
        },
        {
          title: '2. Arquitetura de Software & Design UI/UX',
          subtitle: 'Fundação sólida e usabilidade impecável',
          description: 'Definição de modelo de dados, contratos de API, padrões de segurança e interfaces limpas pensadas para a rotina do usuário.',
        },
        {
          title: '3. Desenvolvimento & Integração Contínua',
          subtitle: 'Código limpo, seguro e performático',
          description: 'Sprints quinzenais com demonstrações reais, cobertura de testes automatizados e CI/CD desde o primeiro dia.',
        },
        {
          title: '4. Homologação, Deploy & Suporte',
          subtitle: 'Transição suave para produção',
          description: 'Testes de carga, validação com usuários-chave, deploy automatizado na nuvem e acompanhamento pós-lançamento.',
        },
      ],
      techsTitle: 'Stack Tecnológico de Desenvolvimento',
      techsSubtitle: 'Tecnologias modernas, tipadas e consolidadas na indústria para máxima performance e longevidade.',
      techs: ['Next.js / React', 'TypeScript', 'Golang', 'Python / FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker & Kubernetes', 'N8N Automation', 'GraphQL / REST / gRPC', 'Tailwind CSS', 'Kafka / RabbitMQ'],
      deliverablesTitle: 'O que entregamos no seu projeto',
      deliverablesSubtitle: 'Propriedade intelectual 100% da sua empresa com padrões de qualidade internacional.',
      deliverables: [
        {
          title: 'Código-Fonte 100% Proprietário',
          description: 'Repositório Git organizado, limpo, modular e sem dependência de plataformas proprietárias travadas.',
        },
        {
          title: 'Documentação Técnica & Swagger/OpenAPI',
          description: 'Documentação viva de todas as rotas de API, arquitetura de dados e guias de instalação/deploy.',
        },
        {
          title: 'Pipeline de CI/CD Automatizado',
          description: 'Automação de testes e deploys para ambientes de homologação e produção com segurança.',
        },
        {
          title: 'Treinamento de Passagem de Bastão',
          description: 'Sessões práticas para capacitar seu time no gerenciamento e operação da nova plataforma.',
        },
      ],
      ctaTitle: 'Tem um projeto de software em mente?',
      ctaSubtitle: 'Vamos conversar sobre os requisitos e estruturar uma proposta técnica sob medida para você.',
      ctaButtonText: 'Conversar com Especialistas de Software',
      metaTitle: 'Desenvolvimento de Software sob Medida | GS Edge',
      metaDescription: 'Desenvolvimento de plataformas web, integração com sistemas legados, APIs de alta performance e microsserviços sob medida pela GS Edge.',
    },
    {
      slug: 'treinamento-tecnologias-ti',
      iconName: 'training',
      title: 'Treinamento para Tecnologias de TI',
      badge: 'Capacitação & Enablement',
      tagline: 'Treinamentos práticos e imersões técnicas para elevar o nível da sua equipe de engenharia.',
      summary: 'Workshops corporativos hands-on e programas de capacitação técnica em arquitetura de redes, computação em nuvem, automação com código e boas práticas de DevOps.',
      description: 'Equipes bem preparadas reduzem incidentes em produção, entregam projetos mais rápido e sustentam a inovação da empresa. Nossos treinamentos são ministrados por engenheiros seniores com vivência real em infraestruturas críticas e desenvolvimento de software corporativo. Focamos em laboratórios práticos, estudos de caso e desafios reais do mercado.',
      targetAudience: 'Líderes de TI, CTOs e gestores de engenharia que desejam atualizar as competências de suas equipes em redes modernas, nuvem e desenvolvimento.',
      highlights: [
        'Laboratórios 100% práticos simulando cenários corporativos reais',
        'Instrutores com certificações de alto nível e experiência de campo comprovada',
        'Conteúdo customizável de acordo com a stack e os desafios específicos da sua empresa',
        'Material didático exclusivo, gravações e suporte a dúvidas pós-treinamento',
      ],
      pillarsTitle: 'Formatos de Capacitação',
      pillarsSubtitle: 'Modelos flexíveis adaptados à rotina e aos objetivos estratégicos do seu time.',
      pillars: [
        {
          title: '1. Workshops Corporativos In-Company',
          subtitle: 'Imersões intensivas e focadas',
          description: 'Treinamentos de 1 a 3 dias dedicados a um tópico crítico específico (ex: Migração Cloud, SD-WAN ou Microsserviços com Go).',
        },
        {
          title: '2. Programas de Formação & Upskilling',
          subtitle: 'Evolução contínua e estruturada',
          description: 'Trilhas modulares de semanas com aulas teóricas e práticas para transição de carreira ou adoção de novas tecnologias.',
        },
        {
          title: '3. Labs & Hackathons Práticos',
          subtitle: 'Aprender na prática sob pressão real',
          description: 'Desafios controlados de resolução de falhas de rede, incidentes de segurança e otimização de performance.',
        },
        {
          title: '4. Mentoria Técnica para Tech Leads',
          subtitle: 'Acompanhamento sênior direto',
          description: 'Sessões periódicas de mentoria para arquitetos de software e líderes técnicos na tomada de decisões complexas.',
        },
      ],
      techsTitle: 'Áreas & Tecnologias de Domínio',
      techsSubtitle: 'Treinamentos abrangentes em todas as camadas da computação corporativa moderna.',
      techs: ['Arquitetura de Redes (BGP, OSPF, VPNs)', 'Cloud AWS & GCP', 'DevOps & CI/CD', 'Containers & Kubernetes', 'Automação com Python e Ansible', 'Go para Microsserviços', 'Next.js & Frontend Moderno', 'Segurança Defensiva'],
      deliverablesTitle: 'O que sua equipe recebe',
      deliverablesSubtitle: 'Uma experiência completa de aprendizado com impacto imediato no dia a dia.',
      deliverables: [
        {
          title: 'Acesso a Ambientes de Laboratório em Nuvem',
          description: 'Ambientes dedicados e isolados para cada aluno praticar comandos e configurações reais sem risco à produção.',
        },
        {
          title: 'Apostilas, Códigos e Blueprints',
          description: 'Todo o material de apoio, repositórios de exemplo e guias de referência para consulta contínua.',
        },
        {
          title: 'Certificados de Conclusão Reconhecidos',
          description: 'Certificados individuais com carga horária e descrição das competências técnicas desenvolvidas.',
        },
        {
          title: 'Sessão de Q&A e Follow-up Pós-Curso',
          description: 'Encontro exclusivo após 30 dias para tirar dúvidas sobre a aplicação prática do conteúdo no trabalho real.',
        },
      ],
      ctaTitle: 'Capacite seu time com quem vive a engenharia na prática',
      ctaSubtitle: 'Fale com nossa equipe pedagógica para desenhar um programa sob medida para sua empresa.',
      ctaButtonText: 'Solicitar Proposta de Treinamento',
      metaTitle: 'Treinamentos para Tecnologias de TI | GS Edge',
      metaDescription: 'Treinamentos técnicos corporativos e workshops práticos em redes, computação em nuvem, automação e desenvolvimento de software pela GS Edge.',
    },
  ],
  en: [
    {
      slug: 'consultoria-design-sistemas-infraestrutura',
      iconName: 'network',
      title: 'Consulting for System and Infrastructure Design',
      badge: 'Architecture & Resilience',
      tagline: 'We architect fault-tolerant enterprise networks and mission-critical systems.',
      summary: 'High-availability architecture design, enterprise network topology planning, multi-cloud strategies, and comprehensive infrastructure resilience audits.',
      description: 'At GS Edge, we turn complex infrastructure into predictable, scalable, and ultra-secure digital foundations. From designing enterprise networks (SD-WAN, BGP, MPLS, high-redundancy VPNs) to resilient cloud architectures (AWS, GCP, Azure), we eliminate single points of failure and optimize operational spending.',
      targetAudience: 'Growing enterprises, fintechs, multi-branch retailers, and service providers requiring 99.99% uptime and enterprise-grade security.',
      highlights: [
        'Elimination of single points of failure (SPOF) across networks and server clusters',
        'Hybrid and multi-cloud topologies optimized for high throughput and low latency',
        'Rigorous perimeter security auditing, firewalls, and zero-trust access controls',
        'Cloud infrastructure cost reduction and governance (FinOps)',
      ],
      pillarsTitle: 'How We Architect Your Infrastructure',
      pillarsSubtitle: 'A 4-phase engineering methodology delivering absolute stability and predictability.',
      pillars: [
        {
          title: '1. Diagnostic & Topology Mapping',
          subtitle: 'Complete ecosystem visibility',
          description: 'In-depth analysis of existing infrastructure, pinpointing network bottlenecks, security risks, and operational vulnerabilities.',
        },
        {
          title: '2. Reference Architecture & Blueprint',
          subtitle: 'Engineered for scale and fault tolerance',
          description: 'Creation of technical diagrams, hardware specifications, routing topologies (BGP, OSPF, SD-WAN), and cloud infrastructure blueprints.',
        },
        {
          title: '3. Safe Implementation & Migration',
          subtitle: 'Zero downtime during transitions',
          description: 'Controlled phased rollouts, Infrastructure as Code automation (Terraform, Ansible), and end-to-end stress testing.',
        },
        {
          title: '4. Telemetry & Continuous Governance',
          subtitle: '24/7 observability and continuous optimization',
          description: 'Advanced metrics, predictive alerting, SLA monitoring, and comprehensive technical runbooks for your internal staff.',
        },
      ],
      techsTitle: 'Infrastructure Ecosystem & Technologies',
      techsSubtitle: 'Advanced mastery across leading networking hardware vendors and cloud hyperscalers.',
      techs: ['Cisco', 'Juniper', 'Arista Networks', 'Fortinet', 'Palo Alto', 'MikroTik', 'AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Terraform', 'Ansible', 'WireGuard', 'BGP / OSPF', 'SD-WAN'],
      deliverablesTitle: 'What Your Organization Receives',
      deliverablesSubtitle: 'Tangible engineering assets and rigorous technical documentation.',
      deliverables: [
        {
          title: 'Comprehensive Architecture Blueprint',
          description: 'High-definition network diagrams, compute/instance sizing specs, and connectivity matrices.',
        },
        {
          title: 'Audit & Vulnerability Assessment Report',
          description: 'Detailed diagnostic of technical risks, compliance status, and impact-prioritized recommendations.',
        },
        {
          title: 'Infrastructure as Code (IaC) Repositories',
          description: 'Versioned Terraform and Ansible codebases for seamless reproducibility and disaster recovery.',
        },
        {
          title: 'Business Continuity & Disaster Recovery Plan',
          description: 'Actionable failover procedures, automated backup policies, and strict recovery targets (RTO/RPO).',
        },
      ],
      ctaTitle: 'Ready to modernize your infrastructure?',
      ctaSubtitle: 'Schedule a free 30-minute technical diagnostic with our principal engineers.',
      ctaButtonText: 'Schedule Technical Diagnostic',
      metaTitle: 'System and Infrastructure Design Consulting | GS Edge',
      metaDescription: 'High-availability architecture design, enterprise network topologies, SD-WAN, and resilient cloud strategies by GS Edge.',
    },
    {
      slug: 'desenvolvimento-software-sob-medida',
      iconName: 'code',
      title: 'Custom Software Development & Legacy Integration',
      badge: 'Software Engineering',
      tagline: 'High-performance web platforms and seamless integration with legacy systems.',
      summary: 'Engineering scalable web platforms, modern microservices, secure APIs, and intelligent integration with legacy ERPs, CRMs, and databases.',
      description: 'We engineer bespoke software that powers real business growth. Combining modern tech stacks like Next.js, Golang, Python, and Node.js with deep engineering expertise to bridge new applications with legacy enterprise systems. We eliminate manual bottlenecks and deliver fast, responsive, and intuitive web solutions.',
      targetAudience: 'Companies requiring tailored software to automate workflows, replace cumbersome spreadsheets, or build new digital revenue streams.',
      highlights: [
        'Seamless integration with legacy systems (ERPs, mainframes, legacy SQL databases)',
        'Ultra-fast, responsive web applications built with Next.js, React, and Tailwind CSS',
        'High-throughput REST and gRPC APIs with robust security and automated documentation',
        'Intelligent workflow automation and data pipelines powered by N8N and message queues',
      ],
      pillarsTitle: 'Our Software Engineering Lifecycle',
      pillarsSubtitle: 'Agile execution with continuous delivery, automated testing, and clear business outcomes.',
      pillars: [
        {
          title: '1. Discovery & Requirements Engineering',
          subtitle: 'Deep business understanding',
          description: 'We analyze your business rules, operational workflows, and integration touchpoints to architect the exact solution.',
        },
        {
          title: '2. Software Architecture & UI/UX Design',
          subtitle: 'Solid foundations and intuitive usability',
          description: 'Designing data schemas, API contracts, security standards, and clean user interfaces tailored to daily team workflows.',
        },
        {
          title: '3. Development & Continuous Integration',
          subtitle: 'Clean, secure, and maintainable code',
          description: 'Two-week agile sprints with working demos, automated test suites, and automated CI/CD pipelines from day one.',
        },
        {
          title: '4. QA, Production Deployment & Support',
          subtitle: 'Smooth launch and ongoing stability',
          description: 'Stress testing, user acceptance testing, automated cloud deployment, and post-launch monitoring.',
        },
      ],
      techsTitle: 'Development Tech Stack',
      techsSubtitle: 'Modern, strictly-typed, industry-standard technologies for performance and long-term maintainability.',
      techs: ['Next.js / React', 'TypeScript', 'Golang', 'Python / FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker & Kubernetes', 'N8N Automation', 'GraphQL / REST / gRPC', 'Tailwind CSS', 'Kafka / RabbitMQ'],
      deliverablesTitle: 'What We Deliver for Your Project',
      deliverablesSubtitle: '100% client-owned intellectual property with enterprise engineering standards.',
      deliverables: [
        {
          title: '100% Client-Owned Source Code',
          description: 'Clean, modular Git repository free of vendor lock-in or restrictive proprietary frameworks.',
        },
        {
          title: 'Interactive API & System Documentation',
          description: 'Living documentation with OpenAPI/Swagger specifications, data models, and deployment runbooks.',
        },
        {
          title: 'Automated CI/CD Delivery Pipeline',
          description: 'Automated testing and multi-stage deployment workflows for staging and production environments.',
        },
        {
          title: 'Team Handover & Training Sessions',
          description: 'Hands-on enablement sessions for your internal developers and system administrators.',
        },
      ],
      ctaTitle: 'Have a software project in mind?',
      ctaSubtitle: 'Let us discuss your technical requirements and prepare a custom engineering proposal.',
      ctaButtonText: 'Speak with Software Engineers',
      metaTitle: 'Custom Software Development | GS Edge',
      metaDescription: 'Custom web platforms, legacy system integration, high-performance APIs, and bespoke microservices by GS Edge.',
    },
    {
      slug: 'treinamento-tecnologias-ti',
      iconName: 'training',
      title: 'Training for IT Technologies & Enablement',
      badge: 'Technical Enablement',
      tagline: 'Practical workshops and deep technical immersions to upskill your engineering teams.',
      summary: 'Hands-on corporate workshops and structured technical programs in network architecture, cloud computing, Infrastructure as Code, and DevOps best practices.',
      description: 'High-performing engineering teams reduce production outages, ship features faster, and sustain innovation. Our training programs are taught by senior practitioners with battle-tested experience in mission-critical environments. We emphasize hands-on cloud labs, real-world troubleshooting, and industry best practices.',
      targetAudience: 'CTOs, VP of Engineering, and IT Managers looking to upskill their staff in modern networking, cloud architectures, and software engineering.',
      highlights: [
        '100% hands-on cloud labs replicating realistic corporate production environments',
        'Senior instructors with elite industry certifications and proven field experience',
        'Customizable curricula tailored to your company’s specific tech stack and challenges',
        'Comprehensive learning materials, recorded sessions, and post-course mentorship',
      ],
      pillarsTitle: 'Enablement Formats',
      pillarsSubtitle: 'Flexible delivery models adapted to your engineering team schedule and goals.',
      pillars: [
        {
          title: '1. In-Company Corporate Workshops',
          subtitle: 'Intensive focused immersions',
          description: '1 to 3-day deep dives into high-impact subjects (e.g. Cloud Migration, Enterprise SD-WAN, or Microservices with Go).',
        },
        {
          title: '2. Structured Upskilling Programs',
          subtitle: 'Continuous phased learning',
          description: 'Multi-week tracks combining theoretical foundations with structured hands-on projects for tech adoption.',
        },
        {
          title: '3. Practical Labs & Troubleshooting Hackathons',
          subtitle: 'Learn by solving realistic failures',
          description: 'Controlled live-fire drills resolving simulated network outages, security incidents, and performance bottlenecks.',
        },
        {
          title: '4. Tech Lead & Architecture Mentorship',
          subtitle: 'Direct senior advisory',
          description: 'One-on-one and small group advisory sessions for software architects and team leads making high-stakes decisions.',
        },
      ],
      techsTitle: 'Core Skill Areas & Technologies',
      techsSubtitle: 'Comprehensive enablement covering all layers of modern enterprise infrastructure.',
      techs: ['Network Architecture (BGP, OSPF, VPNs)', 'AWS & Google Cloud', 'DevOps & CI/CD Pipelines', 'Containers & Kubernetes', 'Automation with Python & Ansible', 'Go for Backend Services', 'Next.js & Modern Frontend', 'Defensive Security'],
      deliverablesTitle: 'What Your Team Receives',
      deliverablesSubtitle: 'A complete educational journey delivering immediate impact on daily operations.',
      deliverables: [
        {
          title: 'Dedicated Cloud Lab Environments',
          description: 'Isolated virtual sandboxes for every participant to practice live configurations without risk to production.',
        },
        {
          title: 'Courseware, Code Repos & Reference Blueprints',
          description: 'Comprehensive documentation, starter templates, and cheat sheets for continuous reference.',
        },
        {
          title: 'Recognized Course Completion Certificates',
          description: 'Individual certificates detailing hours completed and technical competencies acquired.',
        },
        {
          title: '30-Day Follow-Up & Q&A Session',
          description: 'Dedicated follow-up session to resolve questions arising during real-world implementation.',
        },
      ],
      ctaTitle: 'Elevate your engineering team today',
      ctaSubtitle: 'Connect with our enablement team to build a tailored curriculum for your organization.',
      ctaButtonText: 'Request Training Proposal',
      metaTitle: 'Training for IT Technologies | GS Edge',
      metaDescription: 'Hands-on corporate IT training, cloud architecture workshops, network engineering, and developer enablement by GS Edge.',
    },
  ],
};

export function getAllServices(lang: 'pt' | 'en' = 'pt'): Service[] {
  return servicesData[lang] || servicesData.pt;
}

export function getServiceBySlug(slug: string, lang: 'pt' | 'en' = 'pt'): Service | null {
  const services = getAllServices(lang);
  return services.find((s) => s.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getServiceSlugs(): string[] {
  return servicesData.pt.map((s) => s.slug);
}
