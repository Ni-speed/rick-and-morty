import { useGetCharacterQuery } from '@/services'

export function App() {
  const { data, isLoading } = useGetCharacterQuery()

  console.log(useGetCharacterQuery())
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <ul>{data?.results.map(character => <li key={character.id}>{character.name}</li>)}</ul>
    </div>
  )
}
