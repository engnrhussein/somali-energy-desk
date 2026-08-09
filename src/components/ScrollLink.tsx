"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ScrollLink({ 
  href, 
  className, 
  children 
}: { 
  href: string, 
  className?: string, 
  children: React.ReactNode 
}) {
  const pathname = usePathname();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      const targetPath = href.split('#')[0] || '/';
      
      // If we are already on the correct page, take over the scroll behavior
      if (pathname === targetPath) {
        const el = document.getElementById(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          // Update the URL hash without triggering a Next.js router jump
          window.history.pushState({}, '', href);
        }
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
