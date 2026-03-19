import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eddie Chang | Co-CEO, KinoLights",
  description:
    "From patent attorney to VC director to content company Co-CEO. Eddie Chang's career story and vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
