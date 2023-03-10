import { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./checkout.css"

const PaypalCheckoutButton = (props) => {
  var { product, Size } = props;
  const [productNew, setproductNew] = useState({});

  // console.log(productNew)

  useEffect(() => {
    if (product) {
      console.log(Size, "ISIS");
      product.size = Size;
      setproductNew(product);
    }
  }, [Size]);

  useEffect(() => {
    if (Object.keys(productNew).length) {
      console.log(productNew);
    }
  }, [productNew]);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }

  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

  return (
    <div className="zindex">
      <PayPalButtons
        style={{
          color: "silver",
          layout: "horizontal",
          height: 48,
          tagline: false,
          shape: "pill",
        }}
        onClick={(data, actions) => {
          // Validate on button click, client or server side
          const hasAlreadyBoughtCourse = false;

          if (hasAlreadyBoughtCourse) {
            setError(
              "You already bought this course. Go to your account to view your list of courses."
            );

            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          console.log(productNew.size);
          // console.log(Size,"SOZE")
          return actions.order.create({
            purchase_units: [
              {
                description: product.title + " Size: " + productNew.size,
                amount: {
                  value: product.price,
                },
                size: productNew.size,
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {
          // Display cancel message, modal or redirect user to cancel page or back to cart
        }}
        onError={(err) => {
          setError(err);
          console.error("PayPal Checkout onError", err);
        }}
      />
    </div>
  );
};

export default PaypalCheckoutButton;
