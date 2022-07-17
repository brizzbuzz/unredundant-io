import { Navbar } from './Navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
