import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt =
  "Ouattara Yah — Développeuse Web & Intégratrice Dolibarr ERP/CRM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INDIGO = "#2b2f77";
const GOLD = "#b8934a";
const GOLD_TEXT = "#846420";
const MUTED = "#5d6070";

/** Image de partage (Open Graph) générée au build : aucun fichier binaire à maintenir. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fbf9f4",
          color: "#1c1c28",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            color: INDIGO,
          }}
        >
          {profile.brand.replace(/\.$/, "")}
          <span style={{ color: GOLD }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 700,
              lineHeight: 1.05,
              color: INDIGO,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 40,
              color: MUTED,
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              display: "flex",
              width: 140,
              height: 6,
              marginTop: 40,
              background: GOLD,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: GOLD_TEXT,
          }}
        >
          Portfolio
        </div>
      </div>
    ),
    { ...size },
  );
}
