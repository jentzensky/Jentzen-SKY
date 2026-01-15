import React, { useEffect } from 'react';
import { useContent } from '../context/ContentContext';

export const SEOManager: React.FC = () => {
  const { content } = useContent();

  useEffect(() => {
    // Update Title
    document.title = content.seo.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.seo.description);
    
    // OG Tags (Optional but good for SEO)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', content.seo.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', content.seo.description);

  }, [content.seo]);

  return null;
};
