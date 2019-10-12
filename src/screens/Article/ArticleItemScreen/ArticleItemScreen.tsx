import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { GET_ARTICLE } from '@/graphqls';
import { IScreenProps } from '@/interfaces/screen.interface';
import { Article } from '@/entrys';
import { ArticleArgs } from '@/dtos/article';

import { IconFont } from '@/components/IconFont';
import { ErrorCard } from '@/components/ErrorCard';
import { RenderHtml } from '@/components/RenderHtml';

import style from './style.less';

interface IProps extends IScreenProps {}

export const ArticleItemScreen = (props: IProps) => {
  props.navigation.setOptions({
    title: props.route.params && props.route.params.title,
    headerLeft: () => (
      <Text
        onPress={() => props.navigation.navigate('AppStack')}
        style={{ marginLeft: 10, width: 30, textAlign: 'center' }}
      >
        <IconFont name="return" size={24} />
      </Text>
    ),
    headerRight: () => (
      <Text onPress={() => console.log('more')} style={{ marginRight: 10, width: 30, textAlign: 'center' }}>
        <IconFont name="more" size={24} />
      </Text>
    ),
  });

  const id = props.route.params && props.route.params.id;

  const getArticleQuery = useQuery<{ article: Article }, ArticleArgs>(GET_ARTICLE, {
    variables: { id: Number(id) },
  });

  return (
    <SafeAreaView style={style['wrapper']}>
      {getArticleQuery.error ? <ErrorCard error={getArticleQuery.error} /> : null}

      {getArticleQuery && getArticleQuery.data && getArticleQuery.data.article && (
        <RenderHtml title={getArticleQuery.data.article.title} content={`${getArticleQuery.data.article.content}`} />
      )}
    </SafeAreaView>
  );
};
