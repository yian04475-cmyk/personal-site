import type { Degree as DegreeType } from '@/data/resume/degrees';

import Degree from './Education/Degree';

interface EducationProps {
  data: DegreeType[];
}

export default function Education({ data }: EducationProps) {
  return (
    <div className="education">
      <div className="link-to" id="education" />
      <div className="title">
        <h3>教育背景</h3>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
    </div>
  );
}
