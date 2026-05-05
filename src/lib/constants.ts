// TODO: trocar XXXXXXXXXXX pelo número real do WhatsApp da Sofia (formato 55DDDXXXXXXXX, sem espaços/hífens)
const SOFIA_PHONE = "55XXXXXXXXXXX";

const DEFAULT_MESSAGE =
  "Oi Sofia, quero saber mais sobre o curso IA para Empresários da Blank Prime";

export const SOFIA_WHATSAPP = `https://wa.me/${SOFIA_PHONE}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

export const SOFIA_WHATSAPP_DATAS = `https://wa.me/${SOFIA_PHONE}?text=${encodeURIComponent(
  "Oi Sofia, quero saber as datas e o investimento do curso IA para Empresários"
)}`;

// ─── Urgência: contador de vagas ───────────────────────────────────────
// Atualizar manualmente conforme inscrições. Quando > 0, aparece como
// "X de 30 vagas preenchidas" no Hero e na seção final, criando escassez
// tangível. Quando 0, omite o contador (só mostra "Vagas limitadas").
export const TURMA_TOTAL_VAGAS = 30;
export const TURMA_VAGAS_PREENCHIDAS = 0; // ajustar conforme entrarem inscrições
