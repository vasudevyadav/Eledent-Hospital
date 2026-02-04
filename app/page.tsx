import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>

        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
      </main>
    </div>
  );
}
