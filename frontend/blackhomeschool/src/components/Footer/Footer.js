
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Avatar
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../../Pages/HomeInfo/HomeInfo.css';

import OrigLogo from "../assets/OrigLogo.png";






const ListHeader = ({ children }) => {
  return (
    <Text className="text" fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Organization</ListHeader>
            <Link className="text" href={'#'}>About Us</Link>
            <Link className="text" href={'#'}>Blog</Link>
            <Link className="text" href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link className="text" href={'#'}>Donate</Link>
            <Link className="text" href={'#'}>Buy From Here</Link>
            <Link className="text" href={'#'}>PayPal</Link>
          </Stack>

          <Stack align={'flex-start'} >
            <ListHeader className="text">Legal</ListHeader>
            <Link className="text" href={'#'}>Cookies Policy</Link>
            <Link className="text" href={'#'}>Privacy Policy</Link>
            <Link className="text" href={'#'}>Terms of Se rvice</Link>
            <Link className="text" href={'#'}>Law Enforcement</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Black Home Schoolers Of Central Florida</ListHeader>
            <Box>
              <Avatar
                size={'m'}
                src={
                  OrigLogo
                }
              />
            </Box>

          </Stack>


        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text className="text">© 2022 Black Home Schoolers of Central Florida. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}