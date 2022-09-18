import { HeaderSearchProps } from './HeaderMenu';

export const links: HeaderSearchProps['links'] = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '',
      label: 'About',
      links: [
        {
          link: '/leadership',
          label: 'Leadership',
        },
        {
          link: '/membership',
          label: 'Membership',
        },
        {
          link: '/byylaws',
          label: 'Club Bylaws',
        },
        {
          link: '/privacy',
          label: 'Privacy Policy',
        },
      ],
    },
    {
      link: 'https://www.downeastcyclists.com/#:~:text=About-,Events,-News',
      label: 'Events'
    },
    {
      link: '/blog',
      label: 'News',
    },
    {
      link: '/trails',
      label: 'MTB Trails',
      links: [
        {
          link: '/bigbranch',
          label: 'Big Branch Bike Park',
        },
        {
          link: '/hendo',
          label: 'Henderson Pond MTB Trail',
        },
      ]
    },
    {
      link: '/contact',
      label: 'Contact',
    }
  ]
