import { useEffect, useState } from 'react'

import { LocationsTable } from '@/components/pages/locations/locationTable'
import { SuperSelect } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Search } from '@/components/ui/search/Search'
import { Button } from '@/components/ui/search/Search.styled'
import { STypography } from '@/components/ui/typography'
import { useAppDispatch, useAppSelector } from '@/services'
import {
  Location,
  selectorDimensions,
  selectorTypes,
  useGetLocationsQuery,
} from '@/services/location'
import { getAllLocations } from '@/services/location/slice'
import { Container } from '@/styles'
import { Pages } from '@/styles/Pages.styled'

export const Locations = () => {
  const [searchName, setSearchName] = useState(localStorage.getItem('locationName') || '')
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = parseInt(localStorage.getItem('currentLocationsPage') || '', 10)

    return isNaN(storedPage) ? 1 : storedPage
  })
  const [typeFilter, setTypeFilter] = useState<Location['type']>(
    localStorage.getItem('typeFilter') || ''
  )
  const [dimensionsFilter, setDimensionsFilter] = useState<Location['dimension']>(
    localStorage.getItem('dimensionsFilter') || ''
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllLocations())
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('currentLocationsPage', String(currentPage))
    // localStorage.setItem('typeFilter', typeFilter)
    // localStorage.setItem('dimensionsFilter', dimensionsFilter)
  }, [currentPage, typeFilter, dimensionsFilter])

  const types = useAppSelector(selectorTypes)
  const dimensions = useAppSelector(selectorDimensions)

  const { data: locations, isLoading } = useGetLocationsQuery({
    dimension: dimensionsFilter,
    name: searchName,
    page: currentPage,
    type: typeFilter,
  })

  const handleSearch = (locationName: string) => {
    setSearchName(locationName)
    localStorage.setItem('locationName', locationName)
    setCurrentPage(1)
  }
  const handleResetFilters = () => {
    setSearchName('')
    setTypeFilter('')
    setDimensionsFilter('')
    setCurrentPage(1)
  }
  const typeChangeHandler = (value: Location['type']) => {
    if (value) {
      setTypeFilter(value)
      setCurrentPage(1)
      localStorage.setItem('typeFilter', value)
    } else {
      setTypeFilter('')
      setCurrentPage(1)
      localStorage.removeItem('typeFilter')
    }
  }
  const dimensionsChangeHandler = (value: Location['dimension']) => {
    if (value) {
      setDimensionsFilter(value)
      setCurrentPage(1)
      localStorage.setItem('dimensionsFilter', value)
    } else {
      setDimensionsFilter('')
      setCurrentPage(1)
      localStorage.removeItem('dimensionsFilter')
    }
  }

  if (!locations || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Pages.Section>
        <Pages.NavBar>
          <div style={{ margin: '0 auto' }}>
            <STypography.H1>Locations</STypography.H1>
          </div>
          <Search onSearch={handleSearch} />
          <Pages.Filter>
            <Button onClick={handleResetFilters}>Reset Filters</Button>
            <SuperSelect
              onValueChange={typeChangeHandler}
              options={types}
              placeholder={'Types'}
              value={typeFilter}
            />
            <SuperSelect
              onValueChange={dimensionsChangeHandler}
              options={dimensions}
              placeholder={'Dimensions'}
              value={dimensionsFilter}
            />
          </Pages.Filter>
          <div style={{ margin: '0 auto' }}>
            <Pagination count={locations.info.pages} onChange={setCurrentPage} page={currentPage} />
          </div>
        </Pages.NavBar>
        <LocationsTable locations={locations.results} />
      </Pages.Section>
    </Container>
  )
}
