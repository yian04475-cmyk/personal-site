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
    desc: '音乐播放网站，阿里云服务器开放端口到手机，手机添加书签到桌面使用',
    featured: true,
  },
];

export default data;