import CardIcon from "../../images/credit-card.svg";
import ProductImage from "../../images/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

import "./checkout.css";
import Product from "./Product";

import { Grid, GridItem } from "@chakra-ui/react";

const Checkout = () => {
  const products = [
    {
      description:
        "Kwanza is a festival celebrated by the this that and that. It was first used to differentiate between the blacks and white",
      price: 19,
      title: "Kwanza Tshirt",
      size:"M"
    },
    {
      description:
        "Kente Cloth first originated from the Ashanti Region of Ghana, It was used as a folklore to teach wisdom to kids",
      price: 25,
      title: "Kente Cloth",
      size:"M"
    },
    {
      description:
        "Embroidered T-shirt was done by the kids of black home school with love and care",
      price: 14,
      title: "Embroidered T-shirt",
      size:"M"
    },
  ];

  return (
    <div className="checkout">
      <Grid   templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
      }}
       gap={0}>
        {products.map((product, index) => (
          <GridItem w='100%'>
            <Product product={product} />

          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Checkout;
