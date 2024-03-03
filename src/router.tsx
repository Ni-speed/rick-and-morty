import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Characters, Episodes, StartPage } from '@/components/pages'
import { Locations } from '@/components/pages/locations/Locations'

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
    element: <Locations />,
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
