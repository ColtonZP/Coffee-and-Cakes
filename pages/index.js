import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Coffee Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Inedex</h1>
            </main>

            <footer></footer>
        </div>
    )
}
