export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: '个人音乐歌单网站',
    image: '/images/projects/music-playlist.png',
    date: '2026-07-01',
    desc: '个人音乐歌单展示网站。',
    featured: true,
  },
];

export default data;
