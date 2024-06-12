"use client";
import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-neutral900 max-w-prose">{children}</p>
        ),
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-4xl font-bold">{children}</h1>;
            case 2:
              return <h2 className="text-3xl font-bold">{children}</h2>;
            case 3:
              return <h3 className="text-2xl font-bold">{children}</h3>;
            case 4:
              return <h4>{children}</h4>;
            case 5:
              return <h5>{children}</h5>;
            case 6:
              return <h6>{children}</h6>;
          }
        },
        link: ({ children, url }) => (
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
}
