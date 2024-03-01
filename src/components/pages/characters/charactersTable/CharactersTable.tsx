import { FC } from 'react'

import { Character } from '@/services/characters'

import { Table } from './CharactersTable.styled'

type CharacterTableProps = {
  characters: Character[]
}
export const CharactersTable: FC<CharacterTableProps> = ({ characters }) => {
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
            <Table.Row key={character.id}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.status}</Table.Cell>
              <Table.Cell>{character.species}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>{character.location.name}</Table.Cell>
            </Table.Row>
          ))}
        </tbody>
      </Table.Wrapper>
    </>
  )
}
