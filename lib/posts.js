import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
// import rehypePrism from "rehype-prism-plus";
import mdxPrism from "mdx-prism";
import remarkGfm from "remark-gfm";

function getDirectory(folder) {
  return path.join(process.cwd(), "data/" + folder);
}

export function getPostSlugs(folder) {
  let fileNames = fs.readdirSync(getDirectory(folder));
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getAllPosts(folder) {
  let fileNames = fs.readdirSync(getDirectory(folder), { withFileTypes: true });
  fileNames = fileNames.filter((fileName) => fileName.isFile());
  let allPostsData = fileNames.map((fileName) => {
    const slug = fileName.name.replace(/\.mdx$/, "");
    const filePath = path.join(getDirectory(folder), fileName.name);
    const file = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(file);
    return {
      slug,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPost(slug, folder) {
  const filePath = path.join(getDirectory(folder), `${slug}.mdx`);

  var fileContent;
  try {
    fileContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File not found!");
      return getPost(slug, "pages");
    } else {
      throw err;
    }
  }

  const remarkPlugins = [remarkGfm];
  // const rehypePlugins = [rehypePrism];
  const rehypePlugins = [mdxPrism];

  const { code, frontmatter } = await bundleMDX({
    source: fileContent,
    xdmOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        ...rehypePlugins,
      ];
      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}

// Tags

export function getTags() {
  let posts = getAllPosts("posts");
  const tags = new Set();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(tag);
    });
  });
  return Array.from(tags);
}

export async function getPostsByTag(tag) {
  let posts = getAllPosts("posts");
  posts = posts.filter((post) => post.tags?.includes(tag));
  return posts;
}
