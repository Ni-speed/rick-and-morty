import { FC, ReactNode } from 'react'

import { Portal } from '@/common'
import { SModal } from '@/components/ui/fullScreenPopup/FullScreenPopup.styled'

type FullScreenPopupProps = {
  children: ReactNode
  setModalOpen: (isModalOpen: boolean) => void
}
export const FullScreenPopup: FC<FullScreenPopupProps> = ({ children, setModalOpen }) => {
  return (
    <Portal>
      <SModal.Background onClick={() => setModalOpen(false)}>
        <SModal.Card>
          <SModal.Content>{children}</SModal.Content>
        </SModal.Card>
      </SModal.Background>
    </Portal>
  )
}
