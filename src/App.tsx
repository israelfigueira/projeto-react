import './App.css'
import Rotas from './services/Rotas'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

function App() {

  const router = Rotas()

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
