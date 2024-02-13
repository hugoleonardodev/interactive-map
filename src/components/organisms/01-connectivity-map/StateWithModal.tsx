'use client'

import DialogModal from '@/components/molecules/01-dialog-modal/DialogModal'
import React from 'react'

interface StateWithModalProps {
  href: string
  path: string
  circle: string | undefined
  text: string
  transform: string
}

const StateWithModal: React.FC<StateWithModalProps> = ({ href, path, circle, text, transform }) => {
  const thisStateRef = React.useRef(null)
  const [isToggled, setIsToggled] = React.useState(false)

  // const handleClickOutside = React.useCallback((event: MouseEvent) => {
  //   // event.preventDefault()
  //   console.log(thisStateRef.current)
  //   if (typeof thisStateRef.current !== 'undefined') {
  //     setIsToggled(false)
  //   }
  // }, [])

  const handleToggle = React.useCallback(() => {
    setIsToggled(!isToggled)
  }, [isToggled])

  // React.useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside)
  //   // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  //   return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [])

  return (
    <>
      <a href={href} className="estado" key={`${href}`} onClick={handleToggle}>
        <path stroke="#FFFFFF" strokeWidth="1.0404" strokeLinecap="round" strokeLinejoin="round" d={path} />
        {typeof circle === 'string' ? <path className="circle" d={circle} /> : null}

        <text transform={transform} fill="#FFFFFF">
          {text}
        </text>
      </a>

      <DialogModal isOpen={isToggled} onClose={handleToggle} onConfirm={handleToggle} />
{/*
      <div
        className={`${isToggled ? 'absolute z-50' : 'hidden'} top-0 left-0 w-full h-full bg-gray-500 opacity-50 `}
        onClick={handleToggle}
      ></div> */}
    </>
  )
}

export default StateWithModal
