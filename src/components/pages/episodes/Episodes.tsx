import { useState } from 'react'

import { EpisodesTable } from '@/components/pages/episodes/episodsTable/EpisodesTable'
import { Pagination, Typography } from '@/components/ui'
import { Search } from '@/components/ui/search'
import { useGetEpisodesQuery } from '@/services/episodes'
import { Container } from '@/styles'
import { Pages } from '@/styles'

export const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('episodeName') || '')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: episodes, isLoading } = useGetEpisodesQuery({ name: searchTerm, page: currentPage })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    localStorage.setItem('episodeName', term)
    setCurrentPage(1)
  }

  if (!episodes || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Pages.Section>
        <Pages.NavBar>
          <Typography tag={'h1'} variant={'banner'}>
            Episodes
          </Typography>
          <Search initialValue={searchTerm} onSearch={handleSearch} />
          <Pages.Filter></Pages.Filter>
          <div style={{ margin: '0 auto' }}>
            <Pagination count={episodes.info.pages} onChange={setCurrentPage} page={currentPage} />
          </div>
        </Pages.NavBar>
        <EpisodesTable episodes={episodes.results} />
      </Pages.Section>
    </Container>
  )
}
