import { useState } from 'react'

import { UL } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { useGetCharactersQuery, useSearchCharactersQuery } from '@/services/characters'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: characters, refetch } = useGetCharactersQuery(currentPage)
  const { data: searchResults } = useSearchCharactersQuery({ name: searchTerm })

  const handleSearch = (term: string) => {
    setSearchTerm(term)

    refetch()
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
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
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  )
}
