import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
