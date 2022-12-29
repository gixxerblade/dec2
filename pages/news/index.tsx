import { Center, Container, Loader, NavLink, Stack, Text, Title } from '@mantine/core';
import { EntryCollection } from 'contentful';
import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Client } from '../../utils/Client';
import { QueryKeys } from '../../utils/queryKeys';
import { showNotification } from '@mantine/notifications';

const News = () => {
  const [articles, setArticles] = useState<EntryCollection<any>['items']>([]);

  const getArticles = async () => Client('news/getPosts')
  const { isFetched, isFetching, isError } = useQuery(QueryKeys.articles, getArticles, {
    onError: (err: Error) => {
      showNotification({
        title: 'Error',
        message: `Error getting articles\n${err.message}`
      })
    },
    onSuccess: (data) => setArticles(data.items),
  })

  return (
    <Container>
      <Title order={1} weight={500}>News</Title>
      <Stack>
        <Center>
          {(isFetching && !isError) && <Loader />}
        </Center>

        {isFetched && articles.map((article) => {

          return (
            <Link
              key={article.sys.id}
              href={{
                pathname: `${article.fields.slug}`,
                query: {
                  id: article.sys.id,
                }
              }}
              // as={`news/${article.fields.slug}`}
            >
              <NavLink label={article.fields?.postTitle} />
            </Link>
          )
        })}
      </Stack>
    </Container>
  )
}

export default News