import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <p>{data.school}</p>
      </header>
    </article>
  );
}
