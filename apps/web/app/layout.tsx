import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement OS",
  description: "University placement management"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
