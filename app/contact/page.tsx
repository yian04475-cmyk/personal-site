import type { Metadata } from 'next';

import ContactContent from './ContactContent';
import ContactStats from './ContactStats';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: '联系',
  description: '联系 AnYi',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">联系方式</h1>
        </header>
        <ContactContent />
        <ContactStats />
      </section>
    </PageWrapper>
  );
}
