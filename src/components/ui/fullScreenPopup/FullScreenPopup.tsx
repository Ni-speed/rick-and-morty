import { FC, ReactNode } from 'react'

import { Portal } from '@/common'
import { Modal } from '@/components/ui/fullScreenPopup/FullScreenPopup.styled'

type FullScreenPopupProps = {
  children: ReactNode
  setModalOpen: (isModalOpen: boolean) => void
}
export const FullScreenPopup: FC<FullScreenPopupProps> = ({ children, setModalOpen }) => {
  return (
    <Portal>
      <Modal.Background onClick={() => setModalOpen(false)}>
        <Modal.Card>
          <Modal.Content>{children}</Modal.Content>
        </Modal.Card>
      </Modal.Background>
    </Portal>
  )
}
