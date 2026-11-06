/**
 * The site's own words and facts: name, navigation, contact, offers, dates.
 * Edit freely. Every string is plain text (rendered escaped).
 *
 * Voice (from the brief): warm, reflective, unhurried. "We" by default, "you"
 * only for direct reflective invitations. No contractions, no urgency, no hype.
 * The seven parts of the framework are always "levels".
 */

export const SITE = {
  name: 'Conflict Intelligence Training',
  short: 'CIQ',
  /** One sentence: the home page's meta description and the footer line. */
  description:
    'An online school and community for developing Conflict Intelligence (CIQ) through the Seven Levels Framework: Space, Emotions, Identity, Relationships, Expression, Intuition and Spirituality.',
  tagline: 'EQ is to emotions as CIQ is to conflict.',
  parent: 'NAMASTE International',
  lang: 'en',
  /**
   * The site's public address, for canonical URLs and social cards
   * (`https://www.example.com`, no trailing slash). Set it to
   * `https://conflictintelligencetraining.com` once that domain points here.
   */
  url: '',
};

export interface NavLink {
  label: string;
  href: string;
}
export interface NavGroup {
  label: string;
  links: NavLink[];
}
export type NavItem = NavLink | NavGroup;

export const isGroup = (item: NavItem): item is NavGroup => 'links' in item;

/** Header navigation: plain links, two of them grouped into small menus. */
export const NAV: NavItem[] = [
  {
    label: 'Conflict Intelligence',
    links: [
      {label: 'What Is Conflict Intelligence?', href: '/what-is-conflict-intelligence/'},
      {label: 'The Seven Levels Framework', href: '/seven-levels/'},
    ],
  },
  {
    label: 'Your Path',
    links: [
      {label: 'Your Path: an overview', href: '/your-path/'},
      {label: '7-Day Conflict Prevention Challenge', href: '/challenge/'},
      {label: 'Beyond Resolution series', href: '/beyond-resolution/'},
      {label: 'The Seven Steps to Peace (children’s book)', href: '/childrens-book/'},
      {label: 'Conflict Exploration Kit', href: '/exploration-kit/'},
      {label: 'Seven Levels Practitioner Certification', href: '/certification/'},
    ],
  },
  {label: 'Community', href: '/community/'},
  {label: 'Resources', href: '/blog/'},
  {label: 'About', href: '/about/'},
  {label: 'Contact', href: '/contact/'},
];

/** The footer, in columns. Every page of the site is here. */
export const FOOTER: NavGroup[] = [
  {
    label: 'Learn',
    links: [
      {label: 'What Is Conflict Intelligence?', href: '/what-is-conflict-intelligence/'},
      {label: 'The Seven Levels Framework', href: '/seven-levels/'},
      {label: 'Resources and blog', href: '/blog/'},
    ],
  },
  {
    label: 'Your Path',
    links: [
      {label: 'Your Path overview', href: '/your-path/'},
      {label: '7-Day Challenge', href: '/challenge/'},
      {label: 'Beyond Resolution', href: '/beyond-resolution/'},
      {label: 'Children’s Book', href: '/childrens-book/'},
      {label: 'Conflict Exploration Kit', href: '/exploration-kit/'},
      {label: 'Certification', href: '/certification/'},
    ],
  },
  {
    label: 'Together',
    links: [
      {label: 'Community', href: '/community/'},
      {label: 'About Ian Renaud', href: '/about/'},
      {label: 'Contact', href: '/contact/'},
      {label: 'RSS feed', href: '/rss.xml'},
    ],
  },
];

export const CONTACT = {
  title: 'Contact',
  lede: 'A question, a reflection, or a conversation about bringing Conflict Intelligence to your team? We read every message, and we reply with care.',
  /** REPLACE: an address you read. Every form on the site sends to it. */
  email: 'hello@conflictintelligencetraining.com',
  /** Prefilled subject for the email. */
  subject: 'A note from the website',
  /**
   * Optional: an https:// link to a form hosted elsewhere. Empty = the email form only.
   * A static site cannot receive form posts itself.
   */
  formUrl: '',
};

/**
 * Sign-ups for the free offers. Today each opens an email to CONTACT.email.
 * When an email tool (a newsletter service) hosts the sign-up form, paste its
 * https:// link here and the page links to it instead.
 */
export const SIGNUP = {
  challengeFormUrl: '',
  seriesFormUrl: '',
  /** A direct https:// link to the children's book PDF, once it is hosted. Empty = request by email. */
  bookDownloadUrl: '',
};

/**
 * Prices. The amounts shown here MUST match the site's Payments tab, where
 * each price lives under its key (the Buy button sends only the key).
 */
export const PRICES = {
  currency: 'USD',
  kit: {key: 'exploration-kit', amount: '$147'},
  certificationFull: {key: 'certification-full', amount: '$2,646'},
  certificationPlan: {key: 'certification-plan', amount: '$378', count: 7},
};

export const CERTIFICATION = {
  name: 'Seven Levels Practitioner Certification',
  credential: 'Certified Seven Levels Practitioner',
  hours: 42,
  sessions: 14,
  day: 'Thursday',
  format: 'Virtual, live and small-group',
  registrationOpens: 'November 2026',
  cohorts: [
    {name: 'Winter/Spring cohort', start: '2027-01-21', end: '2027-04-22', label: 'January 21 to April 22, 2027', first: true},
    // REPLACE: confirm the year and the weekday (September 11 and December 11 are not Thursdays in 2026 or 2027).
    {name: 'Fall cohort', start: '', end: '', label: 'September 11 to December 11', first: false},
  ],
  /** The 14 sessions. REPLACE if the opening and closing sessions split differently. */
  structure: [
    {count: 1, title: 'Opening session', body: 'We arrive, meet one another and set the ground for the work ahead.'},
    {count: 7, title: 'Framework sessions', body: 'One session for each of the seven levels, from Space to Spirituality.'},
    {count: 2, title: 'Mediation specialization', body: 'Bringing the Seven Levels into the mediation room.'},
    {count: 2, title: 'Conflict coaching specialization', body: 'Bringing the Seven Levels into one-to-one conflict coaching.'},
    {count: 2, title: 'Closing and open AMA', body: 'Integration, reflection and an open ask-me-anything with Ian.'},
  ],
};
