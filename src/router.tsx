import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Characters, StartPage } from '@/components/pages'
import { EpisodesTable } from '@/components/pages/episodes/episodsTable/EpisodesTable'

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
    element: <EpisodesTable />,
    path: '/episodes',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
