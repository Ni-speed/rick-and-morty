import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Characters, Episodes, StartPage } from '@/components/pages'

const router = createBrowserRouter([
  {
    element: <StartPage />,
    path: '/',
  },
  {
    element: <Characters />,
    path: '/characters',
  },
  {
    element: <div>locations</div>,
    path: '/locations',
  },
  {
    element: <Episodes />,
    path: '/episodes',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
