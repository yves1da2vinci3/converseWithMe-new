import { View, Text } from "react-native";
import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { globalStyleSheet } from "../styles/stylesheet";

interface CustomButtonProps extends ButtonProps {}

const CustomButton: React.FC<CustomButtonProps> = ({ ...buttonProps }) => {
  return (
    <Button
      labelStyle={globalStyleSheet.buttonLabel}
      style={globalStyleSheet.button}
      {...buttonProps}
    ></Button>
  );
};

export default CustomButton;
