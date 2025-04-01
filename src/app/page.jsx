import Link from "next/link";

import LandingHero from "@/components/LandingHero";

export default async function Home() {
  return (
    <div className=" h-screen">
      <div className="h-3/4 content-center">
      <LandingHero />


      </div>
     

    </div>
  );
}
