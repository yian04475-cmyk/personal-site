export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  // 在这里添加你的工作/实习经历
  // {
  //   name: '公司名称',
  //   position: '职位',
  //   url: 'https://example.com',
  //   startDate: '2025-01-01',
  //   summary: '一句话总结你的工作。',
  //   highlights: [
  //     '负责 xxx 项目',
  //     '使用 xxx 技术完成了 xxx',
  //   ],
  // },
];

export default work;
