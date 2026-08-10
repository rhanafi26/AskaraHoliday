import React from 'react';

export const FlagIcon = ({ country, className = "w-6 h-4" }) => {
  if (country === 'id') {
    return (
      <svg className={className} viewBox="0 0 24 16" fill="none">
        <rect width="24" height="16" rx="1" fill="#E70000"/>
        <rect y="8" width="24" height="8" rx="1" fill="#FFFFFF"/>
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 16" fill="none">
      <rect width="24" height="16" rx="1" fill="#012169"/>
      <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="2"/>
      <path d="M0 8L24 8M12 0V16" stroke="#FFFFFF" strokeWidth="2"/>
      <path d="M0 4L24 12M0 12L24 4" stroke="#C8102E" strokeWidth="4"/>
      <path d="M0 6L24 10M0 10L24 6" stroke="#C8102E" strokeWidth="4"/>
    </svg>
  );
};