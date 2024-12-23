import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata = {
  title: "Rabbit hole",
  description: "Generated by The DREAMTEAM",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
