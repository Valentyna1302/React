import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Todos from '../pages/Todos/Todos';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/authOperations';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/selectors';
import PrivateRoute from '../config/routes/PrivateRoute';
import PublicRoute from '../config/routes/PublicRoute';
import RestrictedRoute from '../config/routes/RestictedRoute';
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path='todos'
          element={
            <PrivateRoute redirectTo='/'>
              <Todos />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/todos' />} />
      <Route path='*' element={<NotFound />} />
      <Route
        path='/register'
        element={
          <PublicRoute redirectTo='/'>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
export default App;
