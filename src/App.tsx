import { Typography } from '@/components/ui'
import { StyledTypography } from '@/components/ui/typography'
import { useGetCharacterQuery } from '@/services'

export function App() {
  const { data, isLoading } = useGetCharacterQuery()

  console.log(useGetCharacterQuery())
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <StyledTypography tag={'h1'} variant={'title'}>
        The Rick and Morty
      </StyledTypography>
      <ul>
        {data?.results.map(character => (
          <li key={character.id}>
            <Typography variant={'title'}>{character.name}</Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}
