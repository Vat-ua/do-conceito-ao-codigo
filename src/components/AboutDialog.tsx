import { useId, useRef, type MouseEvent } from "react";

const principles = [
  {
    number: "01",
    text: "Escolha uma ideia que você tenha vontade de levar adiante",
  },
  {
    number: "02",
    text: "Cada um avança no próprio ritmo e pode mudar, refazer ou parar quando quiser",
  },
  {
    number: "03",
    text: "O Liveler serve como referência para quem quiser um ponto de partida",
  },
] as const;

export default function AboutDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  return (
    <>
      <button
        type="button"
        className="about-trigger focus-ring"
        onClick={openDialog}
      >
        Sobre
      </button>

      <dialog
        ref={dialogRef}
        className="about-dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={handleBackdropClick}
      >
        <div className="about-dialog-panel">
          <header className="about-dialog-header">
            <p className="eyebrow">Uma iniciativa entre colegas</p>
            <button
              type="button"
              className="about-dialog-close focus-ring"
              aria-label="Fechar"
              onClick={closeDialog}
              autoFocus
            >
              <svg
                className="about-dialog-close-icon"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path d="M4.5 4.5 15.5 15.5M15.5 4.5 4.5 15.5" />
              </svg>
            </button>
          </header>

          <div className="about-dialog-body">
            <h2 id={titleId} className="about-dialog-title">
              Sem prazos. Sem obrigação. Com um projeto em mente
            </h2>

            <p id={descriptionId} className="about-dialog-description">
              Este não é um trabalho do curso nem uma atividade com roteiro
              fechado. É uma iniciativa independente entre colegas:
              um convite para escolher uma ideia e desenvolvê-la enquanto você aprende. </p>
            <ul className="about-dialog-principles">
              {principles.map((principle) => (
                <li key={principle.number}>
                  <span aria-hidden="true">{principle.number}</span>
                  <p>{principle.text}</p>
                </li>
              ))}
            </ul>

            <p className="about-dialog-note">
              Aprender fazendo, experimentar ideias e ver um projeto evoluir junto com o que você aprende.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
