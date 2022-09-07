import Head from "next/head";
import Link from "next/link";
// import Image from 'next/image'
import Layout from "../components/layout";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>404 - diegofer</title>
        <meta name="description" content="404 - diegofer" />
      </Head>

      <div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div className="text-left mt-12 px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Página no encontrada
            </h2>

            <Link href="/">
              <div className="p-3 bg-blue-600 text-gray-100 my-5 rounded-md text-center uppercase font-semibold cursor-pointer">
                Volver al inicio
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
