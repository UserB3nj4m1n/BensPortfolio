import { Injectable, signal, computed } from '@angular/core';

export const TRANSLATIONS = {
  en: {
    NAV_ABOUT: 'About',
    NAV_EXPERIENCE: 'Experience',
    NAV_SKILLS: 'Skills',
    NAV_CONTACT: 'Contact',

    HERO_ROLE: 'Junior Angular Developer &',
    HERO_CLOUD: 'Cloud Enthusiast',
    HERO_DESC: 'IT graduate focused on modern frontend development and Linux/GCP infrastructure management.',
    HERO_BTN_PROJECTS: 'View Projects',
    HERO_BTN_CV: 'Download CV',

    EXP_TITLE: 'My Experience',
    EXP_DESC: 'Highlighting my journey through backend infrastructure and frontend development.',
    EXP_BTN_GITHUB: 'View on GitHub',

    SKILLS_TITLE: 'Technical Skills',
    SKILLS_DESC: 'The technologies and tools I work with to build scalable applications.',
    SKILLS_CAT_FRONTEND: 'Frontend Development',
    SKILLS_CAT_BACKEND: 'Infrastructure & Backend',

    CONTACT_TITLE: 'Get In Touch',
    CONTACT_DESC: "Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!",
    CONTACT_INFO_TITLE: 'Contact Information',
    CONTACT_INFO_DESC: 'Fill up the form and I will get back to you within 24 hours.',
    CONTACT_LABEL_NAME: 'Your Name',
    CONTACT_PLACEHOLDER_NAME: 'John Doe',
    CONTACT_ERR_NAME: 'Name is required.',
    CONTACT_LABEL_EMAIL: 'Email Address',
    CONTACT_PLACEHOLDER_EMAIL: 'john@example.com',
    CONTACT_ERR_EMAIL: 'Please enter a valid email.',
    CONTACT_LABEL_MSG: 'Message',
    CONTACT_PLACEHOLDER_MSG: 'How can I help you?',
    CONTACT_ERR_MSG: 'Message must be at least 10 characters long.',
    CONTACT_BTN_SENDING: 'Sending...',
    CONTACT_BTN_SEND: 'Send Message',
    CONTACT_SUCCESS: 'Message sent successfully!',

    PROJ_1_TITLE: 'Cloud & Linux Administrator',
    PROJ_1_DESC: 'Complete deployment and management of game servers in GCP, Ubuntu Linux administration, network configuration, DNS management via Namecheap.',
    PROJ_2_TITLE: 'Junior Full-Stack Developer',
    PROJ_2_DESC: 'Short-term intensive project and workshop focused on full-stack development under the mentoring of Siemens engineers (Python, Angular).'
  },
  sk: {
    NAV_ABOUT: 'O mne',
    NAV_EXPERIENCE: 'Skúsenosti',
    NAV_SKILLS: 'Zručnosti',
    NAV_CONTACT: 'Kontakt',

    HERO_ROLE: 'Junior Angular Vývojár &',
    HERO_CLOUD: 'Cloud Nadšenec',
    HERO_DESC: 'Absolvent IT so zameraním na moderný frontend a správu Linux/GCP infraštruktúry.',
    HERO_BTN_PROJECTS: 'Pozrieť projekty',
    HERO_BTN_CV: 'Stiahnuť CV',

    EXP_TITLE: 'Moje Skúsenosti',
    EXP_DESC: 'Prehľad mojej cesty backend infraštruktúrou a frontend vývojom.',
    EXP_BTN_GITHUB: 'Zobraziť na GitHube',

    SKILLS_TITLE: 'Technické Zručnosti',
    SKILLS_DESC: 'Technológie a nástroje, s ktorými pracujem pri tvorbe škálovateľných aplikácií.',
    SKILLS_CAT_FRONTEND: 'Frontend Vývoj',
    SKILLS_CAT_BACKEND: 'Infraštruktúra a Backend',

    CONTACT_TITLE: 'Kontaktujte ma',
    CONTACT_DESC: "Či už máte otázku, nápad na projekt, alebo len chcete pozdraviť, budem sa snažiť odpovedať čo najskôr!",
    CONTACT_INFO_TITLE: 'Kontaktné Informácie',
    CONTACT_INFO_DESC: 'Vyplňte formulár a ozvem sa vám do 24 hodín.',
    CONTACT_LABEL_NAME: 'Vaše Meno',
    CONTACT_PLACEHOLDER_NAME: 'Jozef Mrkvička',
    CONTACT_ERR_NAME: 'Meno je povinné.',
    CONTACT_LABEL_EMAIL: 'Emailová Adresa',
    CONTACT_PLACEHOLDER_EMAIL: 'jozef@priklad.sk',
    CONTACT_ERR_EMAIL: 'Zadajte prosím platný email.',
    CONTACT_LABEL_MSG: 'Správa',
    CONTACT_PLACEHOLDER_MSG: 'Ako vám môžem pomôcť?',
    CONTACT_ERR_MSG: 'Správa musí mať aspoň 10 znakov.',
    CONTACT_BTN_SENDING: 'Odosiela sa...',
    CONTACT_BTN_SEND: 'Odoslať Správu',
    CONTACT_SUCCESS: 'Správa bola úspešne odoslaná!',

    PROJ_1_TITLE: 'Cloud a Linux Administrátor',
    PROJ_1_DESC: 'Kompletné nasadzovanie a správa herných serverov v GCP, administrácia Ubuntu Linux, sieťová konfigurácia, správa DNS cez Namecheap.',
    PROJ_2_TITLE: 'Junior Full-Stack Vývojár',
    PROJ_2_DESC: 'Krátkodobý intenzívny projekt a workshop zameraný na full-stack vývoj pod mentoringom inžinierov zo Siemensu (Python, Angular).'
  }
};

type TranslationKey = keyof typeof TRANSLATIONS['en'];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'en' | 'sk'>('en');

  t = computed(() => {
    return TRANSLATIONS[this.currentLang()];
  });

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'en' ? 'sk' : 'en');
  }
}
