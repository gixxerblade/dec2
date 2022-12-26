import { Fragment, useEffect, useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, Stack, Container, Center, Loader, Title } from '@mantine/core';
import Parser from "rss-parser";
import { useQuery } from 'react-query';

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
/**
 * {
    "id": "290183582",
    "eventType": "physical",
    "shortUrl": "https://meetu.ps/e/LGMpv/8tGbg/i",
    "imageUrl": "https://secure-content.meetupstatic.com/images/classic-events/497156061/676x380.webp",
    "title": "MTB Monday's",
    "eventUrl": "https://www.meetup.com/down-east-cyclists/events/290183582",
    "description": "Mountain Bike Monday. Come join us to shred some gnar and send it on the best local MTB trail in the area.\nMeet at Big Branch Bike Park @ 5:30pm.\nAll levels welcome.",
    "dateTime": "2022-12-26T17:30-05:00"
}
 */
interface Events {
  count: number,
  pageInfo: {},
  edges: Event[],
}

const Events = () => {
  const [events, setEvents] = useState<Events>();

  const { isLoading, isFetching, isError } = useQuery('events', () => fetch('api/events'), {
    onSuccess: async (res) => {
      if (res.ok) {
        const { groupByUrlname: { unifiedUpcomingEvents } } = await res.json()
        setEvents(unifiedUpcomingEvents ?? null)
      }
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
              <Center>
                <Button
                  // color={theme.colors.brand[6]}
                  component='a'
                  href={node.shortUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  RSVP
                </Button>
              </Center>
            </Card.Section>
          </Card>
        ))}
      </Stack>
      <Center pt={5} mt={5}>
        <Button
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
