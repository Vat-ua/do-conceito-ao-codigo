import { useState } from "react";
import { stages } from "../data/stages";
import Reveal from "./Reveal";
import StageNavigation from "./StageNavigation";

export default function Stages() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <div className="stages">
      <StageNavigation activeIndex={active} onChange={setActive} />

      <div
        role="tabpanel"
        id={`panel-${stage.id}`}
        aria-labelledby={`tab-${stage.id}`}
        tabIndex={0}
        key={stage.id}
        className="stages-panel reveal is-visible"
      >
        <div className="stages-content">
          <p className="stages-kicker">
            {stage.milestone ? "Conquista" : `Etapa ${stage.tag}`}
          </p>

          <h3 className="stages-title">{stage.sub}</h3>

          <p className="stages-body">{stage.body}</p>

          <ul className="stages-list">
            {stage.bullets.map((bullet) => (
              <li key={bullet}>
                <span className="list-marker" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="stages-code browser-frame">
          <div className="browser-frame-toolbar">
            <span className="browser-frame-window-dot" />
            <span className="browser-frame-window-dot" />
            <span className="browser-frame-window-dot" />
            <span className="browser-frame-file-label">
              {stage.id}.{stage.lang}
            </span>
          </div>

          <pre>
            <code>{stage.code}</code>
          </pre>
        </Reveal>
      </div>
    </div>
  );
}
