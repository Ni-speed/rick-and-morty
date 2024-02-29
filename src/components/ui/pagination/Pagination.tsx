import { FC } from 'react'

type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
}
export const Pagination: FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }
  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
