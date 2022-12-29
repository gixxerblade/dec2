import { useRouter } from 'next/router'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Client } from '../utils/Client';
import { QueryKeys } from '../utils/queryKeys';
import { showNotification } from '@mantine/notifications';
import { Container, Title, Text, Center, Space, Chip } from '@mantine/core';
import { Entry } from 'contentful';
import ReactMarkdown, { Options as MDOptions } from 'react-markdown';

type FeaturedImage = {
  fields: {
    title: string,
    file: {
      url: string,
      details: {
        size: number,
        image: {
          width: number,
          height: number,
        }
      },
      fileName: string,
      contentType: string,
    }
  }
};

type Field = {
  author: string,
  categories?: string[],
  content: string,
  featuredImage?: FeaturedImage,
  postTitle: string,
  publishDate: Date,
  tags?: string[],
}

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Entry<Field> | null>(null);
  console.log(article?.fields)
  const getArticle = async () => router?.query?.id && Client(`news/${id}`);
  useQuery(QueryKeys.article, getArticle, {
    enabled: !!id,
    onError: (err: Error) => {
      showNotification({
        title: 'Error',
        message: `Error getting news article\n${err.message}`
      })
    },
    onSuccess: (data) => { setArticle(data) },
    refetchOnWindowFocus: false,
  })

  return (
    <Container>
      <Center>
        <Title order={2}>{article?.fields.postTitle}</Title>
      </Center>

      <Space h="md" />
      <Space h="md" />
      <Text>
        <ReactMarkdown>{article?.fields.content!}</ReactMarkdown>
      </Text>
      <Space h="md" />
      <Text>Date published: {new Date(article?.fields.publishDate || '').toDateString()}</Text>
      <Space h="md" />
      <Text>TAGS</Text>
      <Chip.Group>
        {article?.fields.tags?.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </Chip.Group>
    </Container>
  );
}

export default Article;