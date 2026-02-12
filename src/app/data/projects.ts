export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  challenge: string;
  personalPhrase: string;
  process: { step: string; description: string }[];
  colors: string[];
  typography: string[];
  mockups: string[];
  layoutType?: 'grid' | 'carousel';
  deliverables?: string[];
  virtualSlideCount?: number;
  results?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Alegria Doce Ateliê",
    category: "Identidade Visual",
    year: "2024",
    image: "assets/alegria_doce_00_cover.png",
    description: "Uma jornada para traduzir o sabor de memórias afetivas em uma marca visual. O objetivo não era apenas vender doces, mas vender o sentimento de um abraço apertado e de uma tarde de domingo.",
    challenge:
      "O maior desafio foi equilibrar a doçura (que poderia ficar infantil) com o profissionalismo de um ateliê gourmet. A marca precisava ser fofa, mas confiável; caseira, mas premium.",
    personalPhrase:
      "Foi delicioso ver essa marca nascer. Cada cor foi escolhida como se eu estivesse selecionando os melhores ingredientes para uma receita especial.",
    process: [
      {
        step: "Imersão no Aroma",
        description: "Começamos investigando os valores da confeiteira: amor, paciência e ingredientes naturais. Entendi que a marca não vende açúcar, vende afeto."
      },
      {
        step: "Cores e Texturas",
        description: "A paleta nasceu da mistura de menta suave com tons de chocolate e creme. Buscamos cores que despertem o paladar sem serem agressivas."
      },
      {
        step: "Tipografia Manual",
        description: "Escolhi fontes que remetem à escrita manual e livros de receitas antigos, trazendo aquela sensação de 'feito pela vovó' mas com acabamento moderno."
      }
    ],
    deliverables: ["Logo Principal & Variações", "Paleta de Cores", "Tipografia Exclusiva", "Pattern & Elementos", "Design de Embalagens"],
    colors: ["#9fc8a6", "#7b4b33", "#fef3ee", "#628e6b"],
    typography: ["Poly", "ITC New Baskerville"],
    mockups: [
      "assets/alegria_doce_03.png",
      "assets/alegria_doce_02_mugs.png",
      "assets/alegria_doce_04.png",
      "assets/alegria_doce_01_main.png"
    ],
    layoutType: 'grid',
    results: "A marca Alegria Doce percebeu um aumento na percepção de valor dos produtos, permitindo um reajuste de preço de 15% e maior fidelização visual dos clientes."
  },
  {
    id: 2,
    title: "Recanto do Sereno",
    category: "Logo & Identidade",
    year: "2024",
    image: "assets/recanto_00_cover.jpg",
    description:
      "Mais que uma pousada, um convite ao silêncio. A identidade visual foi construída para desacelerar quem a vê, usando o minimalismo como ferramenta de paz.",
    challenge:
      "Fugir dos clichês de pousadas rurais (como casinhas literais) e capturar a essência abstrata da neblina da manhã e do cheiro de terra molhada de Minas Gerais.",
    personalPhrase:
      "O verde profundo e o laranja terroso contam a história do lugar antes mesmo de você chegar lá. É uma marca que respira.",
    process: [
      {
        step: "Estudo do Terroir",
        description: "Analisei a geografia do local. As curvas da logo nasceram inspiradas na silhueta exata das montanhas que cercam a propriedade."
      },
      {
        step: "Minimalismo Rústico",
        description: "Eliminei excessos. Mantivemos apenas traços essenciais, usando texturas que lembram papel reciclado e madeira crua."
      },
      {
        step: "Refinamento Elegante",
        description: "Ajustamos o peso das lines para que a marca funcione tanto em uma placa de madeira rústica quanto em um site de reservas sofisticado."
      }
    ],
    deliverables: ["Logotipo Responsivo", "Direção de Arte", "Cartões de Visita", "Papelaria Institucional", "Assinatura de E-mail"],
    colors: ["#10433a", "#e89137", "#f5f5f5"],
    typography: ["Draculas Personal", "Poppins"],
    mockups: [
      "assets/recanto_01_card.jpg",
      "assets/recanto_02_tote.jpg",
      "assets/recanto_03_flyer.jpg",
      "assets/recanto_04_logo_alt.png"
    ],
    layoutType: 'grid',
    results: "A nova identidade atraiu um público que busca experiências de luxo silencioso, aumentando as reservas diretas pelo site em 25% no primeiro semestre."
  },
  {
    id: 3,
    title: "Anna - Portfólio 2026",
    category: "Design & Tech",
    year: "2026",
    image: "assets/portfolio_00_cover.png",
    description:
      "Este próprio ecossistema digital foi criado para ser o palco definitivo da minha expressão criativa. Um projeto onde o design encontra a tecnologia de ponta para criar uma experiência sensorial.",
    challenge:
      "O desafio foi unir a sensibilidade do design artesanal com a fluidez de uma aplicação moderna. Cada transição e microinteração foi pensada para guiar o usuário de forma orgânica.",
    personalPhrase:
      "Projetar minha própria casa digital foi um exercício de autoanálise. Busquei o equilíbrio entre o minimalismo editorial e a sofisticação tecnológica.",
    process: [
      {
        step: "Curadoria Visual",
        description: "Definição da paleta #FCF6EF e #795558. A escolha das fontes serifadas traz o tom editorial, enquanto o layout fluido traz a modernidade."
      },
      {
        step: "Alquimia Digital",
        description: "Utilizei React e Framer Motion para dar vida às ideias. O Laboratório de Cores foi o ponto alto, unindo psicologia das cores e interação."
      },
      {
        step: "Experiência Mobile",
        description: "Foco total na experiência 'app-like'. O site foi desenhado para ser leve, rápido e encantador na palma da mão."
      }
    ],
    deliverables: ["UI/UX Experience", "Brand Tech Platform", "Artistic Direction", "Interactive Laboratory"],
    colors: ["#FCF6EF", "#795558", "#1a1515", "#FFDAF0"],
    typography: ["Poly", "Cormorant Garamond", "Satoshi"],
    mockups: [
      "assets/portfolio_02_about.png", // Mockup da seção Sobre
      "assets/portfolio_03_lab.png"    // Mockup do Laboratório de Cores
    ],
    layoutType: 'grid',
    results: "O resultado é uma narrativa visual coerente onde cada 'página' do site funciona como uma peça de portfólio por si só, demonstrando domínio técnico e estético."
  },
];
