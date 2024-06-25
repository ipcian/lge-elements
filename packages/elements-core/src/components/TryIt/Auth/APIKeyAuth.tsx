import { Panel } from '@stoplight/mosaic';
import { IApiKeySecurityScheme } from '@stoplight/types';
import * as React from 'react';

import { AuthTokenInput } from './AuthTokenInput';

interface APIKeyAuthProps {
  scheme: IApiKeySecurityScheme;
  onChange: (apiKey: string) => void;
  value: string;
}

export function APIKeyAuth ({ scheme, onChange, value }:APIKeyAuthProps) {
  return (
    <Panel.Content className="ParameterGrid" data-test="auth-try-it-row">
      <AuthTokenInput type="apiKey" name={scheme.name} value={value} onChange={onChange} />
    </Panel.Content>
  );
};
