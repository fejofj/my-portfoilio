import "./globals.css";

export const metadata = {
  title: "Febin K Joseph — Senior Software Engineer",
  description:
    "Backend Senior Software Engineer with 5 years of experience building Node.js services for telecom systems. Based in Kerala, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-0 bg-bgColor text-white antialiased">
        {children}
      </body>
    </html>
  );
}
