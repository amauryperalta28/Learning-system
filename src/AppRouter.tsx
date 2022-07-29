import { Route, Routes } from 'react-router-dom'
import { HomePage } from './core/pages/HomePage/HomePage'
import { LayoutPage } from './core/pages/LayoutPage/LayoutPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LayoutPage/>}>
           <Route index element={<HomePage/>} />
        </Route>
    </Routes>
  )
}

