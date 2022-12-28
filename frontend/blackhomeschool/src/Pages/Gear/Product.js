import React, { useEffect, useState } from "react";
import {
  Image,
  ButtonGroup,
  CardFooter,
  Heading,
  Card,
  CardBody,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import CustomRadioButtons from "./CustomButtons";



function Product({ product }) {

  const [Size,setSize] = useState("")



  return (
    <div>
      <Card maxW="sm" margin={10}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            <Text width={300} height={[50, 100, 150]}>{product.description} </Text>

            <Text color="blue.600" fontSize="2xl">
              ${product.price}

            </Text>
            <CustomRadioButtons   product={product} Size={Size} setSize={setSize}/>

          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="1">
            <PaypalCheckoutButton product={product} Size={Size} setSize={setSize}  />
          </ButtonGroup>


        </CardFooter>


      </Card>
    </div>
  );
}

export default Product;
