import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

const SITE_NAME = 'MSVP and CO';
const DEFAULT_IMAGE = '/og-image.png';

export function useSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  article,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (article?.publishedTime) {
      setMeta('article:published_time', article.publishedTime, true);
    }
    if (article?.author) {
      setMeta('article:author', article.author, true);
    }
  }, [title, description, canonical, ogType, ogImage, article]);
}

export function useStructuredData(data: object) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';

    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);
}
