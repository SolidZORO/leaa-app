import { HttpLink } from 'apollo-link-http';
import { ApolloLink, split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { OperationDefinitionNode } from 'graphql';
import { envConfig } from '@/configs';

// import { authUtil } from '@leaa/dashboard/src/utils';

const httpLink = new HttpLink({ uri: envConfig.GRAPHQL_ENDPOINT });

const authLink = new ApolloLink((operation, forward) => {
  // const token = authUtil.getAuthToken();
  const token = '';

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  // @ts-ignore
  return forward(operation);
});

const terminatingLink = split(
  ({ query: { definitions } }) =>
    definitions.some(node => {
      const { kind } = node as OperationDefinitionNode;
      return kind === 'OperationDefinition';
    }),
  httpLink,
);

const link = authLink.concat(ApolloLink.from([terminatingLink]));

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
