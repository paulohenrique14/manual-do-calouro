import { useState } from "react";

const faqItems = [
  {
    title: "Como faço para me matricular na UFSC?",
    body: "A matrícula é feita pelo portal do aluno da UFSC. Você precisa ter sido aprovado no vestibular ou processo seletivo. Acesse o portal do aluno e siga as instruções para confirmação de matrícula. Prazo: geralmente no início do semestre.",
  },
  {
    title: "Onde fica a biblioteca central?",
    body: "A Biblioteca Universitária (BU) fica no Campus Reitor João David Ferreira Lima (Reitoria). Endereço: Rua Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC. Horário: segunda a sexta, 8h às 22h.",
  },
  {
    title: "Quais são os horários das aulas?",
    body: "Os horários variam por curso e semestre. Consulte o currículo no portal do aluno ou site do departamento. Normalmente: manhã (7h30–11h50), tarde (13h30–18h) e noite (18h30–22h).",
  },
  {
    title: "Como funciona o sistema de bolsas e auxílios?",
    body: "A UFSC oferece bolsas de estudo, pesquisa e extensão. Para auxílios financeiros, inscreva-se no Programa de Assistência Estudantil (PAE) via ufsc.br/pae. Requisitos incluem renda familiar e desempenho acadêmico.",
  },
  {
    title: "Onde posso comer no campus?",
    body: "Há restaurantes universitários (RU) e lanchonetes nos campi. No Campus Trindade, o RU está próximo ao Centro de Convivência. Consulte o site da UFSC para horários e valores.",
  },
  {
    title: "Como entro em contato com o CAEC?",
    body: "O Centro Acadêmico (CAEC) tem e-mail e redes sociais, e também costuma falar no canal do curso. Procure o contato atualizado no site do CAEC ou na página da engenharia.",
  },
];

export default function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index]
    );
  };

  return (
    <section style={{ marginTop: "1rem" }}>
      {faqItems.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={item.title}
            style={{
              marginBottom: "0.75rem",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "8px",
              overflow: "hidden",
              background: "rgba(15,23,42,0.5)",
            }}
          >
            <button
              onClick={() => toggleIndex(index)}
              style={{
                width: "100%",
                textAlign: "left",
                background: isOpen ? "rgba(56,189,248,0.12)" : "rgba(0,0,0,0.03)",
                color: "var(--nextra-text, #e2e8f0)",
                border: "none",
                padding: "14px 16px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {item.title}
              <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{isOpen ? "▾" : "▸"}</span>
            </button>
            {isOpen && (
              <div style={{ padding: "14px 16px", background: "rgba(15,23,42,0.4)", color: "var(--nextra-text, #e2e8f0)" }}>
                <p style={{ margin: 0 }}>{item.body}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
