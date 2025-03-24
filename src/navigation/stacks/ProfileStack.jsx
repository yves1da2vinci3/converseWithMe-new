import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EditProfileScreen from '../../screens/Profile/EditProfileScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import SettingsScreen from '../../screens/Profile/SettingsScreen';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='profile-main'
        component={ProfileScreen}
      />
      <Stack.Screen
        name='edit-profile'
        component={EditProfileScreen}
        options={{ title: 'Modifier le profil' }}
      />
      <Stack.Screen
        name='settings'
        component={SettingsScreen}
        options={{ title: 'Paramètres' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
