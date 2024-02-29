import { FC } from 'react'

import { Left, Right } from '@/assets'
import { SP } from '@/components/ui/pagination/Pagination.styled'

import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count?: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  siblings?: number
} & PaginationConditionals

export const Pagination: FC<PaginationProps> = ({ count = 10, onChange, page = 1, siblings }) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  return (
    <SP.Root>
      <SP.Container>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </SP.Container>
    </SP.Root>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots: FC = () => {
  return <SP.Dots>&#8230;</SP.Dots>
}
const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
  return (
    <SP.PageButton $isSelected={selected} disabled={selected || disabled} onClick={onClick}>
      {page}
    </SP.PageButton>
  )
}
const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <SP.Item $isDisabled={disabled} disabled={disabled} onClick={onClick}>
      <Left />
    </SP.Item>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <SP.Item $isDisabled={disabled} disabled={disabled} onClick={onClick}>
      <Right />
    </SP.Item>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  currentPage,
  onClick,
  paginationRange,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}
