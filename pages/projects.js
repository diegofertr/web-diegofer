import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
            {/*<div className="my-10">
              <Image src="/web-development.svg" alt="Vercel Logo" width={472} height={416} />
            </div>*/}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                  <img
                    src="https://play-lh.googleusercontent.com/g1gXUEJkWJOLnnWd2ersOCSMSD2vCu6nZhno-crkYWnaN_7B_mdX8b3Aei2UuPXjVNg=w240-h480-rw"
                    alt=""
                    className="object-cover w-full lg:absolute h-80 lg:h-full"
                  />
                  <svg
                    className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                    viewBox="0 0 20 104"
                    fill="currentColor"
                  >
                    <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                      Mobile
                    </p>
                  </div>
                  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                    App Colegio Alemán
                  </h5>
                  <p className="mb-5 text-gray-800">
                    <span className="font-bold">App Colegio Alemán</span> es una aplicación móvil que sirve para
                    llevar el control de permisos, tareas y anotaciones de los hijos, además de gestionar las clases
                    para los profesores. Esta aplicación está disponible tanto para iOs como Android.
                  </p>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      aria-label=""
                    >
                      <div className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">
                        Leer más
                        <svg
                          className="inline-block w-3 ml-2"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
