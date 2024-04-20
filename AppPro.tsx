/* eslint-disable */
/* @ts-nocheck */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  blackText: {
    color: '#000000',
  },
});

export default AppPro;
