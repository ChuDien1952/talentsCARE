/**
 * TypeScript Type Definitions for Translation Messages
 * Provides type safety for accessing translation keys
 */

export interface ServiceContent {
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  targetAudience: string;
  icon: string; // Icon name reference
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
}

export interface Messages {
  common: {
    nav: {
      home: string;
      services: string;
      servicesEmployers: string;
      servicesTalents: string;
      about: string;
      team: string;
      blog: string;
      contact: string;
    };
    footer: {
      company: string;
      tagline: string;
      rights: string;
      privacy: string;
      imprint: string;
      terms: string;
    };
    cta: {
      learnMore: string;
      contact: string;
      getStarted: string;
      bookConsultation: string;
      download: string;
      subscribe: string;
    };
    meta: {
      title: string;
      description: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
    hero: {
      headline: string;
      subheadline: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    services: {
      title: string;
      subtitle: string;
      employersTitle: string;
      employersDesc: string;
      talentsTitle: string;
      talentsDesc: string;
    };
    stats: {
      clients: string;
      clientsCount: string;
      talents: string;
      talentsCount: string;
      years: string;
      yearsCount: string;
      countries: string;
      countriesCount: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
  };
  services: {
    employers: {
      intro: {
        title: string;
        subtitle: string;
        description: string;
      };
      items: {
        seminare: ServiceContent;
        schulungen: ServiceContent;
        workshops: ServiceContent;
        vortraege: ServiceContent;
        webinare: ServiceContent;
        coaching: ServiceContent;
        training: ServiceContent;
        mentoring: ServiceContent;
        events: ServiceContent;
      };
    };
    talents: {
      intro: {
        title: string;
        subtitle: string;
        description: string;
      };
      items: {
        seminare: ServiceContent;
        schulungen: ServiceContent;
        workshops: ServiceContent;
        vortraege: ServiceContent;
        webinare: ServiceContent;
        coaching: ServiceContent;
        training: ServiceContent;
        mentoring: ServiceContent;
        events: ServiceContent;
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      text: string;
    };
    values: {
      title: string;
      respect: string;
      respectDesc: string;
      excellence: string;
      excellenceDesc: string;
      innovation: string;
      innovationDesc: string;
      partnership: string;
      partnershipDesc: string;
    };
    story: {
      title: string;
      text: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    intro: string;
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
}
