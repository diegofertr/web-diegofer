import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/posts";

const blog = ({ posts }) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
        <div className="my-10">
          {posts.map((post, idxPost) => (
            <div
              key={idxPost}
              className="my-5 border border-blue-600 p-2 rounded-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <h1 className="text-xl font-medium">{post.title}</h1>
              </Link>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          ))}
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
