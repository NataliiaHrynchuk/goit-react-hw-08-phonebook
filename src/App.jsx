import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import  Layout  from 'Layout';

const Home = lazy(() => 
  import('pages/Home')
);
const Register = lazy(() =>
  import('pages/Register')
);
const Login = lazy(() =>
  import('pages/Login')
);


export const App = () => {
  return (
    <>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>   
    </>  
  );
};
