import Head from "next/head";
import Link from "next/link";
import Footer from "./footer";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  // { name: 'Courses', href: '/courses' },
  // { name: 'Talks', href: '/talks' },
  // { name: 'Videos', href: '/tag/video' },
  { name: "About", href: "/about" },
];

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Projects I'm working on, iOS, Android, web, automation, mostly related to tech."
        />

        <meta property="og:site_name" content="diegofer.dev" />
        <meta property="og:image" content="https://diegofer.dev/image.png" />
        <meta
          property="og:title"
          content="diegofer.dev | Diego Fernando Ticona Ramos | Software Engineer - Fullstack Developer"
        />

        {/* <meta property="fb:app_id" content="269827340075535" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@diegofer" />
        <meta name="twitter:image" content="https://diegofer.dev/image.png" />
        <meta name="twitter:creator" content="@diegofertr" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Diego Fernando Ticona Ramos" />

        <meta name="theme-color" content="#0a84ff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/*<link rel="manifest" href="/site.webmanifest" />*/}
      </Head>

      <header className="sticky top-0 bg-white z-50">
        {/*<img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute object-cover w-full h-full"
          alt=""
        />*/}
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none">
            <div className="flex items-center">
              <Link href={`/`}>
                <a className="text-blue-600 text-2xl font-bold font-mono tracking-tighter hover:bg-blue-600 hover:text-white">
                  diegofer
                </a>
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <a className="text-base py-1 font-mono font-bold tracking-tighter lowercase text-blue-600 hover:text-white hover:bg-blue-600">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="https://twitter.com/intent/follow?screen_name=diegofertr"
                target="_blank"
                rel="noreferrer"
                className="inline-block font-mono font-bold bg-white py-2 px-4 border border-transparent tracking-tighter rounded-md text-base lowercase text-blue-600 hover:bg-blue-50"
              >
                Hire me
              </a>
            </div>
          </div>

          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link href={link.href} key={link.name}>
                <a
                  className={`text-base font-mono tracking-tighter font-bold lowercase text-blue-600 hover:text-white hover:bg-blue-600`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>

        {home && (
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <span className="relative inline-block text-gray-400">
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-4 -left-36 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
                </svg>
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline tracking-tighter font-mono">
                  diego
                </span>
                <span className="block text-blue-600 xl:inline font-mono tracking-tighter">
                  fer
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Hi! I&apos;m a software engineer. I share some projects and
                content I develop in my spare time. Most things are related to{" "}
                <span className="text-blue-500 font-bold font-mono">tech</span>{" "}
                and code.
              </p>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
}
