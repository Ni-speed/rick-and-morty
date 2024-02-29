import { useState } from 'react'

import { UL } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { useGetCharactersQuery, useSearchCharactersQuery } from '@/services/characters'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<null | number>(null)

  const { data: characters, refetch } = useGetCharactersQuery(currentPage)
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
      <Pagination />
    </section>
  )
}
