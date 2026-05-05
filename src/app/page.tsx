import { Hero } from "@/components/sections/Hero";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Problem } from "@/components/sections/Problem";
import { Agitation } from "@/components/sections/Agitation";
import { Solution } from "@/components/sections/Solution";
import { Differentials } from "@/components/sections/Differentials";
import { Curriculum } from "@/components/sections/Curriculum";
import { Outcome } from "@/components/sections/Outcome";
import { SocialProof } from "@/components/sections/SocialProof";
import { Audience } from "@/components/sections/Audience";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-bp-bg">
      <Hero />
      <Problem />
      <Agitation />
      <Solution />
      <Differentials />
      <Curriculum />
      <Outcome />
      <SocialProof />
      <Audience />
      <FinalCta />
      <StickyMobileCta />
    </main>
  );
}
