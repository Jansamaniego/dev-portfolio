import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#f59e0b",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {site.role}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {site.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: "#a1a1aa",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
