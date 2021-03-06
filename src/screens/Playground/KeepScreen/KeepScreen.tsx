import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { IScreenProps, INavigationStackOptions, IAuthBaseInfo } from '@/interfaces';
import { IconFont } from '@/components/IconFont';

import style from './style.less';

interface IProps extends IScreenProps {}

export const KeepScreen = (props: IProps) => {
  const [userInfo, setUserInfo] = useState<IAuthBaseInfo>();

  return (
    <SafeAreaView style={style['wrapper']}>
      <View style={style['label-wrapper']}>
        <Text style={style['label-wrapper-text']}>
          KEEP <IconFont name="xiaoshi" size={18} /> !
        </Text>
      </View>
    </SafeAreaView>
  );
};
