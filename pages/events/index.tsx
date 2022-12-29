import { useState } from 'react';
import { Card, Text, Button, Stack, Container, Center, Loader, Title, Flex } from '@mantine/core';
import { useQuery } from 'react-query';
import { Client } from '../../utils/Client';
import { QueryKeys } from '../../utils/queryKeys';
import { showNotification } from '@mantine/notifications';

interface Event {
  node: {
    id: string,
    shortUrl: string,
    title: string,
    eventUrl: string,
    description: string,
    dateTime: Date,
  }
}

interface Events {
  count: number,
  pageInfo: {},
  edges: Event[],
}



const Events = () => {
  const [events, setEvents] = useState<Events>();

  const { isLoading, isFetching, isError } = useQuery(QueryKeys.events, () => Client('events'), {
    onError: (err: Error) => {
      showNotification({
        title: 'Error',
        message: `Error getting current events\n${err.message}`
      })
    },
    onSuccess: (res) => {
      const { groupByUrlname: { unifiedUpcomingEvents } } = res;
      setEvents(unifiedUpcomingEvents ?? null)
    },
    refetchOnWindowFocus: false,
  })

  return (
    <Container>
      <Title order={1} weight={500}>Upcoming Events</Title>
      <Stack
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[8] : theme.colors.gray[0]
        })}
      >
        <Center>
          {((isFetching || isLoading) && !isError) && <Loader />}
        </Center>
        {events?.edges.map(({ node }) => (
          <Card key={node.id} shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section m={5} pt={5}>
              <Text weight={500} underline>{node.title}</Text>
            </Card.Section>
            <Card.Section m={5}>
              <Text color="dimmed">{node.description}</Text>
            </Card.Section>
            <Card.Section m={5}>
              <Text color="dimmed">Date: {new Date(node.dateTime).toDateString()}</Text>
            </Card.Section>
            <Card.Section pb={5} mb={5}>
              <Flex justify="flex-end" gap="md" p={15}>
                <Button
                  color="brand"
                  component='a'
                  href={node.shortUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RSVP
                </Button>
              </Flex>
            </Card.Section>
          </Card>
        ))}
      </Stack>
      <Center pt={5} mt={5}>
        <Button
          color="brand"
          component='a'
          href='https://www.meetup.com/down-east-cyclists/events/'
          rel="noopener noreferrer"
          size='xl'
          target="_blank"
          variant='outline'
        >
          Click for more events
        </Button>
      </Center>
    </Container>
  )
}

export default Events;
