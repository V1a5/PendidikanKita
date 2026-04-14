import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Facts from "@/component/fact";
import Sdg from "@/component/sdg"
import Footer from "@/component/footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Facts />
      <Sdg />
      <Footer />
    </main>
  );
}