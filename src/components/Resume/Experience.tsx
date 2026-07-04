import type { Position } from '@/data/resume/work';

import Job from './Experience/Job';

interface ExperienceProps {
  data: Position[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>工作经历</h3>
      </div>
      {data.length === 0 ? (
        <p className="text-muted">正在寻找机遇···</p>
      ) : (
        data.map((job) => (
          <Job data={job} key={`${job.name}-${job.position}`} />
        ))
      )}
    </div>
  );
}
