import React from 'react';
import { Stack, Flex, Text, Image, AspectRatio } from '@chakra-ui/react';
import useBasePath from 'src/utils/useBasePath';

const DefaultTopBar: ReactFC = () => {
  const basePath = useBasePath();

  const aliceText = {
    fontFamily: 'Alice',
    fontSize: {
      base: '1rem',
      lg: '1.2rem',
    },
  };

  const poppinsText = (isYellow = true) => ({
    ...(isYellow ? { color: 'textLogin.SMA' } : {}),
    fontFamily: 'Poppins',
    fontSize: {
      base: '0.85rem',
      lg: '1.1rem',
    },
  });

  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
      px={4}
      py={2}
      color="white"
      userSelect="none"
    >
      <Flex align="center" mr={5}>
        <AspectRatio ratio={1} width={{ base: '50px', sm: '75px', md: '85px' }}>
          <Image
            borderRadius="full"
            src={`${basePath}/Logo-Koperasi-1-1200x900.jpg`}
            alt="Logo"
          />
        </AspectRatio>
      </Flex>
      <Stack display={'flex'} alignItems="left">
        <Text {...poppinsText(false)}>SISTEM INFORMASI PEMBUKUAN KOPERASI</Text>
        <Text {...aliceText}>DESA GRIMULYO</Text>
        <Text {...poppinsText()}>Argo Mulyo Lestari</Text>
      </Stack>
    </Flex>
  );
};

export default DefaultTopBar;
