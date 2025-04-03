import React from 'react';

export const MagicBook = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 6.5c-6-1-10 1-10 4.5v7c0 3.5 4 5.5 10 4.5 6 1 10-1 10-4.5v-7c0-3.5-4-5.5-10-4.5z" />
    <path d="M12 6.5v11.5" />
    <path d="M9 8.5c2-.5 4-.5 6 0" />
    <path d="M8 11.5c2.5-.7 5.5-.7 8 0" />
    <path d="M7 14.5c3-1 7-1 10 0" />
  </svg>
);

export const MagicFeather = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 20l2-2m4-4l2-2m4-4l2-2" strokeLinecap="round" />
    <path d="M20.2 3.8c-2-2-5.1-2-7.1 0L4 12.9V20h7.1l9.1-9.1c2-2 2-5.1 0-7.1z" />
    <path d="M9 15c2-2 4-2 6 0" strokeLinecap="round" />
  </svg>
);

export const MagicSparkles = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.5-7.5l-2 2m-9 9l-2 2m13-2l2 2m-13-13l-2-2" strokeLinecap="round" />
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M12 13.5l1.5-1.5-1.5-1.5-1.5 1.5z" />
  </svg>
);

export const SocialIcons = {
  Facebook: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
    </svg>
  ),
  X: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l16 16m0-16L4 20" strokeLinecap="round" />
      <path d="M12 8l-2 8m4-8l-2 8" strokeLinecap="round" />
    </svg>
  ),
  Instagram: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" strokeLinecap="round" />
    </svg>
  ),
  LinkedIn: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
};