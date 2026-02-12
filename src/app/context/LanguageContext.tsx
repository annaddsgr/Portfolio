import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'hero.title': 'Transformo histórias em marcas autênticas.',
    'hero.subtitle': 'Designer Gráfico & Estrategista Visual especializada em Identidade Visual e Social Media.',
    'cta.budget': 'Solicitar Orçamento',
    'projects.title': 'Histórias que ajudei a criar',
    'projects.subtitle': 'Cada projeto é uma jornada única.',
    'hero.alma': 'com alma',
    'hero.manifesto': '"Transformo essências invisíveis em realidades visuais potentes e intencionais."',
    'hero.cta': 'Ver Portfólio',
    'hero.tailored': 'Criação sob Medida',
    'hero.curatorship': 'Curadoria Visual',
    'hero.strategy': '& Estratégia',
    'about.pleasure': 'prazer',
    'about.intro': 'Sou uma designer gráfica apaixonada por criar conexões visuais significativas. Trabalho além da estética — busco a alma de cada projeto.',
    'about.mission': 'Transformar essências em identidades potentes, unindo criatividade e estratégia.',
    'about.vision': 'Ser a referência em design que conecta marcas a corações de forma autêntica.',
    'contact.cta': 'Vamos criar algo único?',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Transforming stories into authentic brands.',
    'hero.subtitle': 'Graphic Designer & Visual Strategist specializing in Visual Identity and Social Media.',
    'cta.budget': 'Request a Quote',
    'projects.title': 'Stories I helped create',
    'projects.subtitle': 'Every project is a unique journey.',
    'hero.alma': 'with soul',
    'hero.manifesto': '"I transform invisible essences into powerful and intentional visual realities."',
    'hero.cta': 'View Portfolio',
    'hero.tailored': 'Tailored Creation',
    'hero.curatorship': 'Visual Curatorship',
    'hero.strategy': '& Strategy',
    'about.pleasure': 'pleasure',
    'about.intro': 'I am a graphic designer passionate about creating meaningful visual connections. I work beyond aesthetics — I seek the soul of every project.',
    'about.mission': 'To transform essences into powerful identities, combining creativity and strategy.',
    'about.vision': 'To be the benchmark in design that connects brands to hearts authentically.',
    'contact.cta': 'Shall we create something unique?',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
