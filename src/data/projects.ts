export interface Project {
  title: string;
  slug: string;
  subtitle?: string;
  link?: string;
  image: string;
  images?: string[];
  date: string;
  desc: string;
  body?: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: '个人音乐歌单网站',
    slug: 'music-playlist',
    image: '/images/projects/网站.jpg',
    images: [
      '/images/projects/网站.jpg',
      '/images/projects/music-playlist.png',
    ],
    date: '2026-07-01',
    desc: '音乐播放网站\n阿里云服务器开放端口到手机\n手机添加书签到桌面使用',
    body: '使用阿里云服务器搭建的个人音乐网站，开放端口后可在手机上访问，添加到桌面即可像 App 一样使用。',
    tech: ['Nginx', 'HTML', 'CSS', '阿里云'],
    featured: true,
  },
];

export default data;
