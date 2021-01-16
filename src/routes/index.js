// Home
import Home from './../pages/Home';
import AllMovie from './../pages/AllMovie';
import Profile from './../pages/Profile';
import DetailMovie from './../pages/DetailMovie';
import Login from './../pages/Login';
import Register from './../pages/Register';
import BookingTicket from './../pages/BookingTicket';
// Admin
import Dashboard from './../pages/Dashboard';
import UserManagement from './../pages/UserManagement';
import MovieManagement from './../pages/MovieManagement';
import CreateShowTime from './../pages/CreateShowTime';
import ClusterCinema from './../pages/ClusterCinema';
import News from './../pages/News';
import DetailNews from './../pages/DetailNews';
import NewsManagement from './../pages/NewsManagement';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    exact: true,
    path: '/allmovie',
    component: AllMovie,
  },
  {
    exact: true,
    path: '/moviedetail/:maphim',
    component: DetailMovie,
  },
  {
    exact: true,
    path: '/booking/:maLichChieu',
    component: BookingTicket,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  { exact: true, path: '/profile', component: Profile },
  {
    exact: true,
    path: '/clustercinema',
    component: ClusterCinema,
  },
  {
    exact: true,
    path: '/news',
    component: News,
  },
  {
    exact: true,
    path: '/detailnews/:matintuc',
    component: DetailNews,
  },
];
const routesAdmin = [
  {
    exact: true,
    path: '/dashboard',
    component: Dashboard,
  },
  {
    exact: true,
    path: '/usermanagement',
    component: UserManagement,
  },
  {
    exact: true,
    path: '/moviemanagement',
    component: MovieManagement,
  },
  {
    exact: true,
    path: '/createshowtime',
    component: CreateShowTime,
  },
  {
    exact: true,
    path: '/newsmanagement',
    component: NewsManagement,
  },
];
export { routesHome, routesAdmin };
{
  /* <HomeTemplate exact path='/' Component={Home} />
          <HomeTemplate exact path='/home' Component={Home} />
          <HomeTemplate exact path='/allmovie' Component={AllMovie} />
          <HomeTemplate
            exact
            path='/moviedetail/:maphim'
            Component={DetailMovie}
          />
          <HomeTemplate
            exact
            path='/booking/:maLichChieu'
            Component={BookingTicket}
          />
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/profile' Component={Profile} />
          <HomeTemplate exact path='/clustercinema' Component={ClusterCinema} />
          <HomeTemplate exact path='/news' Component={News} />
          <HomeTemplate
            exact
            path='/detailnews/:matintuc'
            Component={DetailNews}
          />



          ADMIN


          <AdminTemplate exact path='/dashboard' Component={Dashboard} />
          <AdminTemplate
            exact
            path='/usermanagement'
            Component={UserManagement}
          />
          <AdminTemplate
            exact
            path='/moviemanagement'
            Component={MovieManagement}
          />
          <AdminTemplate
            exact
            path='/createshowtime'
            Component={CreateShowTime}
          />
          <AdminTemplate
            exact
            path='/newsmanagement'
            Component={NewsManagement}
          /> */
}
