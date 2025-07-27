import React from "react";

export const AquionLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Water drop icon */}
      <path
        d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z"
        fill="url(#gradient1)"
        stroke="#0066CC"
        strokeWidth="1.5"
      />
      
      {/* Aquion text */}
      <text
        x="38"
        y="26"
        fill="#0066CC"
        fontSize="20"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Aquion
      </text>
      
      <defs>
        <linearGradient id="gradient1" x1="20" y1="8" x2="20" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#87CEEB" />
          <stop offset="1" stopColor="#0066CC" />
        </linearGradient>
      </defs>
    </svg>
  );
};