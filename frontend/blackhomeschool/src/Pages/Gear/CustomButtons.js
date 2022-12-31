import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export default function CustomRadioButtons({ Size, setSize }) {
  const options = ["Sm", "M", "L", "XL"];

  const handleChange = (value) => {
    setSize(value);
    console.log(value, "valueChange");
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <div>
            <SimpleGrid templateColumns="repeat(auto-fill, minmax(50px, 2fr))">
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            </SimpleGrid>
          </div>
        );
      })}
    </HStack>
  );
}
