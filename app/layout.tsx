import './globals.css'

export const metadata = {
  title: "Febin Joseph - Portfolio",
  description:
    "Febin Joseph - Hybrid & Native mobile application developer based in Kerala, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
