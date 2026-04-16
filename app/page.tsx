import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Facts from "@/component/fact";
import Sdg from "@/component/sdg"
import Footer from "@/component/footer";
import Swot1 from "@/component/swot1";
import Swot2 from "@/component/swot2";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Facts />
      <Sdg />
      <Swot1 />
      <Swot2 />
      <Footer />
    </main>
  );
}