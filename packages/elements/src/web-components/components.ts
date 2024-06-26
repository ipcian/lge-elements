import { createElementClass } from '@stoplight/elements-core';

import { API } from '../index';

export const ApiElement = createElementClass(API, {
  apiDescriptionUrl: { type: 'string', defaultValue: '' },
  apiDescriptionDocument: { type: 'string', defaultValue: '' },
  basePath: { type: 'string', defaultValue: '' },
  staticRouterPath: { type: 'string', defaultValue: '' },
  router: { type: 'string', defaultValue: 'history' },
  layout: { type: 'string', defaultValue: 'sidebar' },
  hideTryIt: { type: 'boolean', defaultValue: false },
  hideSchemas: { type: 'boolean', defaultValue: false },
  hideInternal: { type: 'boolean', defaultValue: false },
  hideExport: { type: 'boolean', defaultValue: false },
  logo: { type: 'string', defaultValue: '' },
  tryItCredentialsPolicy: { type: 'string', defaultValue: 'include' },
  tryItCorsProxy: { type: 'string', defaultValue: '' },
  maxRefDepth: { type: 'number', defaultValue: 0 },
  renderExtensionAddon: { type: 'function', defaultValue: (): any => {} },
});
