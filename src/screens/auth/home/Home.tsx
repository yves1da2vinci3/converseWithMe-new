import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import images from '../../../../assets/images/images';
import CustomButton from '../../../components/CustomButton';
import { globalStyleSheet } from '../../../styles/stylesheet';
import { hp, wp } from '../../../utils/responsive';
import { homeStyleSheet } from './stylesheet';

type RootStackParamList = {
  login: undefined;
  register: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Home = () => {
  const navigate = useNavigation<NavigationProp>();

  return (
    <View style={homeStyleSheet.container}>
      <Image
        style={{ height: hp('40%'), width: wp('90%') }}
        source={images.HOME_AUTH}
      />
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Text
          style={[
            globalStyleSheet.blacColor,
            homeStyleSheet.text,
            { fontSize: 24, fontWeight: 'bold' },
          ]}
        >
          ConverseWith
        </Text>
        <Text
          style={[
            homeStyleSheet.text,
            homeStyleSheet.colorGold,
            { fontSize: 24, fontWeight: 'bold' },
          ]}
        >
          Me
        </Text>
      </View>
      <Text
        style={[
          globalStyleSheet.blacColor,
          { fontFamily: 'Inter_500Medium', fontSize: 20 },
        ]}
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
        style={{ width: wp('90%'), rowGap: hp('1%'), marginVertical: hp('2%') }}
      >
        <CustomButton
          onPress={() => navigate.navigate('login')}
          mode='contained'
        >
          Login
        </CustomButton>

        <CustomButton
          onPress={() => navigate.navigate('register')}
          mode='outlined'
        >
          {' '}
          register{' '}
        </CustomButton>
      </View>
    </View>
  );
};

export default Home;
