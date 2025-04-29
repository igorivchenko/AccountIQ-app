import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';

const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashBoardPage')
);
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
