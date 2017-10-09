import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>Hongklay - Donation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Site Description Here" />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>{'I`m here to stay'}</footer>
  </div>
)
