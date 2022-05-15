import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({
    purpose,
    title1,
    title2,
    desc1,
    buttonText,
    imageSource,
    linkname
}) => (


    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageSource}
            height="300"
            width="500"/>
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">
                {purpose}</Text>
            <Text fontSize="3xk" fontWeight="medium">
                {title1}<br/> {title2}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
                {desc1}</Text>
            <Button colorScheme='teal' size='xs'>

            <Link href={linkname}><a>{buttonText}</a></Link>
            </Button>
        </Box>
    </Flex>
);

export default function Home({propertiesForSale, propertiesForRent}) {
  console.log(propertiesForRent); 
  console.log(propertiesForSale);
    return (
        <Box>
            <h1>Hello World</h1>
            <Banner title1={'RentalHomesfor'} purpose={'RENT A HOME'}
                title2={'Everyone'}
                desc1={'Explore Villas, Bungalows, Flats'}
                buttonText={'Explore Renting'}
                linkname= {"https://nextjs.org/docs/messages/link-multiple-children"}
                imageSource={'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'}>
          </Banner>

          <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>

          <Banner title1={'RentalHomesfor'} purpose={'RENT A HOME'}
                title2={'Everyone'}
                desc1={'Explore Villas, Bungalows, Flats'}
                buttonText={'Explore Renting'}
                linkname= {"https://nextjs.org/docs/messages/link-multiple-children"}
                imageSource={'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'}>
          </Banner>

          <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
           

        </Box>
    )
}



export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}