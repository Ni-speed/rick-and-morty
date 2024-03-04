import { useEffect, useState } from 'react'

import { CharactersTable } from '@/components/pages'
import { SuperSelect } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { Button } from '@/components/ui/search/Search.styled'
import { STypography } from '@/components/ui/typography'
import { useAppSelector } from '@/services'
import {
  GetRequestType,
  selectorGender,
  selectorSpecies,
  selectorStatus,
  useGetCharactersQuery,
} from '@/services/characters'
import { Container } from '@/styles'
import { Pages } from '@/styles/Pages.styled'

export const Characters = () => {
  const [searchLocation, setSearchLocation] = useState(() => {
    const storedName = localStorage.getItem('characterName')

    return storedName !== null ? storedName : ''
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = parseInt(localStorage.getItem('currentCharactersPage') || '', 10)

    return isNaN(storedPage) ? 1 : storedPage
  })

  const [statusFilter, setStatusFilter] = useState<GetRequestType['status'] | undefined>(() => {
    const storedStatus = localStorage.getItem('statusFilter')

    return storedStatus !== null ? (storedStatus as GetRequestType['status']) : undefined
  })
  const [speciesFilter, setSpeciesFilter] = useState<string | undefined>(() => {
    const storedSpecies = localStorage.getItem('speciesFilter')

    return storedSpecies !== null ? storedSpecies : undefined
  })
  const [genderFilter, setGenderFilter] = useState<GetRequestType['gender'] | undefined>(() => {
    const storedGender = localStorage.getItem('genderFilter')

    return storedGender !== null ? (storedGender as GetRequestType['gender']) : undefined
  })
  const gender = useAppSelector(selectorGender)
  const species = useAppSelector(selectorSpecies)
  const status = useAppSelector(selectorStatus)

  const { data: characters, isLoading } = useGetCharactersQuery({
    gender: genderFilter,
    name: searchLocation,
    page: currentPage,
    species: speciesFilter,
    status: statusFilter,
  })

  useEffect(() => {
    localStorage.setItem('currentCharactersPage', String(currentPage))
    if (statusFilter !== undefined) {
      localStorage.setItem('statusFilter', statusFilter)
    } else {
      localStorage.removeItem('statusFilter')
    }
    if (speciesFilter !== undefined) {
      localStorage.setItem('speciesFilter', speciesFilter)
    } else {
      localStorage.removeItem('speciesFilter')
    }
    if (genderFilter !== undefined) {
      localStorage.setItem('genderFilter', genderFilter)
    } else {
      localStorage.removeItem('genderFilter')
    }
  }, [currentPage, statusFilter, speciesFilter, genderFilter])

  const handleSearch = (characterName: string) => {
    setSearchLocation(characterName)
    localStorage.setItem('characterName', characterName)
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setSearchLocation('')
    setStatusFilter(undefined)
    setSpeciesFilter(undefined)
    setGenderFilter(undefined)
    setCurrentPage(1)
  }

  if (!characters || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Pages.Section>
        <Pages.NavBar>
          <STypography.H1>Characters</STypography.H1>
          <Search onSearch={handleSearch} />
          <Button onClick={handleResetFilters}>Reset Filters</Button>
          <Pages.Filter>
            <Pages.Select>
              <SuperSelect
                onValueChange={setStatusFilter}
                options={status}
                placeholder={'Status'}
                value={statusFilter}
              />
              <SuperSelect
                onValueChange={setSpeciesFilter}
                options={species}
                placeholder={'Species'}
                value={speciesFilter}
              />
              <SuperSelect
                onValueChange={setGenderFilter}
                options={gender}
                placeholder={'Gender'}
                value={genderFilter}
              />
            </Pages.Select>
          </Pages.Filter>
          <div style={{ margin: '0 auto' }}>
            <Pagination
              count={characters.info.pages}
              onChange={setCurrentPage}
              page={currentPage}
            />
          </div>
        </Pages.NavBar>

        <CharactersTable characters={characters.results} />
      </Pages.Section>
    </Container>
  )
}
