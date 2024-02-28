import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Table } from '@/components/pages/episodes/episodsTable/EpisodesTable.styled'
import { useGetEpisodesQuery } from '@/services/episodes'

export const EpisodesTable = () => {
  const [page, setPage] = useState(1)
  const { data: episodes, isLoading } = useGetEpisodesQuery(page)

  if (!episodes || isLoading) {
    return <div>Loading...</div>
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }
  const handlePrevPage = () => {
    setPage(prevPage => prevPage - 1)
  }

  return (
    <>
      <Table.Wrapper>
        <thead>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Air Date</Table.Header>
            <Table.Header>Episode</Table.Header>
          </Table.Row>
        </thead>
        <tbody>
          {episodes.results.map(episode => (
            <Table.Row key={episode.id}>
              <Table.Cell>{episode.name}</Table.Cell>
              <Table.Cell>{episode.air_date}</Table.Cell>
              <Table.Cell>{episode.episode}</Table.Cell>
            </Table.Row>
          ))}
        </tbody>
      </Table.Wrapper>
      {/*<button onClick={handleNextPage}>Next</button>*/}
      <Link onClick={handlePrevPage} to={`/episodes?page=${page - 1}`}>
        Prev
      </Link>
      <Link onClick={handleNextPage} to={`/episodes?page=${page + 1}`}>
        Next
      </Link>
    </>
  )
}
