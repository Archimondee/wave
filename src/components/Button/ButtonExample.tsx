import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonExampleProps {
  title: string;
  onPress: () => void;
}

const ButtonExample = (props: ButtonExampleProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonExample;
