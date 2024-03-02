import { FC, useState } from 'react'

import { Table } from '@/components/pages/characters/charactersTable'
import { EpisodeCard } from '@/components/ui/episod'
import { FullScreenPopup } from '@/components/ui/fullScreenPopup/FullScreenPopup'
import { Episode } from '@/services/episodes'

type EpisodesTableProps = {
  episodes: Episode[]
}
export const EpisodesTable: FC<EpisodesTableProps> = ({ episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const handleModalOpen = (episode: Episode) => {
    setSelectedEpisode(episode)
  }

  const handleModalClose = () => {
    setSelectedEpisode(null)
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
          {episodes.map(episode => (
            <Table.Row key={episode.id} onClick={() => handleModalOpen(episode)}>
              <Table.Cell>{episode.name}</Table.Cell>
              <Table.Cell>{episode.air_date}</Table.Cell>
              <Table.Cell>{episode.episode}</Table.Cell>
            </Table.Row>
          ))}
        </tbody>
      </Table.Wrapper>
      {selectedEpisode && (
        <FullScreenPopup setModalOpen={handleModalClose}>
          <EpisodeCard episode={selectedEpisode} />
        </FullScreenPopup>
      )}
    </>
  )
}
