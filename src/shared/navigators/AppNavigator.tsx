import { MovieDetailScreen, SearchMovieScreen } from '@features/movies/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppHeader } from '@shared/components';
import { navigationRef } from '@shared/services/navigations';
import React, { memo } from 'react';
import MainTabs from './MainTabs';

export type HomeStackNavigatorParamList = {
  Main: undefined;
  MovieDetail: undefined;
  SearchMovie: undefined;
};

// export type RootStackScreenProps<T extends keyof HomeStackNavigatorParamList> = StackScreenProps<
//   HomeStackNavigatorParamList,
//   T
// >;

// export type HomeScreenProp = CompositeNavigationProp<
//   StackNavigationProp<HomeStackNavigatorParamList, 'Main'>,
//   BottomTabNavigationProp<MainBottomTabNavigatorParamList, 'Home'>
// >;

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const AppNavigators = (): JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: (props) => <AppHeader headerTitle={props.options.title} />,
        }}
      >
        <Stack.Screen name={'Main'} component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name={'MovieDetail'}
          component={MovieDetailScreen}
          options={{ title: 'Movie Detail', headerShown: false }}
        />
        <Stack.Screen
          name={'SearchMovie'}
          component={SearchMovieScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            // presentation: 'fullScreenModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppNavigators);
