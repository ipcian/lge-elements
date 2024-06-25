import { CodeViewer, CodeViewerProps } from '@stoplight/mosaic-code-viewer';
import React from 'react';

import { useLineCount } from './hooks/useLineCount';

const MAX_HIGHLIGHT_LINE_COUNT = 10000;

// ResponseCodeViewer 컴포넌트 정의

export function ResponseCodeViewer<E extends React.ElementType = 'pre'>(
    // @ts-ignore
    props: CodeViewerProps<E>,
): JSX.Element | null {
    const { value, ...rest } = props;
    const lineCount = useLineCount({ example: value });

    if (lineCount < MAX_HIGHLIGHT_LINE_COUNT) {
        return <CodeViewer language="json" value={value} />;
    }

    return (
        <CodeViewer
            language="json"
            showAsRaw={MAX_HIGHLIGHT_LINE_COUNT < lineCount}
            style={{
                color: 'white',
            }}
            value={value}
            {...rest}
        />
    );
}
