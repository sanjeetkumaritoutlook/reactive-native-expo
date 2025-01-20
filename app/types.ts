import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

//Type for useNavigation:

//We used NativeStackNavigationProp from @react-navigation/native-stack to
//  define the navigation prop type for Home. This tells TypeScript what routes are available and their associated parameters (if any).
