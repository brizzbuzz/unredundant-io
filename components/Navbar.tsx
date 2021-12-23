import { BriefcaseIcon, CameraIcon, FolderOpenIcon, MailIcon, RssIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

type NavigationIem = {
  name: string;
  icon: (props: any) => JSX.Element;
  href: string;
  current: boolean;
  hidden?: boolean;
};

const navigationItems: Array<NavigationIem> = [
  { name: 'Blog', icon: RssIcon, href: '/blog', current: true },
  { name: 'Projects', icon: FolderOpenIcon, href: '/projects', current: true },
  { name: 'Photography', icon: CameraIcon, href: '/photography', current: true, hidden: true },
  { name: 'Career', icon: BriefcaseIcon, href: '/career', current: true },
  { name: 'Contact', icon: MailIcon, href: '/contact', current: true },
];

export const Navbar: React.FC = () => {
  return (
    <div className="flex">
      <div className="py-10 mr-10 hidden md:block">
        <Link href="/">
          <a>
            <img src="/unredundant-blank.svg" className="h-14 w-14" />
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex py-14 px-5">
          {navigationItems
            .filter((item) => item.hidden !== true)
            .map((item) => (
              <li key={item.name} className="mr-10">
                <Link href={item.href}>
                  <a className="text-xl text-gray-100 hover:text-amber-500">{item.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
