import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle modern background pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_top_right,rgba(16,185,129,0.15),transparent),radial-gradient(800px_500px_at_bottom_left,rgba(244,63,94,0.12),transparent)]" />

      <Header />
      <About />
      <MenuSection />
      <Footer />
    </div>
  );
}
