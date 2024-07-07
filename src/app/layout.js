import { Poppins } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
    title: "Vunontay Dev",
    description: "This is portfolio web application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={poppins.className}>
                <TransitionProvider>{children}</TransitionProvider>
            </body>
        </html>
    );
}
