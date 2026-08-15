import {
  useEffect,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { stages } from "../data/stages";
import Reveal from "./Reveal";

type StageNavigationProps = {
  activeIndex: number;
  onChange: (index: number) => void;
};

type ProgressStyle = CSSProperties & {
  "--progress": string;
};

export default function StageNavigation({
  activeIndex,
  onChange,
}: StageNavigationProps) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const progress = `${((activeIndex + 1) / stages.length) * 100}%`;

  useEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeIndex];
    if (!tabList || !activeTab) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const tabListRect = tabList.getBoundingClientRect();
    const activeTabRect = activeTab.getBoundingClientRect();
    const left =
      tabList.scrollLeft +
      activeTabRect.left -
      tabListRect.left -
      (tabListRect.width - activeTabRect.width) / 2;

    tabList.scrollTo({
      left,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex]);

  function activateTab(index: number) {
    if (index !== activeIndex) onChange(index);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowLeft":
        nextIndex = (index - 1 + stages.length) % stages.length;
        break;
      case "ArrowRight":
        nextIndex = (index + 1) % stages.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = stages.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateTab(nextIndex);
  }

  return (
    <Reveal delay={80} className="stages-navigation">
      <div
        ref={tabListRef}
        className="stages-tabs"
        role="tablist"
        aria-label="Etapas do projeto"
        aria-orientation="horizontal"
      >
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`tab-${stage.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`panel-${stage.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => onChange(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            className="stages-tab focus-ring"
          >
            {stage.milestone ? (
              <>
                <span className="stages-tab-star" aria-hidden="true">
                  ★
                </span>
                {stage.title}
              </>
            ) : (
              <>
                <span className="stages-tab-number">{stage.tag}</span>
                {stage.title}
              </>
            )}
          </button>
        ))}
      </div>

      <div className="stages-progress" aria-hidden="true">
        <div
          className="stages-progress-bar"
          style={{ "--progress": progress } as ProgressStyle}
        />
      </div>
    </Reveal>
  );
}
