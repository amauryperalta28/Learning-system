import { AppLoading } from '@shared/components/LoadingComponent/AppLoading';
import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AppRouter } from './AppRouter';
import './index.css';

const  App = () => {
  return (
    <>
    <AppRouter/>
    <ToastContainer position="bottom-right" />
    <AppLoading />
    </>
  )
}

export default App
