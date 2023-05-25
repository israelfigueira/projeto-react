import {
    createBrowserRouter
} from 'react-router-dom'
import Conteudo from '../ui/Conteudo/Conteudo'
import FormEtapas from '../pages/Form/FormEtapas'


const Rotas = () => createBrowserRouter([
    {
        path: "/",
        element: <Conteudo />,
        children: [
            {
                path: "/",
                element: <FormEtapas />
            },
        ]
    },
])

export default Rotas