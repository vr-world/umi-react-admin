import PageHeader from '@/components/Header';
import { useLocation } from '@umijs/max';
import { Outlet } from 'umi';

export default function Page() {
  const location = useLocation();
  if (location.pathname === '/login') {
    return <Outlet />;
  }
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}
