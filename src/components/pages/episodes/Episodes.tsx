import { useEffect, useState } from 'react'

import { EpisodesTable } from '@/components/pages/episodes/episodsTable/EpisodesTable'
import { Pagination } from '@/components/ui'
import { Search } from '@/components/ui/search'
import { Button } from '@/components/ui/search/Search.styled'
import { STypography } from '@/components/ui/typography'
import { useGetEpisodesQuery } from '@/services/episodes'
import { Container, Pages } from '@/styles'

export const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('episodeName') || '')
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = parseInt(localStorage.getItem('currentPage') || '', 10)

    return isNaN(storedPage) ? 1 : storedPage
  })

  useEffect(() => {
    localStorage.setItem('currentPage', String(currentPage))
  }, [currentPage])
  const { data: episodes, isLoading } = useGetEpisodesQuery({ name: searchTerm, page: currentPage })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    localStorage.setItem('episodeName', term)
    setCurrentPage(1)
  }
  const handleResetFilters = () => {
    setSearchTerm('')
    setCurrentPage(1)
  }

  if (!episodes || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Pages.Section>
        <Pages.NavBar>
          <STypography.H1>Episodes</STypography.H1>
          <Search initialValue={searchTerm} onSearch={handleSearch} />
          <Button onClick={handleResetFilters}>Reset Filters</Button>
          <div style={{ margin: '0 auto' }}>
            <Pagination count={episodes.info.pages} onChange={setCurrentPage} page={currentPage} />
          </div>
        </Pages.NavBar>
        <EpisodesTable episodes={episodes.results} />
      </Pages.Section>
    </Container>
  )
}
