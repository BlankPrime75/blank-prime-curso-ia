import { Hero } from "@/components/sections/Hero";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CtaBand } from "@/components/CtaBand";
import { Problem } from "@/components/sections/Problem";
import { Agitation } from "@/components/sections/Agitation";
import { Solution } from "@/components/sections/Solution";
import { Differentials } from "@/components/sections/Differentials";
import { Curriculum } from "@/components/sections/Curriculum";
import { Outcome } from "@/components/sections/Outcome";
import { Audience } from "@/components/sections/Audience";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-bp-bg">
      <Hero />
      <Problem />
      <Agitation />
      <Solution />
      <CtaBand
        origem="pos-solucao"
        titulo="Já entendeu o método. Bora pra prática?"
        subtitulo="Inscrição direta e segura pelo Sympla. Você escolhe o ingresso e já está na turma."
        cta="Quero garantir minha vaga"
      />
      <Differentials />
      <Curriculum />
      <Outcome />
      <CtaBand
        origem="pos-resultado"
        titulo="Isso tudo na sua mão em 4 encontros."
        subtitulo="As vagas são limitadas e a turma fecha ao completar. Garanta a sua pelo Sympla."
        cta="Inscrever agora"
      />
      <Audience />
      <FinalCta />
      <StickyMobileCta />
      <FloatingWhatsApp />
    </main>
  );
}
