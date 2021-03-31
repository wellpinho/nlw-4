import Document, { Html, Head, Main, NextScript } from 'next/document'

// tudo que for estático é colocado aqui porque 
// carrega uma unica vez
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/x-png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />
        </Head>

        <body>
          {/* main é onde exibe o app.tsx */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}