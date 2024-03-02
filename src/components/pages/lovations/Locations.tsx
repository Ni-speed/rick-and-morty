import { useEffect, useState } from 'react'

import { SC } from '@/components/pages/characters/Characters.styled'
import { LocationsTable } from '@/components/pages/lovations/locationTable'
import { SuperSelect, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { Button } from '@/components/ui/search/Search.styled'
import { useAppDispatch, useAppSelector } from '@/services'
import { Location, useGetLocationsQuery } from '@/services/location'
import { selectorDimensions, selectorTypes } from '@/services/location/locationSelector'
import { getAllLocations } from '@/services/location/slice'
import { Container } from '@/styles'

export const Locations = () => {
  const [searchName, setSearchName] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [typeFilter, setTypeFilter] = useState<Location['type']>('')
  const [dimensionsFilter, setDimensionsFilter] = useState<Location['dimension']>('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllLocations())
  }, [dispatch])

  const types = useAppSelector(selectorTypes)
  const dimensions = useAppSelector(selectorDimensions)

  const { data: locations, isLoading } = useGetLocationsQuery({
    dimension: dimensionsFilter,
    name: searchName,
    page: currentPage,
    type: typeFilter,
  })

  const handleSearch = (term: string) => {
    setSearchName(term)
  }
  const handleResetFilters = () => {
    setSearchName('')
    setTypeFilter('')
    setDimensionsFilter('')
    setCurrentPage(1)
  }

  if (!locations || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <SC.Section>
        <SC.NavBar>
          <div style={{ margin: '0 auto' }}>
            <Typography tag={'h1'} variant={'banner'}>
              Locations
            </Typography>
          </div>
          <Search onSearch={handleSearch} />
          <Button onClick={handleResetFilters}>Reset Filters</Button>
          <SC.Filter>
            <SuperSelect
              onValueChange={setTypeFilter}
              options={types}
              placeholder={'Types'}
              value={typeFilter}
            />
            <SuperSelect
              onValueChange={setDimensionsFilter}
              options={dimensions}
              placeholder={'Dimensions'}
              value={dimensionsFilter}
            />
          </SC.Filter>
          <div style={{ margin: '0 auto' }}>
            <Pagination count={locations.info.pages} onChange={setCurrentPage} page={currentPage} />
          </div>
        </SC.NavBar>
        <LocationsTable locations={locations.results} />
      </SC.Section>
    </Container>
  )
}
