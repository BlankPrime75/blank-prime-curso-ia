// ─── Checkout (Sympla) ────────────────────────────────────────────────
// A pessoa compra direto pelo Sympla, sem precisar falar com ninguém.
export const SYMPLA_CHECKOUT =
  "https://www.sympla.com.br/evento/ia-para-empresarios-3-edicao-curso-presencial-em-canoas-rs/3422924";

// ─── WhatsApp de dúvidas ──────────────────────────────────────────────
// Botão flutuante: lead que precisar tira dúvida aqui.
// Número informado: +55 51 9330-4978 (se estiver incompleto, ajustar abaixo)
export const WHATSAPP_DUVIDAS_PHONE = "555193304978";
const WHATSAPP_DUVIDAS_MSG =
  "Olá! Tenho uma dúvida sobre o curso IA para Empresários (3ª edição) da Blank Prime.";
export const WHATSAPP_DUVIDAS = `https://wa.me/${WHATSAPP_DUVIDAS_PHONE}?text=${encodeURIComponent(
  WHATSAPP_DUVIDAS_MSG,
)}`;

// Aliases mantidos pra não quebrar imports antigos — agora apontam pro Sympla.
export const SOFIA_WHATSAPP = SYMPLA_CHECKOUT;
export const SOFIA_WHATSAPP_DATAS = SYMPLA_CHECKOUT;
