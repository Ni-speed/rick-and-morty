import { FC, useState } from 'react'

import { Table } from '@/components/pages/characters/charactersTable'
import { FullScreenPopup } from '@/components/ui/fullScreenPopup/FullScreenPopup'
import { LocationCard } from '@/components/ui/location/LocationCard'
import { Location } from '@/services/location'

type EpisodesTableProps = {
  locations: Location[]
}
export const LocationsTable: FC<EpisodesTableProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const handleModalOpen = (location: Location) => {
    setSelectedLocation(location)
  }

  const handleModalClose = () => {
    setSelectedLocation(null)
  }

  return (
    <>
      <Table.Wrapper>
        <thead>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Type</Table.Header>
            <Table.Header>Dimension</Table.Header>
          </Table.Row>
        </thead>
        <tbody>
          {locations.map(location => (
            <Table.Row key={location.id} onClick={() => handleModalOpen(location)}>
              <Table.Cell>{location.name}</Table.Cell>
              <Table.Cell>{location.type}</Table.Cell>
              <Table.Cell>{location.dimension}</Table.Cell>
            </Table.Row>
          ))}
        </tbody>
      </Table.Wrapper>
      {selectedLocation && (
        <FullScreenPopup setModalOpen={handleModalClose}>
          <LocationCard location={selectedLocation} />
          {/*<EpisodeCard episode={selectedEpisode} />*/}
        </FullScreenPopup>
      )}
    </>
  )
}
