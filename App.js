import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RecordingProvider} from './src/services/RecordingContext.js';
import {initializeFCM, cleanupFCM, subscribeToTopic} from './src/services/firebaseMessaging.js'
import auth, { onAuthStateChanged } from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';

// 회원가입
import {UserProvider, useUser} from './src/contexts/UserContext.js';
import SplashScreen from './src/components/SplashScreen';
import SignUpPhoneNumberScreen from './src/screens/auth/SignUpPhoneNumberScreen.js';
import NickNameScreen from './src/screens/auth/NickNameScreen.js';
import VoicePermissionScreen from './src/screens/auth/VoicePermissionScreen.js';

// 메인
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import RequiredScreen from './src/screens/RequiredScreen';
import RecordScreen from './src/screens/RecordScreen.js';
import RecordingScreen from './src/screens/RecordingScreen.js';
import UploadMainScreen from './src/screens/UploadMainScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import ProfileEditDetailScreen from './src/screens/ProfileEditDetailScreen.js';

// 세팅
// import MemorySettingScreen from './src/screens/MemorySettingScreen.js';
import AlertSettingScreen from './src/screens/AlertSettingScreen.js';
// import PrivacyScreen from './src/screens/PrivacyScreen.js';
// import BlockedScreen from './src/screens/BlockedScreen.js';
// import HidedScreen from './src/screens/HidedScreen.js';
import WorldTimeScreen from './src/screens/WorldTimeScreen.js';
import OtherSettingScreen from './src/screens/OtherSettingScreen.js';
import HelpScreen from './src/screens/HelpScreen.js';
import HelpChooseScreen from './src/screens/HelpChooseScreen.js';
import InformationScreen from './src/screens/InformationScreen.js';

const Stack = createStackNavigator();

const AppContent = () => {
  const {userData, setUserData} = useUser();
  const [initialRoute, setInitialRoute] = useState('Splash');

  useEffect(() => {
    console.log('useEffect executed');
    const initializeApp = async () => {
      console.log('initializeApp executed');
      // await subscribeToTopic('global_notifications');
      const generatedUuid = uuid.v4();
      console.log('Generated UUID:', generatedUuid);
      setUserData((prevState) => ({...prevState, userUuid: generatedUuid}));
      onAuthStateChanged(auth(), (user) => {
        setInitialRoute(user ? 'MainScreen' : 'SignUpPhoneNumber');
      });
    };

    initializeFCM(setUserData);
    initializeApp();

    return cleanupFCM();
  }, []);

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
        <Stack.Screen name="Record" component={RecordScreen} />
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
        {/* <Stack.Screen name="MemorySetting" component={MemorySettingScreen} /> */}
        <Stack.Screen name="AlertSetting" component={AlertSettingScreen} />
        {/* <Stack.Screen name="Privacy" component={PrivacyScreen} /> */}
        {/* <Stack.Screen name="Blocked" component={BlockedScreen} /> */}
        {/* <Stack.Screen name="Hided" component={HidedScreen} /> */}
        <Stack.Screen name="WorldTime" component={WorldTimeScreen} />
        <Stack.Screen name="OtherSetting" component={OtherSettingScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="HelpChoose" component={HelpChooseScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
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
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';
AppRegistry.registerComponent('realvoice', () => App);

export default App;