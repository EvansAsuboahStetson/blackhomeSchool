import React from "react";
import "./Blog.css";

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
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={blog.imagesrc}
          alt="Green double couch with wooden legs"
          borderRadius="m"
        />
        <Stack mt="6" spacing="3">
          <Heading className="text-blog comment" color="green" size="md" margin={5}>
            {blog.title}{" "}
          </Heading>
          <Text className="text-blog comment">
            {blog.mainText.substring(0, 250)}...
          </Text>
        </Stack>
      </CardBody>
      <div className="arrange-footer">
        <div className="a text-blog">
          <div className="b text-blog ">Published On</div>
          <div className="c text-blog comment">{blog.datePublished}</div>
        </div>
      </div>
      <Divider />

      <CardFooter>
        <ButtonGroup spacing="2">
            <Link  to="/bhcl_blog/" state={{ data: blog }}>
            <Button variant="solid" colorScheme="blue" className="text-blog">
            READ MORE
          </Button>
            </Link>
         
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
