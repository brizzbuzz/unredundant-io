import { Navbar } from './Navbar';
import React from 'react';

export const PageContainer: React.FC = (props) => {
  return (
    <div className="min-w-max min-h-full bg-gradient-to-tr from-rich to-backdrop">
      <div className="container min-h-screen mx-auto">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};
