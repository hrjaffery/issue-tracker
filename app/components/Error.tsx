import { Text } from "@radix-ui/themes";
import React from "react";

const Error = ({ message }) => {
  return (
    <>
      {message && (
        <Text as="p" className="  text-red-400">
          {message}
        </Text>
      )}
    </>
  );
};

export default Error;
