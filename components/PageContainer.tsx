import { Navbar } from './Navbar';
import React from 'react';

export const PageContainer: React.FC = (props) => {
  return (
    <div className="container min-h-screen mx-auto">
      <Navbar />
      {props.children}
    </div>
  );
};
