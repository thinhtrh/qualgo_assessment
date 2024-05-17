import { HomeMovieScreen } from '@features/movies/screens';
import { SettingsScreen } from '@features/user/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppHeader } from '@shared/components';
import { navigate } from '@shared/services/navigations';
import { Colors, Metrics } from '@shared/theme';
import React, { memo } from 'react';
import { HomeStackNavigatorParamList } from './AppNavigator';
import { TabIcon } from './components';

export type MainBottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainBottomTabNavigatorParamList>();

const unActiveColor = '#666666';
const activeColor = Colors.white;

const MainTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.black,
          paddingTop: Metrics.spaceM,
        },
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={HomeMovieScreen}
        options={{
          header: () => (
            <AppHeader
              rightIcon="search"
              leftIcon={null}
              rightIconType={'FontAwesome'}
              headerTitle={'Discovery Movies'}
              onRightPress={() => {
                navigate('SearchMovie');
              }}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? 'home' : 'home-outline'}
              color={focused ? activeColor : unActiveColor}
              label={'Home'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label={'Settings'}
              name={focused ? 'cog' : 'cog-outline'}
              color={focused ? activeColor : unActiveColor}
            />
          ),
          header: () => <AppHeader leftIcon={null} headerTitle={'Settings'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(MainTabs);
