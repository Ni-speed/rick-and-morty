import { useState } from 'react'

import { UL } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { Search } from '@/components/ui/search/Search'
import { useGetCharactersQuery, useSearchCharactersQuery } from '@/services/characters'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: characters, refetch } = useGetCharactersQuery()
  const { data: searchResults } = useSearchCharactersQuery({ name: searchTerm })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    refetch()
  }

  return (
    <section>
      <Typography tag={'h1'} variant={'banner'}>
        The Rick and Morty
      </Typography>
      <Search onSearch={handleSearch} />
      <UL>
        {/*{characters?.results.map(character => (*/}
        {/*  <li key={character.id}>*/}
        {/*    <CharacterCard character={character} />*/}
        {/*  </li>*/}
        {/*))}*/}
        {(searchTerm ? searchResults : characters)?.results.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </UL>
    </section>
  )
}
