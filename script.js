console.log("Test app loaded");

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');

const translations = {
  en: {
    title: "Hello World",
    subtitle: "This is a simple test app.",
    aboutTitle: "About Our Platform",
    aboutText: "Welcome to our innovative platform designed to simplify your workflow and enhance productivity. We provide cutting-edge solutions tailored to meet your specific needs.",
    featuresTitle: "Key Features",
    featuresText: "Our platform offers a comprehensive suite of tools that empower users to achieve their goals efficiently. From intuitive interfaces to powerful integrations, we've got you covered.",
    whyTitle: "Why Choose Us",
    whyText: "With years of experience and a commitment to excellence, we deliver reliable solutions that scale with your business. Join thousands of satisfied users who trust our platform.",
    gettingStartedTitle: "Getting Started",
    gettingStartedText: "Begin your journey with our platform in just a few simple steps. Our streamlined onboarding process ensures you're up and running quickly.",
    setupTitle: "Easy Setup",
    setupText: "No complicated configurations required. Our intuitive setup wizard guides you through the process, making it easy to get started right away.",
    supportTitle: "Comprehensive Support",
    supportText: "Access our extensive documentation, video tutorials, and dedicated support team whenever you need assistance. We're here to help you succeed."
  },
  es: {
    title: "Hola Mundo",
    subtitle: "Esta es una aplicación de prueba simple.",
    aboutTitle: "Sobre Nuestra Plataforma",
    aboutText: "Bienvenido a nuestra plataforma innovadora diseñada para simplificar su flujo de trabajo y mejorar la productividad. Proporcionamos soluciones de vanguardia adaptadas a sus necesidades específicas.",
    featuresTitle: "Características Clave",
    featuresText: "Nuestra plataforma ofrece un conjunto completo de herramientas que permiten a los usuarios alcanzar sus objetivos de manera eficiente. Desde interfaces intuitivas hasta integraciones potentes, lo tenemos cubierto.",
    whyTitle: "Por Qué Elegirnos",
    whyText: "Con años de experiencia y un compromiso con la excelencia, ofrecemos soluciones confiables que escalan con su negocio. Únase a miles de usuarios satisfechos que confían en nuestra plataforma.",
    gettingStartedTitle: "Primeros Pasos",
    gettingStartedText: "Comience su viaje con nuestra plataforma en solo unos simples pasos. Nuestro proceso de incorporación simplificado garantiza que esté en funcionamiento rápidamente.",
    setupTitle: "Configuración Fácil",
    setupText: "No se requieren configuraciones complicadas. Nuestro asistente de configuración intuitivo le guía a través del proceso, facilitando el inicio inmediato.",
    supportTitle: "Soporte Integral",
    supportText: "Acceda a nuestra amplia documentación, tutoriales en video y equipo de soporte dedicado cuando necesite asistencia. Estamos aquí para ayudarle a tener éxito."
  },
  fr: {
    title: "Bonjour le Monde",
    subtitle: "Ceci est une application de test simple.",
    aboutTitle: "À Propos de Notre Plateforme",
    aboutText: "Bienvenue sur notre plateforme innovante conçue pour simplifier votre flux de travail et améliorer la productivité. Nous fournissons des solutions de pointe adaptées à vos besoins spécifiques.",
    featuresTitle: "Caractéristiques Clés",
    featuresText: "Notre plateforme offre une suite complète d'outils qui permettent aux utilisateurs d'atteindre leurs objectifs efficacement. Des interfaces intuitives aux intégrations puissantes, nous avons tout prévu.",
    whyTitle: "Pourquoi Nous Choisir",
    whyText: "Avec des années d'expérience et un engagement envers l'excellence, nous offrons des solutions fiables qui évoluent avec votre entreprise. Rejoignez des milliers d'utilisateurs satisfaits qui font confiance à notre plateforme.",
    gettingStartedTitle: "Commencer",
    gettingStartedText: "Commencez votre voyage avec notre plateforme en quelques étapes simples. Notre processus d'intégration rationalisé garantit que vous êtes opérationnel rapidement.",
    setupTitle: "Configuration Facile",
    setupText: "Aucune configuration compliquée requise. Notre assistant de configuration intuitif vous guide tout au long du processus, facilitant le démarrage immédiat.",
    supportTitle: "Support Complet",
    supportText: "Accédez à notre documentation complète, nos tutoriels vidéo et notre équipe d'assistance dédiée chaque fois que vous avez besoin d'aide. Nous sommes là pour vous aider à réussir."
  },
  de: {
    title: "Hallo Welt",
    subtitle: "Dies ist eine einfache Test-App.",
    aboutTitle: "Über Unsere Plattform",
    aboutText: "Willkommen auf unserer innovativen Plattform, die entwickelt wurde, um Ihren Arbeitsablauf zu vereinfachen und die Produktivität zu steigern. Wir bieten modernste Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.",
    featuresTitle: "Hauptmerkmale",
    featuresText: "Unsere Plattform bietet eine umfassende Suite von Tools, die Benutzern helfen, ihre Ziele effizient zu erreichen. Von intuitiven Benutzeroberflächen bis hin zu leistungsstarken Integrationen - wir haben alles abgedeckt.",
    whyTitle: "Warum Uns Wählen",
    whyText: "Mit jahrelanger Erfahrung und einem Engagement für Exzellenz liefern wir zuverlässige Lösungen, die mit Ihrem Unternehmen wachsen. Schließen Sie sich Tausenden zufriedener Benutzer an, die unserer Plattform vertrauen.",
    gettingStartedTitle: "Erste Schritte",
    gettingStartedText: "Beginnen Sie Ihre Reise mit unserer Plattform in nur wenigen einfachen Schritten. Unser optimierter Onboarding-Prozess stellt sicher, dass Sie schnell einsatzbereit sind.",
    setupTitle: "Einfache Einrichtung",
    setupText: "Keine komplizierten Konfigurationen erforderlich. Unser intuitiver Setup-Assistent führt Sie durch den Prozess und ermöglicht einen sofortigen Start.",
    supportTitle: "Umfassende Unterstützung",
    supportText: "Greifen Sie auf unsere umfangreiche Dokumentation, Video-Tutorials und unser engagiertes Support-Team zu, wann immer Sie Hilfe benötigen. Wir sind hier, um Ihnen zum Erfolg zu verhelfen."
  }
};

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    toggleIcon.textContent = '🌙';
  }
}

function toggleTheme() {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleIcon.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleIcon.textContent = '🌙';
  }
}

const languageDropdown = document.getElementById('language-dropdown');

function updateContent(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

function initLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  languageDropdown.value = savedLanguage;
  updateContent(savedLanguage);
}

function changeLanguage(event) {
  const selectedLanguage = event.target.value;
  localStorage.setItem('language', selectedLanguage);
  updateContent(selectedLanguage);
}

initTheme();
initLanguage();

themeToggle.addEventListener('click', toggleTheme);
languageDropdown.addEventListener('change', changeLanguage);
