import React from 'react'
import "./Blog.css"


import {
    Card,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Image,

    Heading,
    Text,
    Stack,
    Divider,
  
  } from "@chakra-ui/react";

function BlogCard({blog}) {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src= {blog.imagesrc}
        alt='Green double couch with wooden legs'
        borderRadius='m'
      />
      <Stack mt='6' spacing='3' >
        <Heading className='text-blog' color="green" size='md' margin={5}>{blog.title} </Heading>
        <Text className='text-blog' >
         {blog.mainText}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' className='text-blog'>
         READ MORE
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default BlogCard