import { BriefcaseIcon, CameraIcon, FolderOpenIcon, HomeIcon, MailIcon, RssIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { atom, useRecoilState } from 'recoil';

type NavigationIem = {
  name: string;
  icon: (props: any) => JSX.Element;
  href: string;
  current: boolean;
  hidden?: boolean;
};

/*
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
 */

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
  let navigationItems: Array<NavigationIem> = [
    { name: 'Home', icon: HomeIcon, href: '/', current: false },
    { name: 'Blog', icon: RssIcon, href: '/blog', current: false },
    { name: 'Projects', icon: FolderOpenIcon, href: '/projects', current: false },
    { name: 'Photography', icon: CameraIcon, href: '/photography', current: false, hidden: true },
    { name: 'Career', icon: BriefcaseIcon, href: '/career', current: false },
    { name: 'Contact', icon: MailIcon, href: '/contact', current: false },
  ];

  navigationItems.forEach((item) => {
    if (item.name == current) {
      item.current = true;
    }
  });

  return (
    <div className="grid place-items-center w-screen">
      <ul className="flex py-14 px-5">
        {navigationItems
          .filter((item) => item.hidden !== true)
          .map((item) => (
            <li key={item.name} className="mr-10">
              <Link href={item.href}>
                <a
                  className={`text-xl ${item.current ? 'text-pop' : 'text-offset'}`}
                  onClick={() => onChange(item.name)}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
