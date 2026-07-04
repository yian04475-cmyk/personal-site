export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { title: 'HTML / CSS', competency: 4, category: ['前端开发'] },
  { title: 'JavaScript', competency: 4, category: ['前端开发', '编程语言'] },
  { title: 'React', competency: 3, category: ['前端开发'] },
  { title: 'TypeScript', competency: 3, category: ['前端开发', '编程语言'] },
  { title: 'Python', competency: 4, category: ['后端开发', '编程语言'] },
  { title: 'Node.js', competency: 3, category: ['后端开发'] },
  { title: 'Git', competency: 3, category: ['工具'] },
  { title: 'Linux', competency: 2, category: ['工具'] },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  );
  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
