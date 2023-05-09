import SideBar from '@/components/SideBar';
import React from 'react';

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout = ({ children }: UsersLayoutProps) => {
  return (
    <div className="h-full min-h-screen">
      <SideBar />
      {children}
    </div>
  );
};

export default UsersLayout;
