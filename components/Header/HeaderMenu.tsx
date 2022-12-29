import { createStyles, Header, Menu, Group, Center, Burger, Container, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import Link from 'next/link';
import { NextLink } from '@mantine/next';
import Image from 'next/image';
import { ColorSchemeToggle } from '../ColorSchemeToggle';

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
      color: theme.colorScheme === 'dark' ? theme.colors.brand[3] : theme.colors.brand[3],
    },
  },

  linkLabel: {
    marginRight: 5,
    cursor: 'pointer'
  },
}));

export interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export const HeaderRaw = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item component={NextLink} href={item.link} key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0} withArrow>
          <Menu.Target>
            <Center className={classes.link}>
              <Link href={link.link}>
                <span className={classes.linkLabel}>{link.label}</span>
              </Link>
              <IconChevronDown size={12} stroke={1.5} />
            </Center>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        href={link.link}
        key={link.label}
        // Not needed?
        // onClick={(event) => {
        //   console.log('clicked', link, link.link)
        //   event.preventDefault()
        // }}
      >
        <a className={classes.link}>
          {link.label}
        </a>
      </Link>
    );
  });

  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Link href="/">
            <a aria-label='link to home'>
              <Image
                src={colorScheme === 'dark' ? '/dec_dark.svg' : '/dec.svg'}
                alt="DEC logo"
                width={155}
                height={50}
              />
            </a>
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
            <ColorSchemeToggle />
          </Group>
          {/* Responsive menu */}
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
                  <ColorSchemeToggle />
                </Group>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>
    </Header>
  );
}
