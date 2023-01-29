import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Divider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import "./handsUp.css"

export default function Commentary() {
  return (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text className="text" color={"black.500"} fontSize={"lg"}>
            Black Homeschoolers of Central Florida, Inc. has been serving the
            Greater Central Florida homeschool community since 2009, providing
            support, classes, field trips and learning opportunities, along with
            hosting events for homeschooled youth grades Pre-K-12th. Black
            Homeschoolers of Central Florida, Inc. provides technology such as
            laptop computers, resources, and curriculum for members to check out
            in the Lending Library Program. Class studies have spanned from
            entomology and aviation to book writing and publishing, and we offer
            an annual Science and Geography Fair and Junior Achievement
            Financial Literacy Course to our students. Our organization offers
            in-person and virtual classes and have established Youth and Parent
            Clubs including 4-H, Science and Art Clubs, Public Speaking and
            Leadership Club, Science National Honor Society Club, and a
            homeschool (WISE) Women in Science and Engineering Club in
            partnership with Daytona State College WISE Club.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <Divider mt={12} mb={12} />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text className="text" color={"black.500"} fontSize={"lg"}>
            Not only does Black Homeschoolers of Central Florida, Inc. provide
            for the youth, but also their families. There are programs like the
            BHCFL Parent Book Club, Parent Workshops, BHCFL Family Retreat
            Weekend, and out-of-state and out-of-country trips for families to
            connect, bond, learn and grow together. Our programs of focus are
            the BHCFL African Cultural Arts Program, BHCFL Outdoor Recreational
            Program, BHCFL Community Garden and Food Cooperative, The Lending
            Library, The Graduation/Awards Ceremony, our Fencing and Golf
            Program, Community Service, and the Guests/Classes/Field Trips
            Program which includes our Tutoring & College Preparatory Program
            and our Parent Workshops & Coaching.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <Divider mt={12} mb={12} />
      <Heading className="heading">Participation Policy</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
         
          <Text className="text" color={"black.500"} fontSize={"lg"}>
            In order to join and be a member of Black Homeschoolers of Central
            Florida, Inc., receive the eNewsletter, and participate in
            activities, a person must legally home school at least one child
            and/or have at least one pre-school child they anticipate
            homeschooling. You must also submit a cleared background check
            before your membership is official. This is for the safety of our
            youth and their families. It is also important for the BHCFL general
            membership to understand that BHCFL does not carry general liability
            insurance for its members and BHCFL activities. In order to
            participate in any BHCFL, Inc. activities, other than our annual
            Community EXPO, membership in the group is a requirement. Membership
            is $100 per family for the year. Open Enrollment is from May
            1st-August 1st, but if you are a new family, enrollment ends on July
            22 so that you can get your background check in before the August
            1st deadline. If you know someone who wants to be a part of our
            field trips, clubs and other events, please encourage him or her to
            join BHCFL, Inc. We will, on occasion, invite other groups to join
            on certain field trips or events. Please send us an email if you
            would like to join at blackhomeschoolerscfl@gmail.com
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
