export type Locale = 'pl' | 'en';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    cta: { github: string; linkedin: string; contact: string };
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: {
      type: 'work' | 'education';
      org: string;
      role: string;
      period: string;
      bullets: string[];
      tech?: string[];
    }[];
  };
  commercialProjects: {
    title: string;
    note: string;
    items: {
      name: string;
      slug: string;
      description: string;
      tech: string[];
    }[];
  };
  projects: {
    title: string;
    items: {
      name: string;
      install: string;
      description: string;
      tech: string[];
      github: string;
    }[];
  };
  skills: {
    title: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    cv: string;
  };
  footer: {
    built: string;
  };
  scrollTop: string;
}

const pl: Translations = {
  nav: {
    about: 'O mnie',
    experience: 'Doświadczenie',
    projects: 'Projekty',
    skills: 'Umiejętności',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Cześć, jestem',
    name: 'Adam Czarnowski',
    role: 'Full-Stack Engineer',
    tagline:
      'Buduję praktyczne oprogramowanie — aplikacje end-to-end, automatyzację workflow, integracje AI i systemy przetwarzające duże wolumeny danych.',
    cta: { github: 'GitHub', linkedin: 'LinkedIn', contact: 'Kontakt' },
  },
  about: {
    title: 'O mnie',
    paragraphs: [
      'Full-stack engineer z Wrocławia. Nakręca mnie oprogramowanie, które ma realny wpływ — oszczędza ludziom czas, upraszcza procesy, rozwiązuje konkretne problemy. Każdy projekt to inne wyzwanie i to trzyma mnie w branży.',
      'Łączę programowanie z kontaktem z klientem. Dobry produkt zaczyna się od zrozumienia potrzeb biznesowych, nie od kodu — dlatego angażuję się od pierwszego spotkania, przez analizę i architekturę, po wdrożenie i asystę. Jestem samodzielny, dokładny do bólu i umiem rozmawiać zarówno językiem technicznym, jak i biznesowym.',
      'Wierzę w oprogramowanie, które rozwiązuje realne problemy — niezawodne, zrozumiałe i redukujące manualną pracę. Po godzinach buduję narzędzia open source dla developerów.',
    ],
  },
  experience: {
    title: 'Doświadczenie',
    items: [
      {
        type: 'work',
        org: 'Wrocławski Instytut Zastosowań Informacji Przestrzennej i Sztucznej Inteligencji',
        role: 'Full-Stack Engineer',
        period: 'sierpień 2025 — obecnie',
        bullets: [
          'Tworzenie aplikacji webowych i mobilnych end-to-end dla sektora publicznego',
          'Projektowanie architektur stackowych, deploy na serwerach klienckich, maintenance',
          'Pełny cykl pracy z danymi przestrzennymi i statystycznymi — pozyskanie, oczyszczenie, analiza, wizualizacja',
          'Integracja AI — chatboty i voiceboty obsługujące mieszkańców miast (m.in. Wrocław, Toruń)',
          'Automatyzacja workflow obsługi dokumentów urzędowych — wnioski, faktury, protokoły, potwierdzenia',
          'Prowadzenie rozmów z klientami i szkoleń dla użytkowników końcowych',
        ],
        tech: ['Python', 'React', 'PostgreSQL', 'Docker', 'GIS', 'AI'],
      },
      {
        type: 'work',
        org: 'Streamsoft',
        role: 'Programista / Konsultant ds. wdrożeń ERP',
        period: 'czerwiec 2024 — sierpień 2025',
        bullets: [
          'Rozwój systemu Verto ERP — skrypty klienckie i serwerowe',
          'Utrzymanie baz danych',
          'Tworzenie diagramów encji logicznych',
          'Obsługa dokumentów logistycznych, magazynowych, sprzedażowych i transportowych',
          'Analiza potrzeb klientów i prowadzenie szkoleń z programowania komponentów',
        ],
        tech: ['Python', 'Java', 'PostgreSQL', 'ERP'],
      },
      {
        type: 'work',
        org: 'Biuro rachunkowe CAPRI',
        role: 'Python Developer / IT Specialist',
        period: 'luty 2023 — czerwiec 2024',
        bullets: [
          'Oprogramowanie do automatycznego pobierania danych z faktur — oszczędność ~4h tygodniowo na osobę',
          'Generowanie raportów finansowych, prognoz i dokumentów kadrowych',
          'Tworzenie aplikacji bazy klientów i automatyzacja procesów biurowych',
          'Konfiguracja sprzętu i utrzymanie systemów',
        ],
        tech: ['Python', 'PostgreSQL', 'Automatyzacja', 'Windows'],
      },
      {
        type: 'work',
        org: 'Freelance',
        role: 'Korepetytor Python',
        period: 'luty 2022 — marzec 2023',
        bullets: [
          'Spersonalizowane lekcje programowania Python dla dzieci, nastolatków i studentów',
          'Nauczanie podstawowych i zaawansowanych koncepcji',
          'Tworzenie zadań i projektów dostosowanych do poziomu uczestników',
        ],
        tech: ['Python', 'Algorytmy', 'Struktury danych', 'OOP'],
      },
      {
        type: 'work',
        org: 'Nokia',
        role: 'Python Developer',
        period: 'sierpień 2021 — sierpień 2022',
        bullets: [
          'Skrypty Python automatyzujące procesy wewnętrzne firmy',
          'Przetwarzanie i wymiana danych między systemami wewnętrznymi (JSON)',
          'Automatyczne testy sygnałowe anten różnych częstotliwości (Robot Framework + Jenkins)',
        ],
        tech: ['Python', 'JSON', 'Robot Framework', 'Jenkins'],
      },
      {
        type: 'education',
        org: 'Politechnika Wrocławska',
        role: 'Informatyka techniczna (mgr inż.)',
        period: 'marzec 2022 — lipiec 2023',
        bullets: [
          'Praca magisterska: Wizualizacja metrycznego problemu Komiwojażera — porównanie metod dokładnych i metaheurystycznych',
        ],
      },
      {
        type: 'education',
        org: 'Politechnika Wrocławska',
        role: 'Informatyczne systemy automatyki (inż.)',
        period: 'październik 2018 — luty 2022',
        bullets: [
          'Praca inżynierska: Wykorzystanie algorytmów sztucznej inteligencji w grze typu roguelike',
        ],
      },
    ],
  },
  commercialProjects: {
    title: 'Projekty komercyjne',
    note: 'Szczegóły implementacji objęte NDA — poniżej opis zakresu i technologii.',
    items: [
      {
        name: 'System sprawozdawczy i wizualizacji danych',
        slug: 'reporting-system',
        description:
          'Aplikacja webowa dla instytutu badawczego do zbierania, przetwarzania, analizy i wizualizacji danych. Instytutowi podlega ~300 podmiotów w całej Polsce. Projektowanie architektury i skalowalności, backend, frontend, bazy danych, deploy na serwer kliencki oraz maintenance.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'PostGIS', 'Docker', 'Redis', 'Celery', 'GeoServer', 'Leaflet', 'Grafana'],
      },
      {
        name: 'System przetwarzania danych z OCR',
        slug: 'ocr-processor',
        description:
          'Aplikacja webowa dla instytucji państwowych w każdym województwie. Zamiast przeglądać dziesiątki wielostronicowych dokumentów, pracownicy otrzymują podsumowanie kluczowych informacji w formie tekstu i tabel. System weryfikuje poprawność i kompletność składanych dokumentów zgodnie ze ściśle określonymi zasadami.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Tesseract OCR', 'Docker', 'Redis', 'Celery'],
      },
      {
        name: 'Chatbot wypełniający wnioski geodezyjne',
        slug: 'geodetic-chatbot',
        description:
          'Osadzalny widget chatbota prowadzący rozmowę z użytkownikiem i zbierający dane geodezyjne na podstawie jego wyborów. Generuje plik JSON wysyłany do zewnętrznego systemu klienta w celu uzupełnienia wniosku geodezyjnego.',
        tech: ['Python', 'FastAPI', 'React', 'Docker', 'AI'],
      },
      {
        name: 'Voicebot i Chatbot dla urzędów miast',
        slug: 'city-voicebot',
        description:
          'System umożliwiający mieszkańcom wybranych największych miast w Polsce uzyskanie informacji z urzędu bez wizyty i bez kontaktu z urzędnikiem. Czynny udział w tworzeniu, optymalizacji i debugowaniu funkcjonalności.',
        tech: ['Python', 'React', 'PostgreSQL', 'Docker', 'AI'],
      },
      {
        name: 'System rejestracji obecności pracowników',
        slug: 'attendance-system',
        description:
          'Aplikacja webowa do rejestracji obecności i urlopów. Składanie wniosków urlopowych, system kont z rolami — administrator z pełnym wglądem, eksport do Excel i wydruk PDF.',
        tech: ['Python', 'React', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'CLI do metakonfiguracji agentów AI',
        slug: 'agent-config-cli',
        description:
          'Narzędzie CLI pozwalające tworzyć metakonfiguracje agentów AI pod dany stack technologiczny. Cross-validation, autogeneracja promptów, instalacja zewnętrznych pluginów agentowych.',
        tech: ['Python', 'Typer', 'Rich', 'uv'],
      },
    ],
  },
  projects: {
    title: 'Projekty Open Source',
    items: [
      {
        name: 'claude-code-clipboard',
        install: 'git clone boldsamurai/claude-code-clipboard',
        description:
          'Hook do Claude Code CLI wykorzystujący skrypt Python, który automatycznie kopiuje bloki kodu z odpowiedzi AI do schowka systemowego. Obsługuje wiele narzędzi clipboard, WSL i historię schowka.',
        tech: ['Python', 'Bash', 'Markdown'],
        github: 'https://github.com/boldsamurai/claude-code-clipboard',
      },
      {
        name: 'fuzzymarks',
        install: 'git clone boldsamurai/fuzzymarks',
        description:
          'Rozszerzenie przeglądarki zastępujące nową kartę — fuzzy search zakładek, motywy Catppuccin, 50+ skrótów klawiszowych, statystyki odwiedzin i pełne zarządzanie zakładkami. Idealne dla osób obsługujących komputer klawiaturą.',
        tech: ['JavaScript', 'WebExtension', 'Catppuccin'],
        github: 'https://github.com/boldsamurai/fuzzymarks',
      },
      {
        name: 'minimal-cat-userchrome',
        install: 'git clone boldsamurai/minimal-cat-userchrome',
        description:
          'Minimalistyczny motyw Firefox sterowany klawiaturą z kolorami Catppuccin Macchiato. Czysty interfejs bez rozpraszaczy.',
        tech: ['CSS', 'Firefox', 'Catppuccin'],
        github: 'https://github.com/boldsamurai/minimal-cat-userchrome',
      },
    ],
  },
  skills: {
    title: 'Umiejętności',
    categories: [
      {
        title: 'Backend',
        items: ['Python', 'Java', 'FastAPI', 'Django', 'PostgreSQL', 'Pydantic', 'Redis', 'Celery', 'REST API'],
      },
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Vite'],
      },
      {
        title: 'Infrastruktura',
        items: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'SSH', 'Git', 'CI/CD', 'Grafana', 'Loki', 'Jenkins'],
      },
      {
        title: 'AI',
        items: ['Claude API', 'Codex API', 'Gemini API', 'Tesseract OCR', 'Prompt Engineering', 'AI Agent Architecture'],
      },
      {
        title: 'Dane',
        items: ['SQL', 'GIS', 'PostGIS', 'GeoServer', 'Leaflet', 'Pandas', 'openpyxl'],
      },
      {
        title: 'Narzędzia',
        items: ['Claude Code', 'pytest', 'ruff', 'uv', 'Typer', 'Rich', 'Robot Framework'],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Masz pomysł na projekt, potrzebujesz konsultacji albo szukasz full-stack engineera? Odezwij się.',
    email: 'Email',
    cv: 'Pobierz CV',
  },
  footer: {
    built: '',
  },
  scrollTop: 'Wróć na górę',
};

