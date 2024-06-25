import { Panel } from '@stoplight/mosaic';
import { IBearerSecurityScheme } from '@stoplight/types';
import * as React from 'react';

import { AuthTokenInput } from './AuthTokenInput';

interface BearerAuthProps {
  scheme: IBearerSecurityScheme;
  onChange: (value: string) => void;
  value: string;
}

export function BearerAuth({ value, onChange }:BearerAuthProps) {
  return (
    <Panel.Content className="ParameterGrid" data-test="auth-try-it-row">
      <AuthTokenInput type="http" name="Token" value={value} onChange={onChange} />
    </Panel.Content>
  );
};
