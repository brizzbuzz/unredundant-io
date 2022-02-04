import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { PageContainer } from '../../components/PageContainer';
import { Container, Text } from '@nextui-org/react';

const rehypePrism = require('@mapbox/rehype-prism');

const PostPage: NextPage<PostProps> = ({ metadata: { title, date }, mdxSource }) => {
  return (
    <PageContainer>
      <Container style={{ marginTop: '25px' }}>
        <Text h1 size={50} css={{ textGradient: '45deg, $yellow500 -20%, $red500 100%', textAlign: 'center' }}>
          {title}
        </Text>
        <Text h4 size={16} color="primary" css={{ textAlign: 'center' }}>
          {date}
        </Text>
        <MDXRemote {...mdxSource} />
      </Container>
    </PageContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface PostContext extends ParsedUrlQuery {
  slug: string;
}

export type PostMetadata = {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  publish: boolean;
  tags: string[];
};

type PostProps = {
  slug: string;
  metadata: PostMetadata;
  mdxSource: MDXRemoteSerializeResult;
};

export const getStaticProps: GetStaticProps<PostProps, PostContext> = async (context) => {
  const { slug } = context.params as PostContext;
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });
  return {
    props: {
      metadata: frontMatter as PostMetadata,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
