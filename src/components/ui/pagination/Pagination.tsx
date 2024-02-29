import { FC } from 'react'

type PaginationProps = {}
export const Pagination: FC<PaginationProps> = () => {
  const handlePrev = () => {}
  const handleNext = () => {}

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
