import { useState } from 'react';

/**
 * Renders a pizza photo, but degrades gracefully to a branded gradient +
 * icon tile if the source image fails to load (e.g. a third-party photo
 * API is down or a URL is stale) instead of showing a broken-image icon.
 */
const PizzaImg = ({ src, alt = '', className = '' }) => {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`pizza-img-fallback ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 64 64" width="42%" height="42%">
          <path
            d="M32 8 L54 46 A24 24 0 0 1 10 46 Z"
            fill="rgba(255,255,255,0.9)"
          />
          <circle cx="27" cy="30" r="2.6" fill="var(--brand)" />
          <circle cx="37" cy="27" r="2.3" fill="var(--brand)" />
          <circle cx="32" cy="37" r="2" fill="var(--brand)" />
          <circle cx="39" cy="36" r="1.7" fill="var(--brand)" />
        </svg>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default PizzaImg;
