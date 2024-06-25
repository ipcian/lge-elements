import { Button, Flex, Text } from '@stoplight/mosaic';
import * as React from 'react';

interface LoadMoreProps {
  loading: boolean;
  onClick: () => void;
}

export function LoadMore ({ loading, onClick }:LoadMoreProps) {
  return (
    <Flex flexDirection="col" justifyContent="center" alignItems="center" style={{ height: '400px' }}>
      <Button aria-label="load-example" onPress={onClick} appearance="minimal" loading={loading} disabled={loading}>
        {loading ? 'Loading...' : 'Load examples'}
      </Button>
      <Text fontSize="base" textAlign="center">
        Large examples are not rendered by default.
      </Text>
    </Flex>
  );
};
