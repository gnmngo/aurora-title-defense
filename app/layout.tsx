import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProgressBar from "@/components/ui/ProgressBar";

export const metadata: Metadata = {
  title: "AURORA — Title Defense",
  description: "Title Defense presentation for AURORA paperless capstone defense system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && osDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <ProgressBar />
        <div className="flex max-w-[1340px] mx-auto px-4 gap-6 items-start">
          {/* Sidebar – hidden on mobile, sticky on desktop */}
          <Sidebar />
          <main className="flex-1 py-8 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}