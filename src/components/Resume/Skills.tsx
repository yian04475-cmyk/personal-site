import type { Skill } from '@/data/resume/skills';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  // Group skills by category
  const groups: Record<string, Skill[]> = {};
  for (const skill of skills) {
    for (const cat of skill.category) {
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(skill);
    }
  }

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>技能</h3>
      </div>
      <div className="skill-list-simple">
        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className="skill-cat">
            <h4>{category}</h4>
            <p>{items.map((s) => s.title).join('、')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
