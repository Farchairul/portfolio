import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Certificates from courses and learning programs I’ve completed.',
}

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
