import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Badge, Tooltip } from '@stoplight/mosaic';
import React from 'react';

import { badgeDefaultBackgroundColor, badgeDefaultColor } from '../../../constants';

export function DeprecatedBadge() {
    return <Tooltip
        renderTrigger={
            <Badge intent="warning" icon={['fas', 'exclamation-circle']} data-testid="badge-deprecated">
                Deprecated
            </Badge>
        }
    >
        This operation has been marked as deprecated, which means it could be removed at some point in the future.
    </Tooltip>
}

export function InternalBadge({ isHttpService }:{ isHttpService?: boolean }) {
    return <Tooltip
        renderTrigger={
            <Badge icon={faEye} data-testid="badge-internal" bg="danger">
                Internal
            </Badge>
        }
    >
        {`This ${isHttpService ? 'operation' : 'model'} is marked as internal and won't be visible in public docs.`}
    </Tooltip>
};

export function VersionBadge({ value, backgroundColor }:{ value: string; backgroundColor?: string }) {
    return <Badge
        appearance="solid"
        size="sm"
        border={0}
        style={{
            backgroundColor: backgroundColor || badgeDefaultBackgroundColor,
            color: badgeDefaultColor,
        }}
    >
        {enhanceVersionString(value)}
    </Badge>
}

const enhanceVersionString = (version: string): string => {
  if (version[0] === 'v') return version;

  return `v${version}`;
};
