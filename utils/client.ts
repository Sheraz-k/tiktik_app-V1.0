import sanityClient from '@sanity/client';

export const client = sanityClient({
  //projectId: 'tp4ln3j8',
  projectId: "ndqlgwnm",
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
 

//Sanity Token

// skxmzSMMHCPOFfp0RZ9TuLDnarUxebJ4o2RzHabZO0SquQTwDAsOzXPpj08xFHFNWfwUj0D8kkvQRfdPGpoQi1I36VAzatClVX6mvpRIwbGAQNg0Cj8d1RA83UXWDVA8gUpMvZuKI9nN9lPCEmsqfVbYLvrBYDFXKVX1Oe0MdmlP8g26Fxg0