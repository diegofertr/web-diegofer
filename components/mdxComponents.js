import Link from "next/link";
import Image from "next/image";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          {...props}
          className="font-medium text-sky-500 underline decoration-2 decoration-sky-500 hover:no-underline"
        >
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <a
      className="font-medium text-sky-500 underline decoration-2 decoration-sky-500 hover:no-underline"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  );
};

const BlogImg = (props) => {
  return (
    <div className="my-3">
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        {...props}
        className="rounded-xl"
      />
    </div>
  );
};

const Paragraph = (props) => {
  return <p className="my-4">{props.children}</p>;
};

const Subtitle = (props) => {
  return <h1 className="mt-2 text-3xl font-bold">{props.children}</h1>;
};

const Subtitle2 = (props) => {
  return <h2 className="mt-4 text-2xl font-bold">{props.children}</h2>;
};

const Subtitle3 = (props) => {
  return <h3 className="mt-2 text-xl font-bold">{props.children}</h3>;
};

const Subtitle4 = (props) => {
  return <h4 className="mt-2 text-lg font-bold">{props.children}</h4>;
};

const MyCode = (props) => {
  return (
    <pre
      {...props}
      className="p-3 text-base block whitespace-pre overflow-x-scroll bg-amber-100 rounded-md"
    >
      {props.children}
    </pre>
  );
};

const ListDisc = (props) => {
  return <ul className="list-disc my-2 pl-5">{props.children}</ul>;
};

const ListDecimal = (props) => {
  return <ol className="list-decimal my-2 pl-5">{props.children}</ol>;
};

const Blockquote = (props) => {
  return (
    <blockquote className="bg-amber-100 border-l-8 border-amber-300">
      <p className="px-4 py-1 italic">{props.children}</p>
    </blockquote>
  );
};

const Table = (props) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      {props.children}
    </table>
  )
}

const Thead = (props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
      {props.children}
    </thead>
  )
}

const Th = (props) => {
  return (
    <th className="py-4 px-6 font-medium bg-gray-200 dark:bg-gray-700 text-gray-900 whitespace-nowrap dark:text-white">
      {props.children}
    </th>
  )
}
const Tr = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {props.children}
    </tr>
  )
}
const Td = (props) => {
  return (
    <td className="py-4 px-6">
      {props.children}
    </td>
  )
}


const MDXComponent = {
  Image,
  a: CustomLink,
  BlogImg,
  p: Paragraph,
  h1: Subtitle,
  h2: Subtitle2,
  h3: Subtitle3,
  h4: Subtitle4,
  // pre: MyCode,
  ul: ListDisc,
  ol: ListDecimal,
  blockquote: Blockquote,
  table: Table,
  thead: Thead,
  th: Th,
  tr: Tr,
  td: Td,
};

export default MDXComponent;
