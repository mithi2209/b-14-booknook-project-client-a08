import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ThemeProvider from "@/components/theme-provider/ThemeProvider";

const josefinSans= Josefin_Sans({
 
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "BookNook",
    template: "%s",
  },
  description: "Discover your next favorite book at BookNook.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefinSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
        {children} 
        </ThemeProvider>
         <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
