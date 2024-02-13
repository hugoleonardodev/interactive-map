'use client'

// should have reference

import ReactDOM from 'react-dom'
import React from 'react'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  onConfirm: React.Dispatch<React.SetStateAction<boolean>>
  href: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, href }) => {
  // const Modal: React.FC<ModalProps> = React.forwardRef<HTMLDivElement, ModalProps>(
  // ({ isOpen, onClose, onConfirm, ...properties }, reference) => {
  const [isClosing, setIsClosing] = React.useState(false)

  const handleConfirm = React.useCallback(() => {
    onConfirm(false)
    setIsClosing(true)
  }, [onConfirm])

  const handleClose = React.useCallback(() => {
    onClose(false)
    setIsClosing(true)
  }, [onClose])

  console.log('isOpen', isOpen)
  return (
    <div
      className={`${isOpen ? 'absolute z-50' : 'hidden'} top-0 left-0 w-full h-full flex justify-center items-center`}
      // ref={reference}
      // onClick={handleClose}
      // onKeyDown={handleClose}
      // onKeyUp={handleClose}
      role="dialog"
      aria-labelledby={href.toUpperCase()}
      aria-describedby={`Grupos de Whatsapp, Instagram, Facebook em ${href.toUpperCase()}`}
    >
      <div
        className={`${isOpen ? 'absolute' : 'hidden'} top-0 left-0 w-full h-full bg-gray-500 opacity-50 -z-40`}
        onClick={handleClose}
        role="presentation"
        id="backdrop"
      />

      <div
        className={`bg-white rounded overflow-hidden w-96 ${
          isClosing ? 'scale-90' : 'scale-100'
        } transform transition-transform ease-in-out`}
      >
        <div className={`flex justify-end p-4`}>
          <button className={`text-gray-600 hover:text-gray-800 focus:outline-none`} onClick={handleClose}>
            X
          </button>
        </div>

        <div className={`p-4`}>
          <p>Seu conteúdo do modal aqui.</p>
        </div>

        <div className={`flex justify-end p-4`}>
          <button className={`px-4 py-2 bg-green-500 text-white rounded mr-2`} tabIndex={0} onClick={handleConfirm}>
            Sim
          </button>

          <button className={`px-4 py-2 bg-red-500 text-white rounded`} tabIndex={-1} onClick={handleClose}>
            Não
          </button>
        </div>
      </div>
    </div>
  )
}

// )

// Modal.displayName = 'Modal'

const DialogModal: React.FC<ModalProps> = props => {
  const wrapperElement = document.getElementById('states-modales-wrapper')
  if (wrapperElement != null) return ReactDOM.createPortal(<Modal {...props} />, wrapperElement)
  return ReactDOM.createPortal(<Modal {...props} />, document.body)
}

export default DialogModal
