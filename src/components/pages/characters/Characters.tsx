import { useState } from 'react'

import { CharactersTable } from '@/components/pages'
import { SC } from '@/components/pages/characters/Characters.styled'
import { CharacterCard, SuperSelect, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { Button } from '@/components/ui/search/Search.styled'
import { useAppSelector } from '@/services'
import { GetRequestType, useGetCharactersQuery } from '@/services/characters'
import {
  selectorGender,
  selectorSpecies,
  selectorStatus,
} from '@/services/characters/characterSelector'

export const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [statusFilter, setStatusFilter] = useState<GetRequestType['status']>(undefined)
  const [speciesFilter, setSpeciesFilter] = useState<string | undefined>(undefined)
  const [genderFilter, setGenderFilter] = useState<GetRequestType['gender']>(undefined)

  const gender = useAppSelector(selectorGender)
  const species = useAppSelector(selectorSpecies)
  const status = useAppSelector(selectorStatus)
  const {
    data: characters,
    isLoading,
    refetch,
  } = useGetCharactersQuery({
    gender: genderFilter,
    name: searchTerm,
    page: currentPage,
    species: speciesFilter,
    status: statusFilter,
  })

  const handleSearch = (term: string) => {
    setSearchTerm(term)

    refetch()
  }
  const handleResetFilters = () => {
    setSearchTerm('')
    setStatusFilter(undefined)
    setSpeciesFilter(undefined)
    setGenderFilter(undefined)
    setCurrentPage(1)
  }

  if (!characters || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <SC.Section>
      <SC.NavBar>
        <Typography tag={'h1'} variant={'banner'}>
          Characters
        </Typography>
        <Search onSearch={handleSearch} />
        <SC.Filter>
          <Button onClick={handleResetFilters}>Reset Filters</Button>
          <SC.Select>
            <SuperSelect
              label={'Status:'}
              onValueChange={setStatusFilter}
              options={status}
              value={statusFilter}
            />
            <SuperSelect
              label={'Species:'}
              onValueChange={setSpeciesFilter}
              options={species}
              value={speciesFilter}
            />
            <SuperSelect
              label={'Gender:'}
              onValueChange={setGenderFilter}
              options={gender}
              value={genderFilter}
            />
          </SC.Select>
        </SC.Filter>
        <div style={{ margin: '0 auto' }}>
          <Pagination count={characters.info.pages} onChange={setCurrentPage} page={currentPage} />
        </div>
      </SC.NavBar>
      {/*<SC.UL>*/}
      {/*  {characters.results.map(character => (*/}
      {/*    <li key={character.id}>*/}
      {/*      <CharacterCard character={character} />*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</SC.UL>*/}
      <CharactersTable characters={characters.results} />
    </SC.Section>
  )
}
