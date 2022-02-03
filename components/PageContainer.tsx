import { Navbar } from './Navbar';
import React from 'react';

export const PageContainer: React.FC = (props) => {
  return (
    <div>
      <div>
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};
