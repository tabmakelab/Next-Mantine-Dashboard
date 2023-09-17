import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useEffect } from 'react';

const AdminLayout = dynamic(import('../../layouts/admin-layout'), { ssr: false });

const DashboardPage: NextPage = () => {
  useEffect(() => {
    console.log('Dashboard page mounted');
  });
  return (
    <AdminLayout>
      <h1>Dashboard</h1>
    </AdminLayout>
  );
};

export default DashboardPage;
