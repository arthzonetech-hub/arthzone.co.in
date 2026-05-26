import type { CSSProperties } from "react";

/** Same grid texture as home hero + purple/cyan glow — reuse on contact + CTA sections. */
const GRID_SVG =
  'url("https://cdn.prod.website-files.com/67cc6e960496c50a6f716e6f/67dd8b51428826ae00811c7d_Group%20(1).svg")';

export const contactHeroBackground: CSSProperties = {
  backgroundColor: "#101010",
  backgroundImage: [
    "linear-gradient(180deg, rgba(16,16,16,0.78) 0%, rgba(16,16,16,0.9) 42%, rgba(12,12,14,0.96) 100%)",
    "radial-gradient(ellipse 110% 75% at 92% -8%, rgba(118,20,239,0.38), transparent 52%)",
    "radial-gradient(ellipse 55% 45% at 8% 95%, rgba(17,215,250,0.12), transparent 48%)", 
    GRID_SVG,
    "linear-gradient(#101010, #101010)",
  ].join(", "),
  backgroundPosition: "center, center, center, center top, center",
  backgroundSize: "auto, auto, auto, cover, auto",
  backgroundRepeat: "repeat, repeat, repeat, no-repeat, repeat",
};

/** Contact form block — `public/assets/images/contact_bg.png` + veil for readable form text. */
export const contactFormSectionBackground: CSSProperties = {
  backgroundColor: "#0a0a0c",
  backgroundImage: [
    "linear-gradient(180deg, rgba(8,8,10,0.58) 0%, rgba(8,8,10,0.22) 42%, rgba(8,8,10,0.58) 100%)",
    'url("public/assets/images/contact_bg.png")',
    "#0a0a0c",
  ].join(", "),
  backgroundPosition: "center, center, center",
  backgroundSize: "auto, cover, auto",
  backgroundRepeat: "no-repeat, no-repeat, repeat",
};

export const meetingMobileCtaBackground: CSSProperties = {
  backgroundColor: "#101010",
  backgroundImage: [
    "linear-gradient(180deg, rgba(16,16,16,0.9) 0%, rgba(16,16,16,0.94) 100%)",
    "radial-gradient(ellipse 100% 70% at 88% -5%, rgba(118,20,239,0.3), transparent 50%)",
    GRID_SVG,
    "linear-gradient(#101010, #101010)",
  ].join(", "),
  backgroundPosition: "center, center, center top, center",
  backgroundSize: "auto, auto, cover, auto",
  backgroundRepeat: "repeat, repeat, no-repeat, repeat",
};
