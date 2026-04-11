import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Footer from "@/component/footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}