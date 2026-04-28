/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as quoteNotification } from './quote-notification.tsx'
import { template as erateNotification } from './erate-notification.tsx'
import { template as libraryNotification } from './library-notification.tsx'
import { template as contactNotification } from './contact-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'quote-notification': quoteNotification,
  'erate-notification': erateNotification,
  'library-notification': libraryNotification,
  'contact-notification': contactNotification,
}