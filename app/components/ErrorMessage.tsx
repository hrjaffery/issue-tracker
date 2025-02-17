import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const Error = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text as="p" className="  text-red-400">
      {children}
    </Text>
  );
};

export default Error;
