import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaurya Kumar - Portfolio"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
            {children}
            <Toaster/>
          </ThemeProvider>  

      </body>
    </html>
  );
}
