'use client';

import EmptyState from '@/components/EmptyState';
import React from 'react';

function Users() {
  return (
    <div className="hidden lg:block lg:pl-80 h-full min-h-screen">
      <EmptyState />
    </div>
  );
}

export default Users;
