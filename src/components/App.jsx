import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import Layout from 'components/Layout';

const theme = createTheme();

const HomePage = lazy(() => 
  import('pages/Home')
);
const RegisterPage = lazy(() =>
  import('pages/Register')
);
const LoginPage = lazy(() =>
  import('pages/Login')
);

const ContactsPage = lazy(() =>
  import('pages/Contacts')
);


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <>
      <ThemeProvider theme={theme}>  
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
            <Route path="/register" element={
              <RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />
            }
            />
            <Route path="/login" element={
              <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
            }
            />
            <Route path="/contacts" element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }
            />
        </Route>
          </Routes>  
      </ThemeProvider>    
    </>  
  );
};
