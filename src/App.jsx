import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import  Layout  from 'Layout';

const HomePage = lazy(() => 
  import('pages/Home')
);
const RegisterPage = lazy(() =>
  import('pages/Register')
);
const LoginPage = lazy(() =>
  import('pages/Login')
);


export const App = () => {
  return (
    <>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>   
    </>  
  );
};
