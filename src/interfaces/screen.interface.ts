import { ParamListBase } from '@react-navigation/core';
import { StackNavigationProp, StackNavigationOptions } from '@react-navigation/stack';

export interface IScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: {
    key: string;
    name: string;
    params: any;
  };
}
export type INavigationStackOptions = StackNavigationOptions;
