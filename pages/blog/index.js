import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/posts";

const blog = ({ posts }) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
        <div className="my-10 flex md:items-center md:justify-between">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {posts.map((post, idxPost) => (
              <div
                key={idxPost}
                className="p-6 hover:bg-yellow-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </Link>
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                  {post.summary}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </div>
                </Link>
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
