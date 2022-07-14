import React from 'react';
import { ProfileProps } from '@navigation/stack';
import { View, StyleSheet } from 'react-native';

const Profile: React.FC<ProfileProps> = ({}) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
