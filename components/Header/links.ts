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
          link: '/about/leadership',
          label: 'Leadership',
        },
        {
          link: '/about/membership',
          label: 'Membership',
        },
        {
          link: '/about/bylaws',
          label: 'Club Bylaws',
        },
        {
          link: '/about/privacy',
          label: 'Privacy Policy',
        },
      ],
    },
    {
      link: '/events',
      label: 'Events'
    },
    {
      link: '/news',
      label: 'News',
    },
    {
      link: '/trails',
      label: 'MTB Trails',
      links: [
        {
          link: '/trails/bigbranch',
          label: 'Big Branch Bike Park',
        },
        {
          link: '/trails/hendo',
          label: 'Henderson Pond MTB Trail',
        },
      ]
    },
    {
      link: '/contact',
      label: 'Contact',
    }
  ]
