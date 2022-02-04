import type { GetStaticProps, NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import { Card, Col, Grid, Text } from '@nextui-org/react';
import Link from 'next/link';
import { PostMetadata } from './post/[slug]';
import { DateTime } from 'luxon';

type Post = {
  slug: string;
  metadata: PostMetadata;
};

type BlogProps = {
  posts: Array<Post>;
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Blog');

  return (
    <PageContainer>
      <Grid.Container style={{ marginTop: '25px' }} gap={2} justify="center">
        {posts
          .filter((post) => post.metadata.publish)
          .sort((a, b) => DateTime.fromISO(a.metadata.date).toMillis() - DateTime.fromISO(b.metadata.date).toMillis())
          .reverse()
          .map((post, index) => (
            <Grid xs={12} sm={4} lg={3} key={index}>
              <Link href={'/post/' + post.slug} passHref>
                <Card cover clickable hoverable>
                  <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                    <Col>
                      <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        {post.metadata.title}
                      </Text>
                      <Text h4 color="white">
                        {post.metadata.description}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Image src={post.metadata.thumbnailUrl} height={240} width="100%" alt="Card image background" />
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid.Container>
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => getPost(filename));
  return {
    props: {
      posts,
    },
  };
};

const getPost: (filename: string) => Post = (filename) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  const { data: frontMatter } = matter(markdownWithMeta);
  return {
    metadata: frontMatter as PostMetadata,
    slug: filename.split('.')[0],
  };
};

export default Blog;
