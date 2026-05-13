// Disparo de eventos pro Meta Pixel (já instalado no layout, id 1445962156817090).
// Eventos padrão (track) aparecem no Gerenciador de Eventos sem configuração;
// eventos custom (trackCustom) você cria/usa como conversões personalizadas.

type FbqFn = (
  method: "track" | "trackCustom",
  event: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
  }
}

function fire(
  method: "track" | "trackCustom",
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.(method, event, params);
  } catch {
    /* pixel ainda não carregou — ignora */
  }
}

const CONTENT = {
  content_name: "Curso IA para Empresários — 3ª edição",
  content_category: "curso-presencial",
};

/** Clique em qualquer botão que leva ao checkout do Sympla.
 *  Dispara só o custom CliqueSympla. NÃO disparamos InitiateCheckout
 *  aqui — esse é o evento padrão do Meta pra quando a pessoa realmente
 *  inicia a finalização da compra (que acontece no Sympla, depois de
 *  adicionar o ingresso ao carrinho). Disparar nos dois lugares duplica
 *  o evento e dificulta ler o funil real no Gerenciador de Eventos. */
export function trackSymplaClick(origem: string) {
  fire("trackCustom", "CliqueSympla", { ...CONTENT, origem });
}

/** Clique em qualquer botão/FAB de WhatsApp. */
export function trackWhatsAppClick(origem: string) {
  fire("track", "Contact", { ...CONTENT, canal: "whatsapp", origem });
  fire("trackCustom", "CliqueWhatsApp", { origem });
}

/** Clique numa âncora interna que rola pra uma seção (CTA "soft"). */
export function trackAnchorClick(destino: string) {
  fire("trackCustom", "CliqueAncora", { destino });
}
