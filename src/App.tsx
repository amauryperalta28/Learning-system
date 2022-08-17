import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { AppRouter } from './AppRouter';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const  App = () => {
  return (
    <>
    <AppRouter/>
    <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
