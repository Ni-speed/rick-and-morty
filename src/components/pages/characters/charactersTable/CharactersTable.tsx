import { FC, useState } from 'react'

import { CharacterCard } from '@/components/ui'
import { FullScreenPopup } from '@/components/ui/fullScreenPopup/FullScreenPopup'
import { Character } from '@/services/characters'
import { Table } from '@/styles/StyledTable.styled'

type CharacterTableProps = {
  characters: Character[]
}
export const CharactersTable: FC<CharacterTableProps> = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const handleModalOpen = (character: Character) => {
    setSelectedCharacter(character)
  }

  const handleModalClose = () => {
    setSelectedCharacter(null)
  }

  return (
    <>
      <Table.Wrapper>
        <thead>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Status</Table.Header>
            <Table.Header>Species</Table.Header>
            <Table.Header>Gender</Table.Header>
            <Table.Header>Location</Table.Header>
          </Table.Row>
        </thead>
        <tbody>
          {characters.map(character => (
            <Table.Row key={character.id} onClick={() => handleModalOpen(character)}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.status}</Table.Cell>
              <Table.Cell>{character.species}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>{character.location.name}</Table.Cell>
            </Table.Row>
          ))}
        </tbody>
      </Table.Wrapper>
      {selectedCharacter && (
        <FullScreenPopup setModalOpen={handleModalClose}>
          <CharacterCard character={selectedCharacter} />
        </FullScreenPopup>
      )}
    </>
  )
}
