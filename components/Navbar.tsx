import { CameraIcon, FolderOpenIcon, HomeIcon, MailIcon, RssIcon } from '@heroicons/react/outline';
import { Col, Container, Row } from '@nextui-org/react';
import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { styled } from '@stitches/react';
import { Text } from '@nextui-org/react';
import Link from 'next/link';

const NavItem = styled('div', {
  padding: '10px',
});

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
    <Container>
      <Row>
        {navigationItems
          .filter((item) => item.hidden !== true)
          .map((item) => (
            <Col key={item.name}>
              <NavItem>
                <Link href={item.href}>
                  <a onClick={() => onChange(item.name)}>
                    <Text
                      h1
                      size={20}
                      css={{
                        textAlign: 'center',
                        textGradient: '45deg, $blue500 -20%, $pink500 50%',
                      }}
                      weight="bold"
                    >
                      {item.name}
                    </Text>
                  </a>
                </Link>
              </NavItem>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
