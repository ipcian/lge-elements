import { IMarkdownViewerProps, MarkdownViewer as MarkdownViewerComponent } from '@stoplight/markdown-viewer';
import * as React from 'react';

/**
 * This wrapper is no longer needed and can be removed in the future.
 */
export const MarkdownViewer = (props: IMarkdownViewerProps & any) => {
    //@todo Warning validateDOMNesting ...
    return <MarkdownViewerComponent {...props} />;
};
MarkdownViewer.displayName = 'MarkdownViewer';
