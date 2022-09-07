import Head from "next/head";
// import Image from 'next/image'
import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Proyectos - diegofer</title>
        <meta name="description" content="Proyectos - diegofer" />
      </Head>

      <div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div className="text-left mt-12 px-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Mis proyectos
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
