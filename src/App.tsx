import { Characters } from '@/components/pages'
import { useGetCharactersQuery } from '@/services/characters'

export function App() {
  const { isLoading } = useGetCharactersQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <Characters />
}
