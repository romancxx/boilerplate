import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomeProps } from '@navigation/stack';
import { useAppSelector } from '@states/hooks';
import { Screen } from '@navigation/screen';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { Section } from '@components/data-display/Section/Section';
import { useSignInMutation } from '@states/slices/api/authApi';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { version } = useAppSelector(state => state.app);
  const [signUser, result] = useSignInMutation();

  useEffect(() => {
    signUser({ email: '', password: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>{version}</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Button
            title="Go to profile"
            onPress={() => navigation.navigate(Screen.Profile)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
