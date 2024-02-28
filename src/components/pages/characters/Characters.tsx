import { UL } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { useGetCharactersQuery } from '@/services/characters'

export const Characters = () => {
  const { data: characters } = useGetCharactersQuery()

  // const episodes = characters.results.map()
  return (
    <section>
      <Typography tag={'h1'} variant={'banner'}>
        The Rick and Morty
      </Typography>

      <UL>
        {characters?.results.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </UL>
    </section>
  )
}
