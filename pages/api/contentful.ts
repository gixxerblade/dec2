import contentful from 'contentful';

export const contentfulAuth = async () => contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN as string,
});

