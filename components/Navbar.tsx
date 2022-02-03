import { BriefcaseIcon, CameraIcon, FolderOpenIcon, HomeIcon, MailIcon, RssIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { atom, useRecoilState } from 'recoil';

type NavigationIem = {
  name: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  href: string;
  current: boolean;
  hidden?: boolean;
};

export const currentTab = atom({
  key: 'currentTab',
  default: 'Home',
});

export const Navbar: React.FC = () => {
  const [current, setCurrent] = useRecoilState(currentTab);

  const onChange = (name: string) => {
    setCurrent(name);
  };

  // TODO Make name enum?
  const navigationItems: Array<NavigationIem> = [
    { name: 'Home', icon: HomeIcon, href: '/', current: false },
    { name: 'Blog', icon: RssIcon, href: '/blog', current: false },
    { name: 'Projects', icon: FolderOpenIcon, href: '/projects', current: false },
    { name: 'Photography', icon: CameraIcon, href: '/photography', current: false, hidden: true },
    { name: 'Contact', icon: MailIcon, href: '/contact', current: false },
  ];

  navigationItems.forEach((item) => {
    if (item.name == current) {
      item.current = true;
    }
  });

  return (
    <div>
      <ul>
        {navigationItems
          .filter((item) => item.hidden !== true)
          .map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <a onClick={() => onChange(item.name)}>{item.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
