import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = lazy(() => import('pages/home/Home'));
const About = lazy(() => import('pages/about/About'));
const Contact = lazy(() => import('pages/contact/Contact'));
const AllTeams = lazy(() => import('pages/allteams/AllTeams'));
const TeamChallenges = lazy(() => import('pages/teamchallenges/TeamChallenges'));
const LeaderBoard = lazy(() => import('pages/leaderboard/Leaderboard'));
const AdminRewards1 = lazy(() => import('pages/rewards/AdminRewards1'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/adminrewards1',
    component: AdminRewards1,
  },  
  {
    path: '/allteams',
    component: AllTeams,
  },
  {
    path: '/team-challenges',
    component: TeamChallenges,
  },  
  {
    path: '/leaderboard',
    component: LeaderBoard,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
