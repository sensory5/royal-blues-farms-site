import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container my-4">

      <Head>
        <title>The title goes here</title>
        <meta name="description" content="Description of the page here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="d-flex justify-content-center">
          Welcome to <span className="text-primary">Royal Blues Farms</span>
        </h1>

          <div className="d-flex justify-content-center">
              <div className="alert alert-primary alert-dismissible fade show w-50" role="alert">
                  <strong>Edit this file</strong> in <code>pages/index.js</code>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
              </div>
          </div>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
