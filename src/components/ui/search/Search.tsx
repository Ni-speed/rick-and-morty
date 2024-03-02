import { ChangeEvent, FC, useState } from 'react'

import { Button, Container, Input } from '@/components/ui/search/Search.styled'

interface SearchProps {
  initialValue?: string
  onSearch: (term: string) => void
}

export const Search: FC<SearchProps> = ({ initialValue = '', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm.trim())
  }

  return (
    <Container>
      <Input onChange={handleChange} type={'text'} value={searchTerm} />
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  )
}
