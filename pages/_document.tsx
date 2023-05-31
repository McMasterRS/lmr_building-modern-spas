import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,300i,700,700i|Roboto+Condensed:400,400i,700,700i|&display=swap"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
