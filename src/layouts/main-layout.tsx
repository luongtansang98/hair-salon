import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
