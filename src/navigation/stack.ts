import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from './screen';

export type StackParamList = {
  [Screen.Home]: undefined;
  [Screen.Profile]: undefined;
};

export type HomeProps = NativeStackScreenProps<StackParamList, Screen.Home>;
export type ProfileProps = NativeStackScreenProps<
  StackParamList,
  Screen.Profile
>;
