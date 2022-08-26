import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  Box,
  Wrap,
  WrapItem,
  Image,
  VStack,
} from '@chakra-ui/react';

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Tabs
      isFitted
      variant="unstyled"
      bg="gray.800"
      h="100vh"
      color="gray.100"
      overflowY="auto">
      <TabList mb="1em">
        <Tab _selected={{ color: 'gray.100', bg: 'blue.400' }}>Photos</Tab>
        <Tab _selected={{ color: 'gray.100', bg: 'blue.400' }}>
          Photographers
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Wrap justify="center" spacing="30px">
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://www.10wallpaper.com/wallpaper/medium/1503/Autumn_fog_lake_jungle-Photo_HD_Wallpaper_medium.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://www.10wallpaper.com/wallpaper/1366x768/1404/beautiful_scenery_mountains-HD_Photo_Wallpaper_1366x768.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://4.bp.blogspot.com/-TKpl80d4a9w/UfhOxtdZmZI/AAAAAAAAFm0/uKWb0Ktyj64/s1600/PAPEL_DE_PAREDE_HD_PAISAGENS_NATUREZA%2B(6).jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://www.10wallpaper.com/wallpaper/1366x768/1506/Beautiful_New_Zealand_Nature_Landscape_HD_Wallpaper_05_1366x768.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://c4.wallpaperflare.com/wallpaper/799/918/385/water-new-zealand-lake-wanaka-mountain-lake-wallpaper-thumb.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://mountainfilm.nz/wp-content/uploads/2012/03/Wanaka-in-Winter-e1490669954811.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2019/12/08/19/50/winter-4682051_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2014/05/05/14/14/meadow-338211_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2019/11/14/16/01/landscape-4626489_960_720.jpg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                objectFit="cover"
                boxSize="300px"
                src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg"
              />
            </WrapItem>
          </Wrap>
        </TabPanel>
        <TabPanel>
          <Flex m={16} flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
            <Image
              mb={{ base: '20px', lg: '0px' }}
              objectFit="cover"
              boxSize="300px"
              src="data:image/jpeg;base64,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"
            />
            <VStack
              m={{ base: '0', lg: '20px' }}
              spacing={4}
              alignItems="flex-start">
              <Text>Name: Shrek</Text>
              <Text>Wage (year): $1,000,000</Text>
              <Text>
                About: Shrek is a 2001 American computer-animated comedy film
                loosely based on the 1990 picture book of the same name by
                William Steig. It is the first installment in the Shrek
                franchise. Directed by Andrew Adamson and Vicky Jenson in their
                directorial debuts from a screenplay written by Ted Elliott,
                Terry Rossio, Joe Stillman, and Roger S. H. Schulman, the film
                stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow.
                In the film, the ogre Shrek (Myers) finds his swamp overrun by
                fairy tale creatures banished by Lord Farquaad (Lithgow). With
                the help of Donkey (Murphy), Shrek agrees to rescue Princess
                Fiona (Diaz) for Farquaad to regain his swamp.
              </Text>
            </VStack>
          </Flex>
          <Flex m={16} flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
            <Image
              mb={{ base: '20px', lg: '0px' }}
              objectFit="cover"
              boxSize="300px"
              src="https://i.pinimg.com/originals/79/79/e9/7979e9fc879fc7e522275bcc4fd0a002.jpg"
            />
            <VStack
              m={{ base: '0', lg: '20px' }}
              spacing={4}
              alignItems="flex-start">
              <Text>Name: Lightning McQueen</Text>
              <Text>Wage (year): $10,000,000</Text>
              <Text>
                About: Montgomery "Lightning" McQueen is a fictional
                anthropomorphic stock car who is the protagonist of the animated
                Pixar franchise Cars, including Cars, Cars 2, and Cars 3. He
                also appears in the Cars Toons TV series. McQueen is a playable
                character in each of the Cars video game installments and in
                other Disney/Pixar video games as well. He makes a cameo
                appearance in Planes: Fire & Rescue.[1] Lightning McQueen is the
                face of the Cars brand, and he is a popular mascot for Disney.
              </Text>
            </VStack>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
