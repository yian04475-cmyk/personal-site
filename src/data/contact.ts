import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faQq } from '@fortawesome/free-brands-svg-icons/faQq';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
  copyText?: string;
}

const data: ContactItem[] = [
  {
    link: '#',
    label: '微信',
    icon: faWeixin,
    copyText: 'dddzzz-IoI-',
  },
  {
    link: '#',
    label: 'QQ',
    icon: faQq,
    copyText: '2711948436',
  },
  {
    link: 'https://x.com/anyi667',
    label: 'X (Twitter)',
    icon: faXTwitter,
  },
];

export default data;
