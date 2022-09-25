import { createStyles, Header, Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import Link from 'next/link';
import { NextLink } from '@mantine/next';
import { Dec } from '../../svgs/dec';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[3],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export const HeaderRaw = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item component={NextLink} href={item.link} key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              className={classes.link}
              href={link.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        href={link.link}
        key={link.label}
        onClick={(event) => event.preventDefault()}
        passHref
      >
        <a
          className={classes.link}
          href={link.link}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  console.log(items)
  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Link href="/" passHref>
            <Image src="/dec.svg" alt="DEC logo" width={100} height={50} />
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <div className='md:none lg:none xl:none 2xl:none'>
            <Menu
              offset={10}
              onChange={toggle}
              opened={opened}
              shadow="md"
              width="100%"
              withArrow
            >
              <Menu.Target>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
              </Menu.Target>
              <Menu.Dropdown>
                <Group className={classes.menu}>
                  {items}
                </Group>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>
    </Header>
  );
}
