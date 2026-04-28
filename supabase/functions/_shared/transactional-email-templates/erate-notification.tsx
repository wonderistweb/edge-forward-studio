import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Modern Edge Technology'

interface ErateNotificationProps {
  name?: string
  email?: string
  phone?: string
  organization?: string
  applicantType?: string
  fundingYear?: string
  servicesNeeded?: string[]
  processStatus?: string
  helpAreas?: string[]
  studentCount?: string
  projectSummary?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <span style={rowLabel}>{label}: </span>
      <span style={rowValue}>{value}</span>
    </Text>
  ) : null

const ErateNotificationEmail = (props: ErateNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New E-Rate inquiry from {props.organization || props.name || 'a school'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New E-Rate inquiry</Heading>
        <Text style={lead}>
          A new E-Rate assessment request has been submitted on {SITE_NAME}.
        </Text>

        <Section style={card}>
          <Heading style={h2}>Contact</Heading>
          <Row label="Name" value={props.name} />
          <Row label="Email" value={props.email} />
          <Row label="Phone" value={props.phone} />
          <Row label="Organization" value={props.organization} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>E-Rate details</Heading>
          <Row label="Applicant type" value={props.applicantType} />
          <Row label="Funding year" value={props.fundingYear} />
          <Row label="Process status" value={props.processStatus} />
          <Row label="Student count" value={props.studentCount} />
        </Section>

        <Section style={card}>
          <Heading style={h2}>Needs</Heading>
          <Row label="Services" value={props.servicesNeeded?.join(', ')} />
          <Row label="Help areas" value={props.helpAreas?.join(', ')} />
        </Section>

        {props.projectSummary ? (
          <Section style={card}>
            <Heading style={h2}>Project summary</Heading>
            <Text style={notes}>{props.projectSummary}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>{SITE_NAME} · E-Rate guidance for Wisconsin schools</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ErateNotificationEmail,
  subject: (d: Record<string, any>) =>
    `New E-Rate inquiry${d?.organization ? ` — ${d.organization}` : ''}`,
  displayName: 'E-Rate inquiry notification',
  previewData: {
    name: 'Jane Smith',
    email: 'jsmith@district.k12.wi.us',
    phone: '414-555-0100',
    organization: 'Sample School District',
    applicantType: 'School District',
    fundingYear: 'FY2026',
    processStatus: 'Form 470 not yet filed',
    helpAreas: ['Wi-Fi refresh', 'Vendor evaluation'],
    servicesNeeded: ['Category 2 — Internal Connections'],
    studentCount: '1,200',
    projectSummary: 'District-wide Wi-Fi 6 refresh across 8 buildings.',
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