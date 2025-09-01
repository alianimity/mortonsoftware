import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Maker Software',
  description: 'Get in touch with Maker Software LLC. Start your digital transformation project today. We serve individuals, startups, SMBs, and enterprises worldwide.',
  keywords: 'contact maker software, digital transformation consultation, software development inquiry, project quote, global software services',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
