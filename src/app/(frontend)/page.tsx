import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-end mb-[6px]">
        <ModeToggle />
      </div>

      <Main />
      <Footer />
    </div>
  );
}
