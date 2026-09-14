import Script from "next/script";

export default function AdsLandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/lp/css/styles.css" />
        <link rel="icon" href="/lp/assets/logo.png" type="image/png" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/lp/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
