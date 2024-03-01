import { useState } from 'react'

import { SC } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, SuperSelect, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { Button } from '@/components/ui/search/Search.styled'
import {
  GetRequestType,
  useGetCharactersQuery,
  useSearchCharactersQuery,
} from '@/services/characters'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [statusFilter, setStatusFilter] = useState<GetRequestType['status']>(undefined)
  const [speciesFilter, setSpeciesFilter] = useState<string | undefined>(undefined)
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined)
  const [genderFilter, setGenderFilter] = useState<GetRequestType['gender']>(undefined)

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
  const handleResetFilters = () => {
    setSearchTerm('')
    setStatusFilter(undefined)
    setSpeciesFilter(undefined)
    setTypeFilter(undefined)
    setGenderFilter(undefined)
    setCurrentPage(1)
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
      <SC.Filter>
        <SuperSelect
          label={'Status:'}
          onValueChange={setStatusFilter}
          options={[
            { label: 'Alive', value: 'alive' },
            { label: 'Dead', value: 'dead' },
            { label: 'Unknown', value: 'unknown' },
          ]}
          value={statusFilter}
        />
        <SuperSelect
          label={'Species:'}
          onValueChange={setSpeciesFilter}
          options={[
            { label: 'Human', value: 'Human' },
            { label: 'Alien', value: 'Alien' },
            { label: 'Robot', value: 'Robot' },
          ]}
          value={speciesFilter}
        />
        <SuperSelect
          label={'Species:'}
          onValueChange={setGenderFilter}
          options={[
            { label: 'Female', value: 'female' },
            { label: 'Male', value: 'male' },
            { label: 'Genderless', value: 'genderless ' },
            { label: 'Unknown', value: 'unknown ' },
          ]}
          value={genderFilter}
        />
        <Button onClick={handleResetFilters}>Reset Filters</Button>
      </SC.Filter>
      <SC.UL>
        {(searchTerm ? searchResults : characters)?.results.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </SC.UL>
      <Pagination count={characters.info.pages} onChange={setCurrentPage} page={currentPage} />
    </section>
  )
}
