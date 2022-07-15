import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { HomeProps } from '@navigation/stack';
import { useAppSelector } from '@states/hooks';
import { Screen } from '@navigation/screen';
import { useSignInMutation } from '@states/slices/api/authApi';
import { Text } from '@components/general';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { version } = useAppSelector(state => state.app);
  const [signUser, result] = useSignInMutation();

  useEffect(() => {
    signUser({ email: '', password: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>App Version: {version}</Text>
        <Button
          title="Go to profile"
          onPress={() => navigation.navigate(Screen.Profile)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
