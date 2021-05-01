import Head from 'next/head'
import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ez.lol chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">chat</h1>
        <AblyChatComponent />
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 1fr 100px;
          min-height: 100vh;
          background-color: #000000;
        }

        main {
          display: grid;
          grid-template-rows: auto 1fr;
          width: calc(100% - 40px);
          max-width: 900px;
          margin: 20px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.2);
          background-color: white;
        }

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          margin: 0;
          color: white;
          background: #005C97;
          background: -webkit-linear-gradient(to right, #363795, #005C97);
          background: linear-gradient(to right, #363795, #005C97);
        }

        footer {
          display: none;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 0px;
          height: 0px;
        }
       
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Monaco, monospace;
        }
        
      `}</style>
    </div>
  )
}
