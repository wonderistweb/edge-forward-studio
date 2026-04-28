import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Modern Edge Technology'

interface QuoteNotificationProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  organizationType?: string
  teamSize?: string
  servicesNeeded?: string[]
  painPoints?: string[]
  timeline?: string
  additionalNotes?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={rowLabel}>{label}: </span>
      <span style={rowValue}>{value}</span>
    </Text>
  ) : null

const QuoteNotificationEmail = (props: QuoteNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote request from {props.name || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New quote request</Heading>
        <Text style={lead}>
          A new quote request has been submitted on {SITE_NAME}.
        </Text>

        <Section style={card}>
          <Heading style={h2}>Contact</Heading>
          <Row label="Name" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Phone" value={props.phone} />
          <Row label="Company" value={props.company} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>Organization</Heading>
          <Row label="Type" value={props.organizationType} />
          <Row label="Team / endpoints" value={props.teamSize} />
          <Row label="Timeline" value={props.timeline} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>Needs</Heading>
          <Row label="Services" value={props.servicesNeeded?.join(', ')} />
          <Row label="Pain points" value={props.painPoints?.join(', ')} />
        </Section>

        {props.additionalNotes ? (
          <Section style={card}>
            <Heading style={h2}>Notes</Heading>
            <Text style={notes}>{props.additionalNotes}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>{SITE_NAME} · Milwaukee, WI</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteNotificationEmail,
  subject: (d: Record<string, any>) =>
    `New quote request${d?.name ? ` — ${d.name}` : ''}${d?.company ? ` (${d.company})` : ''}`,
  displayName: 'Quote request notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '414-555-0100',
    company: 'Acme Manufacturing',
    organizationType: 'Manufacturing',
    teamSize: '120 endpoints',
    timeline: '30-60 days',
    servicesNeeded: ['Wireless networks', 'Cloud migration'],
    painPoints: ['Slow Wi-Fi', 'Aging infrastructure'],
    additionalNotes: 'Looking to consolidate vendors and reduce monthly spend.',
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