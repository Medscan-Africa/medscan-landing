import "./globals.css";

export const metadata = {
  title:"Medscan",
  description:"This is the offcial landing page of Medscan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
