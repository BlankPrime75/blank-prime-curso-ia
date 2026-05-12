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

// ─── Urgência: contador de vagas ───────────────────────────────────────
// Atualizar manualmente conforme inscrições. Quando > 0, aparece como
// "X de 30 vagas preenchidas" no Hero e na seção final, criando escassez
// tangível. Quando 0, omite o contador (só mostra "Vagas limitadas").
export const TURMA_TOTAL_VAGAS = 30;
export const TURMA_VAGAS_PREENCHIDAS = 0; // ajustar conforme entrarem inscrições
