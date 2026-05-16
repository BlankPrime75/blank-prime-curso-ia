// ─── Checkout (Sympla) ────────────────────────────────────────────────
// A pessoa compra direto pelo Sympla, sem precisar falar com ninguém.
export const SYMPLA_CHECKOUT =
  "https://www.sympla.com.br/evento/ia-para-empresarios-3-edicao-curso-presencial-em-canoas-rs/3422924";

// ─── WhatsApp da Aline (vendas + dúvidas) ─────────────────────────────
// Número oficial: +55 51 99330-4978 (13 dígitos com o 9 do celular).
// Usado tanto no FAB de dúvidas da land principal quanto em todos
// os CTAs da landing /junho (que é exclusivamente WhatsApp, sem Sympla).
export const WHATSAPP_DUVIDAS_PHONE = "5551993304978";

const WHATSAPP_DUVIDAS_MSG =
  "Olá! Tenho uma dúvida sobre o curso IA para Empresários (3ª edição) da Blank Prime.";
export const WHATSAPP_DUVIDAS = `https://wa.me/${WHATSAPP_DUVIDAS_PHONE}?text=${encodeURIComponent(
  WHATSAPP_DUVIDAS_MSG,
)}`;

// Mensagem pré-preenchida pra rota /junho (LP focada em conversa direta).
// Mantém o copy alinhado com o CTA visual "Quero saber do curso de IA de junho".
const WHATSAPP_JUNHO_MSG = "Quero saber do curso de IA de junho.";
export const WHATSAPP_JUNHO = `https://wa.me/${WHATSAPP_DUVIDAS_PHONE}?text=${encodeURIComponent(
  WHATSAPP_JUNHO_MSG,
)}`;

// Aliases mantidos pra não quebrar imports antigos — agora apontam pro Sympla.
export const SOFIA_WHATSAPP = SYMPLA_CHECKOUT;
export const SOFIA_WHATSAPP_DATAS = SYMPLA_CHECKOUT;
