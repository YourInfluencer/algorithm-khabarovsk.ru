import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site.config.js";

export default function Seo({ title, description, path = "/", noindex = false }) {
  const canonical = `${SITE.domain}${path}`;
  const fullTitle = title ? `${title} — ${SITE.brand}` : SITE.brand;

  const ogImage = `${SITE.domain}/og-cover.webp`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      <link rel="canonical" href={canonical} />

      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}