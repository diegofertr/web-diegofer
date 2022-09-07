// import Link from 'next/link';
import { useMemo, Fragment } from "react";
import { getPost, getPostSlugs } from "../../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Layout from "../../components/layout";
import MDXComponents from "../../components/mdxComponents";
import Head from "next/head";

const components = { ...MDXComponents };

const Post = ({ post }) => {
  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);
  return (
    <Layout>
      <Head>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.summary} />

        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.summary} />
        <meta
          property="og:url"
          content={"https://diegofer.dev/blog/" + post.slug}
        />
        <meta property="og:type" content="article" />
        <meta property="article:publisher" content="https://diegofer.dev" />
        <meta property="article:author" content="https://diegofer.dev" />
        {post.frontmatter.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.frontmatter.summary} />
        <meta
          name="twitter:url"
          content={"https://diegofer.dev/" + post.slug}
        />
      </Head>
      <Fragment>
        <article className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold font-mono tracking-wide uppercase">
                {post.frontmatter.tags ? post.frontmatter.tags[0] : ""}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold font-mono tracking-tighter text-gray-900 sm:text-4xl">
                {post.frontmatter.title}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {post.frontmatter.summary}
            </p>

            <div className="content">
              <Component components={components} />
            </div>
          </div>
        </article>
      </Fragment>
    </Layout>
  );
};

export async function getStaticPaths() {
  const postsPaths = getPostSlugs("posts");
  // console.log('posts paths :: ', postsPaths);
  // const pagesPaths = getPostSlugs('posts')
  // const paths = postsPaths.concat(pagesPaths)
  const paths = postsPaths;
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug, "posts");
  return {
    props: {
      post,
    },
  };
}

export default Post;
