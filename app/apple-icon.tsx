import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icône d'écran d'accueil (iOS) : même monogramme que `icon.svg`. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2b2f77",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path
            d="M18 17 L32 36 L46 17 M32 36 V50"
            fill="none"
            stroke="#fbf9f4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="47" cy="48" r="4.5" fill="#b8934a" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
