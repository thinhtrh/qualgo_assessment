import { createNavigationContainerRef } from '@react-navigation/native';
import { HomeStackNavigatorParamList } from '@shared/navigators';

export const navigationRef = createNavigationContainerRef<HomeStackNavigatorParamList>();

export const navigate = (name: keyof HomeStackNavigatorParamList, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const back = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const resetRoot = (routeName: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({
      index: 0,
      routes: [{ name: routeName, params }],
    });
  }
};
