

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="booknook-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider ;











