"use client";

import { useEffect } from "react";

export default function DynamicFaviconHandler() {
  useEffect(() => {
    console.log("DynamicFaviconHandler: useEffect running");

    const updateFavicon = () => {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log(`DynamicFaviconHandler: isDarkMode = ${isDarkMode}`);

      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        const timestamp = new Date().getTime(); // Unique timestamp for cache-busting
        const faviconUrl = isDarkMode 
          ? `/favicon-dark-mode.ico?${timestamp}` 
          : `/favicon.ico?${timestamp}`;

        console.log(`DynamicFaviconHandler: Updating favicon to ${faviconUrl}`);

        // Add load and error event listeners for debugging
        favicon.onload = () => {
          console.log("Favicon loaded successfully:", faviconUrl);
        };
        favicon.onerror = () => {
          console.error("Failed to load favicon:", faviconUrl);
        };

        favicon.setAttribute('href', faviconUrl);
      } else {
        console.error("DynamicFaviconHandler: Favicon <link> tag not found");
      }
    };

    updateFavicon(); 

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeMediaQuery.addEventListener("change", updateFavicon);

    return () => darkModeMediaQuery.removeEventListener("change", updateFavicon);
  }, []);

  return null;
}