import { PointerEffects } from "./PointerEffects";

/** Fixed, decorative background shared by every page. */
export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden>
      <div className="orb-track parallax-down -right-[12vw] -top-[22vw] w-[62vw] min-w-[34rem]">
        <div className="orb orb-a" />
      </div>
      <div className="orb-track parallax-up -left-[14vw] top-[46vh] w-[48vw] min-w-[28rem]">
        <div className="orb orb-b" />
      </div>
      <div className="atmosphere-grid-mask">
        <div className="atmosphere-grid" />
      </div>
      <PointerEffects />
      <div className="atmosphere-vignette" />
      <div className="atmosphere-noise" />
    </div>
  );
}
