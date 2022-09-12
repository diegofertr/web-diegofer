import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/posts";
import { format, parseISO, intlFormat } from 'date-fns'

const blog = ({ posts }) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mb-10 border-t border-b divide-y">
            { posts.map((post, idxPost) => (
              <div className="grid py-8 sm:grid-cols-4" key={idxPost}>
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    {post.tags && post.tags.map((postTag, idxPostTag) => (
                      <Link
                        key={idxPostTag}
                        href="/"
                        aria-label="Category"
                      >
                        <span className="transition-colors duration-200 text-blue-500 hover:text-blue-800">
                          {postTag}
                        </span>
                      </Link>
                    ))}
                    {/*<p className="text-gray-600">5 Jan 2020</p>*/}
                    <p className="text-gray-600">
                      {intlFormat(parseISO(`${post.date}`), {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      }, {
                        locale: 'es-ES'
                      })}
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <div className="mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label="Article"
                    >
                      <div className="text-black transition-colors duration-200 hover:text-blue-700">
                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-gray-700">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts("posts");

  return {
    props: {
      posts,
    },
  };
}

export default blog;
