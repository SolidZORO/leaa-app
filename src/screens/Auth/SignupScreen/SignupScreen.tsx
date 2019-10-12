import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { IconFont } from '@/components/IconFont';
import { IScreenProps } from '@/interfaces';

import style from './style.less';

interface IProps extends IScreenProps {}

export const SignupScreen = (props: IProps) => {
  props.navigation.setOptions({
    headerTransparent: true,
    headerLeft: () => (
      <Text
        onPress={() => props.navigation.navigate('Login')}
        style={{ marginLeft: 10, width: 30, textAlign: 'center' }}
      >
        <IconFont name="return" size={24} />
      </Text>
    ),
  });

  return (
    <SafeAreaView style={style['wrapper']}>
      <View style={style['header-title']}>
        <Text style={style['header-title-text']}>SIGNUP</Text>
      </View>
    </SafeAreaView>
  );
};
