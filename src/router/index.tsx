import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/pages/layout'
import { Expenses } from '@/pages/expenses'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'expenses',
        element: <Expenses />,
      },
    ],
  },
]
export const router = createBrowserRouter(routes)
