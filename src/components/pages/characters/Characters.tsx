import { useState } from 'react'

import { UL } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { useGetCharactersQuery, useSearchCharactersQuery } from '@/services/characters'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined)
  const [speciesFilter, setSpeciesFilter] = useState<string | undefined>(undefined)
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined)
  const [genderFilter, setGenderFilter] = useState<string | undefined>(undefined)

  const {
    data: characters,
    isLoading,
    refetch,
  } = useGetCharactersQuery({
    gender: genderFilter,
    page: currentPage,
    species: speciesFilter,
    status: statusFilter,
    type: typeFilter,
  })
  const { data: searchResults } = useSearchCharactersQuery({ name: searchTerm })

  const handleSearch = (term: string) => {
    setSearchTerm(term)

    refetch()
  }

  if (!characters || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <Typography tag={'h1'} variant={'banner'}>
        The Rick and Morty
      </Typography>
      <Search onSearch={handleSearch} />
      <div>
        <label>Status:</label>
        <select
          onChange={e => setStatusFilter(e.target.value || undefined)}
          value={statusFilter || ''}
        >
          <option value={''}>All</option>
          <option value={'alive'}>Alive</option>
          <option value={'dead'}>Dead</option>
          <option value={'unknown'}>Unknown</option>
        </select>
      </div>
      <div>
        <label>Species:</label>
        <select
          onChange={e => setSpeciesFilter(e.target.value || undefined)}
          value={speciesFilter || ''}
        >
          <option value={''}>All</option>
          <option value={'Human'}>Human</option>
          <option value={'Alien'}>Alien</option>
          <option value={'Robot'}>Robot</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <UL>
        {(searchTerm ? searchResults : characters)?.results.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </UL>
      <Pagination count={characters.info.pages} onChange={setCurrentPage} page={currentPage} />
    </section>
  )
}
