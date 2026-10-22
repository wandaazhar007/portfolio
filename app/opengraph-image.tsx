import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Wanda Azhar | WordPress Developer & Web Designer in Twin Falls, Idaho";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/wanda-azhar.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "linear-gradient(135deg, #ececec 0%, #D1D7D7 100%)",
          color: "#314755",
        }}
      >
        <img
          src={photoSrc}
          width={280}
          height={280}
          alt=""
          style={{ borderRadius: 140, border: "8px solid #FFFFFF" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700 }}>Wanda Azhar</div>
          <div style={{ fontSize: 40, color: "#3e5d6e" }}>WordPress Developer & Web Designer</div>
          <div style={{ fontSize: 30, color: "#D87E53" }}>Twin Falls, Idaho, United States</div>
        </div>
      </div>
    ),
    size
  );
}
