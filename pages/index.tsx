import Head from "next/head";
import PokemonOne from "@/components/PokemonOne";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100vh" }}>
        <div
          style={{
            margin: "0 auto",
            width: "40%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PokemonOne />
        </div>
      </main>
    </>
  );
}
