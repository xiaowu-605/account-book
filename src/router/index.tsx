import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/pages/layout'
import { Expenses } from '@/pages/expenses'
import { Account } from '@/pages/account'
import { Bills } from '@/pages/bills'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'expenses',
        element: <Expenses />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'bills',
        element: <Bills />,
      },
    ],
  },
]
export const router = createBrowserRouter(routes)
