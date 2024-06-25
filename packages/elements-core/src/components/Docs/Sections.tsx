import { Box, Flex, HeadingProps, Panel, PanelProps } from '@stoplight/mosaic';
import * as React from 'react';

import { slugify } from '../../utils/string';
import { LinkHeading } from '../LinkHeading';

export interface ISectionTitle {
  title: string;
  id?: string;
  size?: HeadingProps['size'];
  isCompact?: boolean;
  children?: any
}

export function SectionTitle ({ title, id, size = 2, isCompact = false, children }:ISectionTitle) {
  return (
    <Flex w="full">
      <Box py={1} pr={6} as={LinkHeading} size={size} aria-label={title} id={id || slugify(title)}>
        {title}
      </Box>
      <Flex alignSelf={'center'} py={1} flexGrow style={{ minWidth: 0 }} justify={isCompact ? 'end' : undefined}>
        {children}
      </Flex>
    </Flex>
  );
};

export function SectionSubtitle (props:ISectionTitle) {
  return <SectionTitle {...props} size={3} />;
};

type SubSectionPanelProps = {
  title: React.ReactNode;
  hasContent?: boolean;
  rightComponent?: React.ReactNode;
    children?:any
};

export function SubSectionPanel ({
  title,
  children,
  hasContent,
  rightComponent,
  defaultIsOpen = true,
  onChange,
}:SubSectionPanelProps & Pick<PanelProps, 'defaultIsOpen' | 'onChange'>)   {
  return (
    <Panel isCollapsible={hasContent} defaultIsOpen={defaultIsOpen} onChange={onChange} appearance="outlined">
      <Panel.Titlebar fontWeight="medium" rightComponent={rightComponent}>
        <div role="heading">{title}</div>
      </Panel.Titlebar>

      {hasContent !== false && <Panel.Content>{children}</Panel.Content>}
    </Panel>
  );
};
