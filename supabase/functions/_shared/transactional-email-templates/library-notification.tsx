import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Modern Edge Technology'

interface LibraryNotificationProps {
  name?: string
  email?: string
  phone?: string
  libraryName?: string
  libraryType?: string
  branches?: string
  servicesNeeded?: string[]
  currentChallenges?: string[]
  erateInterest?: string
  projectSummary?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={rowLabel}>{label}: </span>
      <span style={rowValue}>{value}</span>
    </Text>
  ) : null

const LibraryNotificationEmail = (props: LibraryNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New library inquiry from {props.libraryName || props.name || 'a library'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New library inquiry</Heading>
        <Text style={lead}>
          A new library assessment request has been submitted on {SITE_NAME}.
        </Text>

        <Section style={card}>
          <Heading style={h2}>Contact</Heading>
          <Row label="Name" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Phone" value={props.phone} />
          <Row label="Library" value={props.libraryName} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>Library details</Heading>
          <Row label="Type" value={props.libraryType} />
          <Row label="Branches" value={props.branches} />
          <Row label="E-Rate interest" value={props.erateInterest} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>Needs</Heading>
          <Row label="Services" value={props.servicesNeeded?.join(', ')} />
          <Row label="Current challenges" value={props.currentChallenges?.join(', ')} />
        </Section>

        {props.projectSummary ? (
          <Section style={card}>
            <Heading style={h2}>Project summary</Heading>
            <Text style={notes}>{props.projectSummary}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>{SITE_NAME} · Library E-Rate guidance</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LibraryNotificationEmail,
  subject: (d: Record<string, any>) =>
    `New library inquiry${d?.libraryName ? ` — ${d.libraryName}` : ''}`,
  displayName: 'Library inquiry notification',
  previewData: {
    name: 'Pat Lee',
    email: 'pat@samplelibrary.org',
    phone: '414-555-0100',
    libraryName: 'Sample Public Library',
    libraryType: 'Public Library',
    branches: '3',
    erateInterest: 'Yes — actively pursuing',
    servicesNeeded: ['Patron Wi-Fi', 'Network refresh'],
    currentChallenges: ['Slow Wi-Fi in branches', 'Aging switches'],
    projectSummary: 'Replace end-of-life network gear across all branches.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }
const container = { padding: '24px', maxWidth: '640px' }
const h1 = { fontSize: '22px', fontWeight: 700, color: '#0f0f12', margin: '0 0 8px' }
const h2 = { fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: '#6b46c1', margin: '0 0 8px' }
const lead = { fontSize: '14px', color: '#55575d', margin: '0 0 20px' }
const card = { backgroundColor: '#f7f7fa', border: '1px solid #ececf2', borderRadius: '8px', padding: '14px 16px', marginBottom: '12px' }
const row = { fontSize: '14px', color: '#0f0f12', margin: '4px 0' }
const rowLabel = { color: '#6b7280', fontWeight: 500 }
const rowValue = { color: '#0f0f12' }
const notes = { fontSize: '14px', color: '#0f0f12', whiteSpace: 'pre-wrap' as const, margin: 0 }
const hr = { borderColor: '#ececf2', margin: '24px 0 12px' }
const footer = { fontSize: '12px', color: '#9ca3af', margin: 0 }