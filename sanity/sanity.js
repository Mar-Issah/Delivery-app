import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'm3ye40sm', //creat env variable for this
  dataset: 'production',
  apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
  //token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

//for the image url generator
//below is a helper function we will be using to build our url
const builder = imageUrlBuilder(myConfiguredSanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

export default client;
