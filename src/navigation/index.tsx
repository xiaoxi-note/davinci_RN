import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../components/com1'; // 导入你的屏幕组件
import SettingsScreen from '../components/com2'; // 导入另一个屏幕组件
import Icon from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();
// const t = createStackNavigator();
const homeIcon = <Icon name="home" size={30} />;
export default function TabBarNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            header: () => null,
            animation: 'fade',
            tabBarIcon: () => homeIcon,
          }}
          name="首页"
          component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
