export interface LinkParams {
  locale: 'fr' | 'en' | 'ar';
  slug?: string;
}

export function link({ locale, slug = '' }: LinkParams): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const path = slug ? `${locale}/${slug}` : locale;
  
  // Ensure proper trailing slash
  const fullPath = `${baseUrl}${path}`.replace(/\/+/g, '/');
  return fullPath.endsWith('/') ? fullPath : `${fullPath}/`;
}

export function getCurrentLocale(pathname: string): 'fr' | 'en' | 'ar' {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = pathname.replace(baseUrl, '').split('/')[0];
  
  if (cleanPath === 'en' || cleanPath === 'ar') {
    return cleanPath;
  }
  return 'fr'; // Default locale
}

export function getAlternateUrls(currentPath: string): Record<string, string> {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const pathWithoutBase = currentPath.replace(baseUrl, '');
  const pathSegments = pathWithoutBase.split('/').filter(Boolean);
  
  // Remove locale from path segments
  const pageSlug = pathSegments.length > 1 ? pathSegments.slice(1).join('/') : '';
  
  return {
    fr: link({ locale: 'fr', slug: pageSlug }),
    en: link({ locale: 'en', slug: pageSlug }),
    ar: link({ locale: 'ar', slug: pageSlug }),
  };
}