const en: Translations = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Adam Czarnowski',
    role: 'Full-Stack Engineer',
    tagline:
      'I build practical software — end-to-end applications, workflow automation, AI integrations, and data-heavy systems.',
    cta: { github: 'GitHub', linkedin: 'LinkedIn', contact: 'Contact' },
  },
  about: {
    title: 'About me',
    paragraphs: [
      "Full-stack engineer based in Wrocław, Poland. I'm driven by software that has real impact — saving people time, simplifying processes, solving tangible problems. Every project is a different challenge, and that's what keeps me in this industry.",
      "I combine programming with direct client contact. A good product starts with understanding business needs, not code — that's why I get involved from the first meeting, through analysis and architecture, to deployment and support. I'm self-reliant, meticulous to a fault, and I speak both tech and business fluently.",
      'I believe in software that solves real problems — reliable, understandable, and reducing manual work. In my spare time I build open source developer tools.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        type: 'work',
        org: 'Wrocław Institute for Spatial Information and AI Applications',
        role: 'Full-Stack Engineer',
        period: 'Aug 2025 — present',
        bullets: [
          'Building end-to-end web and mobile applications for the public sector',
          'Designing stack architectures, deploying on client servers, long-term maintenance',
          'Full data lifecycle with spatial and statistical data — acquisition, cleaning, analysis, visualization',
          'AI integration — chatbots and voicebots serving city residents (incl. Wrocław, Toruń)',
          'Workflow automation for official document processing — applications, invoices, protocols, confirmations',
          'Client communication and end-user training',
        ],
        tech: ['Python', 'React', 'PostgreSQL', 'Docker', 'GIS', 'AI'],
      },
      {
        type: 'work',
        org: 'Streamsoft',
        role: 'Programmer / ERP Implementation Consultant',
        period: 'Jun 2024 — Aug 2025',
        bullets: [
          'Development of the Verto ERP system — client and server scripts',
          'Database maintenance',
          'Logical entity diagram design',
          'Handling logistics, warehouse, sales, and transport documents',
          'Client needs analysis and training on programming system components',
        ],
        tech: ['Python', 'Java', 'PostgreSQL', 'ERP'],
      },
      {
        type: 'work',
        org: 'CAPRI Accounting Office',
        role: 'Python Developer / IT Specialist',
        period: 'Feb 2023 — Jun 2024',
        bullets: [
          'Software for automatic invoice data retrieval — saving ~4h per person per week',
          'Financial report generation, forecasts, and HR documents',
          'Client database applications and office task automation',
          'Hardware configuration and system maintenance',
        ],
        tech: ['Python', 'PostgreSQL', 'Automation', 'Windows'],
      },
      {
        type: 'work',
        org: 'Freelance',
        role: 'Python Tutor',
        period: 'Feb 2022 — Mar 2023',
        bullets: [
          'Personalized Python programming lessons for children, teenagers, and students',
          'Teaching fundamental and advanced concepts',
          'Developing tailored exercises and projects',
        ],
        tech: ['Python', 'Algorithms', 'Data Structures', 'OOP'],
      },
      {
        type: 'work',
        org: 'Nokia',
        role: 'Python Developer',
        period: 'Aug 2021 — Aug 2022',
        bullets: [
          'Python scripts automating internal company processes',
          'Internal systems data processing and exchange (JSON)',
          'Automated antenna signal testing across frequencies (Robot Framework + Jenkins)',
        ],
        tech: ['Python', 'JSON', 'Robot Framework', 'Jenkins'],
      },
      {
        type: 'education',
        org: 'Wrocław University of Science and Technology',
        role: 'Computer Science (M.Sc.)',
        period: 'Mar 2022 — Jul 2023',
        bullets: [
          'Thesis: Visualization of the Metric Travelling Salesman Problem — comparison of exact and metaheuristic methods',
        ],
      },
      {
        type: 'education',
        org: 'Wrocław University of Science and Technology',
        role: 'Computer Systems for Automation (B.Eng.)',
        period: 'Oct 2018 — Feb 2022',
        bullets: [
          'Thesis: Application of artificial intelligence algorithms in a roguelike game',
        ],
      },
    ],
  },
  commercialProjects: {
    title: 'Commercial Projects',
    note: 'Implementation details under NDA — scope and technology overview below.',
    items: [
      {
        name: 'Reporting & Data Visualization System',
        slug: 'reporting-system',
        description:
          'Web application for a research institute to collect, process, analyze, and visualize data. The institute oversees ~300 entities across Poland. Full architecture design, backend, frontend, databases, client server deployment, and maintenance.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'PostGIS', 'Docker', 'Redis', 'Celery', 'GeoServer', 'Leaflet', 'Grafana'],
      },
      {
        name: 'OCR Data Processing System',
        slug: 'ocr-processor',
        description:
          'Web application for government institutions in every voivodeship. Instead of reviewing dozens of multi-page documents, employees receive summaries of key information as text and tables. The system validates document correctness and completeness against strict regulatory rules.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Tesseract OCR', 'Docker', 'Redis', 'Celery'],
      },
      {
        name: 'Geodetic Application Chatbot',
        slug: 'geodetic-chatbot',
        description:
          'Embeddable chatbot widget that guides users through geodetic data collection based on their choices. Generates a JSON file sent to the client\'s external system for application completion.',
        tech: ['Python', 'FastAPI', 'React', 'Docker', 'AI'],
      },
      {
        name: 'City Office Voicebot & Chatbot',
        slug: 'city-voicebot',
        description:
          'System enabling residents of selected major Polish cities to obtain information from city offices without visiting or contacting officials. Active contribution to feature development, optimization, and debugging.',
        tech: ['Python', 'React', 'PostgreSQL', 'Docker', 'AI'],
      },
      {
        name: 'Employee Attendance System',
        slug: 'attendance-system',
        description:
          'Web application for attendance and leave tracking. Leave request submissions, role-based account system — admin with full oversight, Excel export, and PDF printing.',
        tech: ['Python', 'React', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'AI Agent Meta-Configuration CLI',
        slug: 'agent-config-cli',
        description:
          'CLI tool for creating AI agent meta-configurations per tech stack. Cross-validation, prompt autogeneration, and external agent plugin installation.',
        tech: ['Python', 'Typer', 'Rich', 'uv'],
      },
    ],
  },
  projects: {
    title: 'Open Source Projects',
    items: [
      {
        name: 'claude-code-clipboard',
        install: 'git clone boldsamurai/claude-code-clipboard',
        description:
          'A Claude Code CLI hook using a Python script that automatically copies code blocks from AI responses to your system clipboard. Supports multiple clipboard tools, WSL, and clipboard history.',
        tech: ['Python', 'Bash', 'Markdown'],
        github: 'https://github.com/boldsamurai/claude-code-clipboard',
      },
      {
        name: 'fuzzymarks',
        install: 'git clone boldsamurai/fuzzymarks',
        description:
          'A new tab browser extension with fuzzy bookmark search, Catppuccin themes, 50+ keyboard shortcuts, visit statistics, and full bookmark management. Built for keyboard-driven workflows.',
        tech: ['JavaScript', 'WebExtension', 'Catppuccin'],
        github: 'https://github.com/boldsamurai/fuzzymarks',
      },
      {
        name: 'minimal-cat-userchrome',
        install: 'git clone boldsamurai/minimal-cat-userchrome',
        description:
          'A minimal, keyboard-driven Firefox userChrome theme with Catppuccin Macchiato colors. Clean, distraction-free interface.',
        tech: ['CSS', 'Firefox', 'Catppuccin'],
        github: 'https://github.com/boldsamurai/minimal-cat-userchrome',
      },
    ],
  },
  skills: {
    title: 'Skills',
    categories: [
      {
        title: 'Backend',
        items: ['Python', 'Java', 'FastAPI', 'Django', 'PostgreSQL', 'Pydantic', 'Redis', 'Celery', 'REST API'],
      },
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Vite'],
      },
      {
        title: 'Infrastructure',
        items: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'SSH', 'Git', 'CI/CD', 'Grafana', 'Loki', 'Jenkins'],
      },
      {
        title: 'AI',
        items: ['Claude API', 'Codex API', 'Gemini API', 'Tesseract OCR', 'Prompt Engineering', 'AI Agent Architecture'],
      },
      {
        title: 'Data',
        items: ['SQL', 'GIS', 'PostGIS', 'GeoServer', 'Leaflet', 'Pandas', 'openpyxl'],
      },
      {
        title: 'Tools',
        items: ['Claude Code', 'pytest', 'ruff', 'uv', 'Typer', 'Rich', 'Robot Framework'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      "Got a project idea, need a consultation, or looking for a full-stack engineer? Get in touch.",
    email: 'Email',
    cv: 'Download CV',
  },
  footer: {
    built: '',
  },
  scrollTop: 'Back to top',
};

export const translations: Record<Locale, Translations> = { pl, en };
