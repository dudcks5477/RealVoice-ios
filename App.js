import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RecordingProvider} from './src/services/RecordingContext.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {auth} from './src/services/firebase.js';
// import {onAuthStateChanged} from 'firebase/auth';
import uuid from 'react-native-uuid';

import {UserProvider, useUser} from './src/contexts/UserContext.js';
import SplashScreen from './src/components/SplashScreen';
import SignUpPhoneNumberScreen from './src/screens/auth/SignUpPhoneNumberScreen.js';
import PhoneVerificationScreen from './src/screens/auth/PhoneVerificationScreen.js';
import MicroPhonePermissionScreen from './src/screens/auth/MicroPhonePermissionScreen.js';
import NickNameScreen from './src/screens/auth/NickNameScreen.js';
import VoicePermissionScreen from './src/screens/auth/VoicePermissionScreen.js';

import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import RequiredScreen from './src/screens/RequiredScreen';
import RecordScreen from './src/screens/RecordScreen.js';
import RecordingScreen from './src/screens/RecordingScreen.js';
import UploadMainScreen from './src/screens/UploadMainScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import ProfileEditDetailScreen from './src/screens/ProfileEditDetailScreen.js';
import MemorySettingScreen from './src/screens/MemorySettingScreen.js';
import AlertSettingScreen from './src/screens/AlertSettingScreen.js';
import PrivacyScreen from './src/screens/PrivacyScreen.js';
import BlockedScreen from './src/screens/BlockedScreen.js';
import HidedScreen from './src/screens/HidedScreen.js';
import WorldTimeScreen from './src/screens/WorldTimeScreen.js';
import OtherSettingScreen from './src/screens/OtherSettingScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import HelpChooseScreen from './src/screens/HelpChooseScreen.js';
import InformationScreen from './src/screens/InformationScreen.js';

const Stack = createStackNavigator();

const AppContent = () => {
  const [initialRoute, setInitialRoute] = useState('Splash');
  const {userData, setUserData} = useUser();

  useEffect(() => {
    const generatedUuid = uuid.v4();
    setUserData(prevState => ({
      ...prevState,
      userUuid: generatedUuid,
    }));

    const checkAuthStatus = async () => {
      onAuthStateChanged(auth, user => {
        if (user) {
          setInitialRoute('MainScreen');
        } else {
          setInitialRoute('SignUpPhoneNumber');
        }
      });
    };
    checkAuthStatus();
  }, [setUserData]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUpPhoneNumber">
          {props => (
            <SignUpPhoneNumberScreen
              {...props}
              userData={userData}
              setUserData={setUserData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="PhoneVerification">
          {props => (
            <PhoneVerificationScreen
              {...props}
              userData={userData}
              setUserData={setUserData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="MicroPhonePermission"
          component={MicroPhonePermissionScreen}
        />
        <Stack.Screen name="NickName">
          {props => (
            <NickNameScreen
              {...props}
              userData={userData}
              setUserData={setUserData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="VoicePermission">
          {props => <VoicePermissionScreen {...props} userData={userData} />}
        </Stack.Screen>
        <Stack.Screen name="Main">
          {props => <MainScreen {...props} userData={userData} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="Recording" component={RecordingScreen} />
        <Stack.Screen name="UploadMain" component={UploadMainScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Required" component={RequiredScreen} />
        <Stack.Screen
          name="ProfileEditDetail"
          component={ProfileEditDetailScreen}
        />
        <Stack.Screen name="MemorySetting" component={MemorySettingScreen} />
        <Stack.Screen name="AlertSetting" component={AlertSettingScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Blocked" component={BlockedScreen} />
        <Stack.Screen name="Hided" component={HidedScreen} />
        <Stack.Screen name="WorldTime" component={WorldTimeScreen} />
        <Stack.Screen name="OtherSetting" component={OtherSettingScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="HelpChoose" component={HelpChooseScreen} />
        <Stack.Screen name="Information" component={InformationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <UserProvider>
      <RecordingProvider>
        <AppContent />
      </RecordingProvider>
    </UserProvider>
  );
};

import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('realvoice', () => App);

export default App;