import { View, Image } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { homeStyleSheet } from "./stylesheet";
import images from "../../../../assets/images/images";
import { hp, wp } from "../../../utils/responsive";
import { globalStyleSheet } from "../../../styles/stylesheet";
import CustomButton from "../../../components/CustomButton";

const Home = () => {
  return (
    <View style={homeStyleSheet.container}>
      <Image
        style={{ height: hp("50%"), width: wp("90%") }}
        source={images.HOME_AUTH}
      />
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Text
          variant="headlineMedium"
          style={[globalStyleSheet.blacColor, homeStyleSheet.text]}
        >
          ConverseWith
        </Text>
        <Text
          variant="headlineMedium"
          style={[homeStyleSheet.text, homeStyleSheet.colorGold]}
        >
          Me
        </Text>
      </View>
      <Text
        variant="titleLarge"
        style={[globalStyleSheet.blacColor, { fontFamily: "Inter_500Medium" }]}
      >
        l'application pour discuter ici et ailleurs
      </Text>

      {/* Description */}
      <Text>
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </Text>
      {/* Button Group */}
      <View
        style={{ width: wp("90%"), rowGap: hp("1%"), marginVertical: hp("2%") }}
      >
        <CustomButton mode="contained">Login</CustomButton>

        <CustomButton mode="outlined"> register </CustomButton>
      </View>
    </View>
  );
};

export default Home;
