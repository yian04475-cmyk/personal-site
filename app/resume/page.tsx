import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import { skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: '简历',
  description:
    '邓兆俊的简历 — 教育背景、技能、项目经历。',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">简历</h1>
        </header>


        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
