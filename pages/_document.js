import { Html, Head, Main, NextScript } from 'next/document'
          /*
          <script src="/bootstrap.js"></script>
          <script src="/jquery-3.4.1.min.js"></script>
          */

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="/style.css" rel="stylesheet" />
          <link href="/responsive.css" rel="stylesheet" />
          <link href="/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  )
}
