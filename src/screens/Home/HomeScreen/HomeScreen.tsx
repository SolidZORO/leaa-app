import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { IconFont } from '@/components/IconFont';

import { IScreenProps } from '@/interfaces';
import { authUtil } from '@/utils';

import style from './style.less';

interface IProps extends IScreenProps {}

export const HomeScreen = (props: IProps) => {
  props.navigation.setOptions({
    header: null,
  });

  const onGotoKeep = async () => {
    const userInfo = await authUtil.getAuthInfo();

    return userInfo
      ? props.navigation.navigate('Keep')
      : props.navigation.push('AuthStack', { mode: 'module', navigateToScreen: 'Keep' });
  };

  return (
    <SafeAreaView style={style['wrapper']}>
      <View style={style['container-wrapper']}>
        <TouchableOpacity activeOpacity={0.5} style={style['home-text-wrapper']} onPress={onGotoKeep}>
          <IconFont name="shequ" size={20} style={style['home-icon']} />
          <Text style={style['home-label']}>Click To Keep</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
