import React from 'react';
import { View, Platform, Pressable, Image, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './routeNavigation';
import LoginScreen from 'screens/LoginScreen';
import { RoutesConfig } from './routeConstant';
import RegisterScreen from 'screens/RegisterScreen';
import DashboardScreen from 'screens/DashboardScreen';
import { Colors } from 'theme/Color';
import { Images } from 'theme/Images';
import TransactionScreen from 'screens/TransactionScreen';
import SplashScreen from 'screens/SplashScreen';
import SetUpYourProfile from 'screens/SetUpYourProfile';
import RealIDScreen from 'screens/RealIDScreen';
import CareToShareScreen from 'screens/CareToShareScreen';
import AliasScreen from 'screens/AliasScreen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export { WIDTH, HEIGHT };

const RoutesStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const tabsData = {
  [RoutesConfig.DASHBOARD]: Images.dashboard,
  [RoutesConfig.TRANSACTION]: Images.transaction,
  [RoutesConfig.SETTINGS]: Images.setting,
  [RoutesConfig.HELP]: Images.help,

};

function MyTabBar({ state, navigation }: any) {


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

      }}>
      {state?.routes?.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <Pressable
            key={index}
            style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={tabsData[route?.name]}
                resizeMode="contain"
                style={{ width: WIDTH * 0.05, height: WIDTH * 0.05,tintColor:isFocused ? Colors.buttonColor : Colors.white }}
              />
              <Text style={{ color: isFocused ? Colors.buttonColor : Colors.white }}>{route?.name}</Text>
            </View>
          </Pressable>
        );

      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      backBehavior="history"
      tabBar={props => {
        const { state, navigation } = props;
        return (
          <View
            style={{
              height: Platform.OS === 'ios' ? HEIGHT * 0.1 : HEIGHT * 0.08,
              shadowColor: Colors.textColorFour,
              shadowOffset: { height: -4, width: 0 },
              shadowRadius: HEIGHT * 0.018,
              shadowOpacity: 0.1,
              elevation: 2,
              paddingHorizontal: WIDTH * 0.03,
              backgroundColor: '#262634'
            }}>
            <MyTabBar state={state} navigation={navigation} />
          </View>
        );
      }}>
      <Tab.Screen name={RoutesConfig.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={RoutesConfig.TRANSACTION} component={TransactionScreen} />
      <Tab.Screen name={RoutesConfig.SETTINGS} component={DashboardScreen} />
      <Tab.Screen name={RoutesConfig.HELP} component={DashboardScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

// const CustomTab = (props: any) => {
//     const doubleTapRef = useRef(null);
//     const { state, navigation, startAnimation } = props;
//     const dispatch = useDispatch();
//     const bottomTabAnimation = useSharedValue(1);
//     return (

//     )
// };

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RoutesStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return { cardStyle: { opacity: progress } };
          },
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 500 } },
            close: { animation: 'timing', config: { duration: 500 } },
          },
        }}>
        <RoutesStack.Screen name="SplashScreen" component={SplashScreen} />
        <RoutesStack.Screen name={RoutesConfig.LOGIN} component={LoginScreen} />
        <RoutesStack.Screen name={RoutesConfig.REGISTER} component={RegisterScreen} />
        <RoutesStack.Screen name={RoutesConfig.SET_UP_YOUR_PROFILE} component={SetUpYourProfile} />
        <RoutesStack.Screen name={RoutesConfig.REALIDSCREEN} component={RealIDScreen} />
        <RoutesStack.Screen name={RoutesConfig.CARETOSHARESCREEN} component={CareToShareScreen} />
        <RoutesStack.Screen name={RoutesConfig.ALIASSCREEN} component={AliasScreen} />
      </RoutesStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
