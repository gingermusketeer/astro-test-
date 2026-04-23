export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    tours: string;
    about: string;
    reviews: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    viewTours: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    stats: {
      travellers: string;
      experience: string;
      guides: string;
    };
    topRated: string;
    imageAlt: string;
  };
  tours: {
    label: string;
    title: string;
    subtitle: string;
    bookButton: string;
    bookMessage: (tourTitle: string) => string;
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    whatsapp: { name: string; description: string };
    signal: { name: string; description: string };
    google: { name: string; description: string; link: string };
    tripadvisor: { name: string; description: string };
    whatsappMessage: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const en: Translations = {
  meta: {
    title: "Mada Infinity Tours — Discover Madagascar's Hidden Gems",
    description:
      "Mada Infinity Tours — Expert-guided tours in Madagascar's Nosy Be region. Explore spice plantations, baobab forests, and pristine beaches.",
  },
  nav: {
    tours: "Tours",
    about: "About",
    reviews: "Reviews",
    contact: "Contact Us",
  },
  hero: {
    badge: "🌴 Nosy Be, Madagascar",
    title: "Discover Madagascar's<br />Hidden Gems",
    subtitle:
      "Expert-guided tours through spice plantations, ancient baobab forests, and pristine island shores. Your adventure begins in Nosy Be.",
    whatsapp: "💬 Chat on WhatsApp",
    viewTours: "View Our Tours",
    scroll: "Scroll to explore",
  },
  about: {
    label: "About Us",
    title: "Your Local Guides<br />in Nosy Be",
    p1: "We are a small, passionate team of local guides born and raised in the Nosy Be archipelago. Led by Davidson, our founder and head guide, we craft authentic experiences that go far beyond the tourist trail, drawing on deep knowledge of Madagascar's unique ecosystems, culture, and hidden corners.",
    p2: "From the fragrant vanilla and cocoa plantations of the mainland to the baobab-studded landscapes of the west coast, every tour is designed to connect you with the real Madagascar.",
    stats: {
      travellers: "Happy Travellers",
      experience: "Years of Experience",
      guides: "Local Guides",
    },
    topRated: "Top-rated on Google",
    imageAlt: "Scenic view of Nosy Be, Madagascar",
  },
  tours: {
    label: "Our Tours",
    title: "Unforgettable Experiences",
    subtitle:
      "Handcrafted tours designed to show you the very best of Madagascar's natural wonders, culture, and flavours.",
    bookButton: "💬 Book via WhatsApp",
    bookMessage: (tourTitle) =>
      `Hello! I'd like to book the "${tourTitle}" tour.`,
  },
  testimonials: {
    label: "Testimonials",
    title: "What Our Travellers Say",
    subtitle:
      "Don't just take our word for it — here's what guests from around the world have to say about their time with Mada Infinity Tours.",
  },
  contact: {
    label: "Get in Touch",
    title: "Ready to Start<br />Your Adventure?",
    subtitle:
      "Reach out to us on your preferred platform — we're always happy to answer questions, help plan your itinerary, or take a booking.",
    whatsapp: {
      name: "WhatsApp",
      description: "Chat with us instantly",
    },
    signal: {
      name: "Signal",
      description: "Secure messaging",
    },
    google: {
      name: "Google Business",
      description: "Read our reviews",
      link: "Find us on Google →",
    },
    tripadvisor: {
      name: "TripAdvisor",
      description: "Read traveller reviews",
    },
    whatsappMessage:
      "Hello! I'm interested in booking a tour with Mada Infinity Tours.",
  },
  footer: {
    tagline:
      "Based in Nosy Be, Madagascar \u2014 Your gateway to island adventures",
    rights: "All rights reserved.",
  },
};

export const fr: Translations = {
  meta: {
    title: "Mada Infinity Tours — Découvrez les Joyaux Cachés de Madagascar",
    description:
      "Mada Infinity Tours — Circuits guidés par des experts dans la région de Nosy Be, Madagascar. Explorez des plantations d'épices, des forêts de baobabs et des plages préservées.",
  },
  nav: {
    tours: "Circuits",
    about: "À propos",
    reviews: "Avis",
    contact: "Nous contacter",
  },
  hero: {
    badge: "🌴 Nosy Be, Madagascar",
    title: "Découvrez les Joyaux<br />Cachés de Madagascar",
    subtitle:
      "Des circuits guidés par des experts à travers les plantations d'épices, les forêts de baobabs ancestraux et les rivages insulaires préservés. Votre aventure commence à Nosy Be.",
    whatsapp: "💬 Chattez sur WhatsApp",
    viewTours: "Voir nos circuits",
    scroll: "Défiler pour explorer",
  },
  about: {
    label: "À propos de nous",
    title: "Vos Guides Locaux<br />à Nosy Be",
    p1: "Nous sommes une petite équipe passionnée de guides locaux nés et élevés dans l'archipel de Nosy Be. Dirigée par Davidson, notre fondateur et guide principal, nous créons des expériences authentiques qui vont bien au-delà des sentiers touristiques, en s'appuyant sur une connaissance approfondie des écosystèmes uniques, de la culture et des coins cachés de Madagascar.",
    p2: "Des plantations parfumées de vanille et de cacao du continent aux paysages parsemés de baobabs de la côte ouest, chaque circuit est conçu pour vous connecter avec la vraie Madagascar.",
    stats: {
      travellers: "Voyageurs Satisfaits",
      experience: "Années d'Expérience",
      guides: "Guides Locaux",
    },
    topRated: "Très bien noté sur Google",
    imageAlt: "Vue panoramique de Nosy Be, Madagascar",
  },
  tours: {
    label: "Nos Circuits",
    title: "Expériences Inoubliables",
    subtitle:
      "Des circuits artisanaux conçus pour vous faire découvrir les merveilles naturelles, la culture et les saveurs de Madagascar.",
    bookButton: "💬 Réserver via WhatsApp",
    bookMessage: (tourTitle) =>
      `Bonjour\u00a0! Je voudrais réserver le circuit « ${tourTitle} ».`,
  },
  testimonials: {
    label: "Témoignages",
    title: "Ce que Disent nos Voyageurs",
    subtitle:
      "Ne nous croyez pas sur parole — voici ce que disent les clients du monde entier à propos de leur séjour avec Mada Infinity Tours.",
  },
  contact: {
    label: "Nous Contacter",
    title: "Prêt à Commencer<br />Votre Aventure\u00a0?",
    subtitle:
      "Contactez-nous sur votre plateforme préférée — nous sommes toujours heureux de répondre aux questions, d'aider à planifier votre itinéraire ou de prendre une réservation.",
    whatsapp: {
      name: "WhatsApp",
      description: "Chattez avec nous instantanément",
    },
    signal: {
      name: "Signal",
      description: "Messagerie sécurisée",
    },
    google: {
      name: "Google Business",
      description: "Lire nos avis",
      link: "Nous trouver sur Google →",
    },
    tripadvisor: {
      name: "TripAdvisor",
      description: "Lire les avis des voyageurs",
    },
    whatsappMessage:
      "Bonjour\u00a0! Je suis intéressé(e) par la réservation d'un circuit avec Mada Infinity Tours.",
  },
  footer: {
    tagline:
      "Basé à Nosy Be, Madagascar \u2014 Votre porte d'entrée vers les aventures insulaires",
    rights: "Tous droits réservés.",
  },
};

export const languages = { en, fr } as const;
export type Locale = keyof typeof languages;
