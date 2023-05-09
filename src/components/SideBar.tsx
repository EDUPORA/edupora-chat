'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

const SideBar = () => {
  return (
    <div>
      SideBar
      <button onClick={() => signOut()}></button>
    </div>
  );
};

export default SideBar;
