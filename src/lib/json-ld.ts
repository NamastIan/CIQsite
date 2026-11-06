import {SITE} from '../content/site';
import {absoluteUrl, siteOrigin} from './site-url';

/**
 * Structured data (schema.org JSON-LD) for search engines, rendered by
 * `src/layouts/Base.astro` as `<script type="application/ld+json">`. That is a
 * data block, never executed, so the CSP does not apply to it; it is built
 * only from this repo's own content (`SITE`, post front matter).
 *
 * Only facts that are visible on the page (Google's rule): a name, a date, an
 * author. Absolute URLs only when the site's address is known (site-url.ts).
 */
export type JsonLd = Record<string, unknown>;

/** JSON safe inside `<script>`: no `</script>`, no `<!--`. */
export function jsonLdText(data: JsonLd): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

const ids = () => {
  const origin = siteOrigin();
  return origin ? {website: `${origin}/#website`, organization: `${origin}/#organization`} : null;
};

/** The home page's `WebSite` + `Organization` (the site name in search results). */
export function siteJsonLd(): JsonLd {
  const home = absoluteUrl('/');
  const id = ids();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        ...(id && {'@id': id.website}),
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.lang,
        ...(home && {url: home}),
        ...(id && {publisher: {'@id': id.organization}}),
      },
      {
        '@type': ['Organization', 'EducationalOrganization'],
        ...(id && {'@id': id.organization}),
        name: SITE.name,
        description: SITE.description,
        slogan: SITE.tagline,
        parentOrganization: {'@type': 'Organization', name: SITE.parent},
        founder: {'@type': 'Person', name: 'Ian Renaud'},
        ...(home && {url: home}),
      },
    ],
  };
}

/** A blog post's `BlogPosting`, from its front matter. */
export function postJsonLd(post: {
  path: string;
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  author?: string;
  image?: string;
}): JsonLd {
  const url = absoluteUrl(post.path);
  const image = post.image ? absoluteUrl(post.image) : null;
  const id = ids();
  const organization = {'@type': 'Organization', ...(id && {'@id': id.organization}), name: SITE.name};
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt.toISOString(),
    dateModified: (post.updatedAt ?? post.publishedAt).toISOString(),
    author: post.author ? {'@type': 'Person', name: post.author} : organization,
    publisher: organization,
    inLanguage: SITE.lang,
    ...(url && {url, mainEntityOfPage: url}),
    ...(image && {image}),
  };
}

const organizationRef = () => {
  const id = ids();
  return {'@type': 'Organization', ...(id && {'@id': id.organization}), name: SITE.name};
};

/** Questions and answers shown on the page, word for word (`FAQPage`). */
export function faqJsonLd(path: string, items: {q: string; a: string}[]): JsonLd {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(url && {url}),
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {'@type': 'Answer', text: item.a},
    })),
  };
}

/** A term the page defines (`DefinedTerm`), e.g. Conflict Intelligence. */
export function definedTermJsonLd(path: string, term: {name: string; alternateName?: string; description: string}): JsonLd {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.name,
    ...(term.alternateName && {alternateName: term.alternateName}),
    description: term.description,
    ...(url && {url}),
    inDefinedTermSet: {'@type': 'DefinedTermSet', name: 'Conflict Intelligence Training glossary'},
  };
}

/** Several JSON-LD objects for one page, as one `@graph`. */
export function graph(...items: JsonLd[]): JsonLd {
  return {'@context': 'https://schema.org', '@graph': items.map(({'@context': _, ...rest}) => rest)};
}

/** A course with its offers and runs (`Course` + `CourseInstance`): only facts the page shows. */
export function courseJsonLd(course: {
  path: string;
  name: string;
  description: string;
  credential: string;
  hours: number;
  offers: {price: string; currency: string; name: string}[];
  instances: {name: string; start?: string; end?: string}[];
}): JsonLd {
  const url = absoluteUrl(course.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: organizationRef(),
    educationalCredentialAwarded: course.credential,
    timeRequired: `PT${course.hours}H`,
    inLanguage: SITE.lang,
    ...(url && {url}),
    offers: course.offers.map(offer => ({'@type': 'Offer', name: offer.name, price: offer.price, priceCurrency: offer.currency, category: 'Paid', ...(url && {url})})),
    hasCourseInstance: course.instances.map(run => ({
      '@type': 'CourseInstance',
      name: run.name,
      courseMode: 'Online',
      ...(run.start && {startDate: run.start}),
      ...(run.end && {endDate: run.end}),
    })),
  };
}

/** A product for sale (`Product` + `Offer`). */
export function productJsonLd(product: {path: string; name: string; description: string; price: string; currency: string; image?: string}): JsonLd {
  const url = absoluteUrl(product.path);
  const image = product.image ? absoluteUrl(product.image) : null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: organizationRef(),
    ...(image && {image}),
    offers: {'@type': 'Offer', price: product.price, priceCurrency: product.currency, availability: 'https://schema.org/InStock', ...(url && {url})},
  };
}

/** A book (`Book`), free or not. */
export function bookJsonLd(book: {path: string; name: string; description: string; author?: string; pages?: number; audience?: string}): JsonLd {
  const url = absoluteUrl(book.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.name,
    description: book.description,
    ...(book.author && {author: {'@type': 'Person', name: book.author}}),
    publisher: organizationRef(),
    ...(book.pages && {numberOfPages: book.pages}),
    ...(book.audience && {audience: {'@type': 'Audience', audienceType: book.audience}}),
    isAccessibleForFree: true,
    ...(url && {url}),
  };
}
