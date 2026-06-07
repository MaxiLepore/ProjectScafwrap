"use client";

import { useId } from "react";

interface MateStudioBadgeProps {
  /**
   * When `true` (default) the badge is its own link to the Mate Studio site.
   * Set `false` to render a link-less `<span>` — used where the surrounding
   * markup already provides the link, so no nested anchors are produced.
   */
  asLink?: boolean;
}

export function MateStudioBadge({ asLink = true }: MateStudioBadgeProps) {
  const uid = useId().replace(/:/g, "");
  const clipTop = `ms-badge-top-${uid}`;
  const clipFr = `ms-badge-fr-${uid}`;
  const clipFl = `ms-badge-fl-${uid}`;

  const inner = (
    <span className="ms-badge__btn">
      <span className="ms-badge__word ms-badge__word--left">Mate</span>
      <svg className="ms-badge__icon" viewBox="0 0 75.66 80.58" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipTop}>
            <rect x="22.42" y="0" width="19.41" height="21.82" />
          </clipPath>
          <clipPath id={clipFr}>
            <rect x="47.21" y="64.44" width="28.44" height="16.15" />
          </clipPath>
          <clipPath id={clipFl}>
            <rect x="0" y="64.44" width="28.44" height="16.15" />
          </clipPath>
        </defs>
        <path
          className="ms-badge__body"
          d="M57.84,26.36v-4.34c0-1.41-1.14-2.55-2.55-2.55H20.36c-1.41,0-2.55,1.14-2.55,2.55v4.34c-7.2,3.92-12.09,11.55-12.09,20.33v7.61c0,11.13,9.02,20.15,20.15,20.15h23.9c11.13,0,20.15-9.02,20.15-20.15v-7.61c0-8.77-4.89-16.41-12.09-20.33Z"
        />
        <rect className="ms-badge__eye ms-badge__eye--default" x="24.13" y="41.26" width="4.4" height="11.4" rx="2.2" ry="2.2" />
        <rect className="ms-badge__eye ms-badge__eye--default" x="47.13" y="41.26" width="4.4" height="11.4" rx="2.2" ry="2.2" />
        <path className="ms-badge__eye ms-badge__eye--happy" d="M22.5,48 Q26.33,44 30.5,48" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        <path className="ms-badge__eye ms-badge__eye--happy" d="M45.5,48 Q49.33,44 53.5,48" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        <g clipPath={`url(#${clipTop})`}>
          <path
            className="ms-badge__bombilla"
            d="M32.62,8.85c-.15-.43-.63-.66-1.06-.51h.04s-1.66-4.7-1.66-4.7c-.1-.29-.43-.45-.72-.34l-3.82,1.35c-.29.1-.45.43-.34.72l1.66,4.69h.04c-.43.14-.66.62-.51,1.05s.63.66,1.06.51h-.04s9.69,27.39,9.69,27.39l4.88-1.72-9.69-27.38h-.04c.43-.14.66-.62.51-1.05Z"
          />
        </g>
        <g clipPath={`url(#${clipFr})`}>
          <circle className="ms-badge__foot" cx="61.43" cy="80.58" r="14.22" />
        </g>
        <g clipPath={`url(#${clipFl})`}>
          <circle className="ms-badge__foot" cx="14.22" cy="80.58" r="14.22" />
        </g>
      </svg>
      <span className="ms-badge__word ms-badge__word--right">Studio</span>
    </span>
  );

  if (!asLink) {
    return <span className="ms-badge ms-badge--light">{inner}</span>;
  }

  return (
    <a
      href="https://matestudio.co.nz/en"
      target="_blank"
      rel="noopener noreferrer"
      className="ms-badge ms-badge--light"
      aria-label="Diseñado por MateStudio"
    >
      {inner}
    </a>
  );
}
