// Button.tsx
import React from 'react'
import classNames from 'classnames'
import Image, { type StaticImageData } from 'next/image'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  rounded?: boolean
  outlined?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  hasIcon?: string | StaticImageData
}

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      rounded,
      outlined,
      onClick,
      className,
      variant = 'primary',
      size,
      hasIcon,
      children,
      ...properties
    },
    reference,
  ) => {
    const buttonClass = classNames(
      'rounded-[10px]',
      'focus:outline-none',
      'font-semibold',
      'h-fit',
      'border',
      {
        'px-2': size === 'small',
        'px-4': size === 'medium',
        'px-6': size === 'large',
        'py-1': size === 'small',
        'py-2': size === 'medium',
        'py-4': size === 'large',
        'rounded-[32px]': rounded,
        'rounded-[78px]': rounded === true && variant === 'warning',
        'bg-purple-700': outlined !== true && variant === 'primary',
        'bg-green-500': outlined !== true && variant === 'success',
        'bg-orange-500': outlined !== true && variant === 'warning',
        'bg-red-500': outlined !== true && variant === 'error',
        'bg-gray-500': outlined !== true && variant === 'secondary',
        'border-purple-700': outlined === true && variant === 'primary',
        'border-green-500': outlined === true && variant === 'success',
        'border-orange-500': outlined === true && variant === 'warning',
        'border-red-500': outlined === true && variant === 'error',
        'border-gray-500': outlined === true && variant === 'secondary',
        'text-white': outlined !== true && variant === 'primary',
        'text-purple-700': outlined === true && variant === 'primary',
        'text-gray-500': outlined === true && variant === 'secondary',
        'hover:border-purple-700': outlined !== true && (variant === 'primary' || variant === 'secondary'),
        'hover:bg-purple-300': outlined === true && (variant === 'primary' || variant === 'secondary'),
        'hover:bg-orange-700': outlined !== true && variant === 'warning',
        'hover:text-purple-700': outlined !== true && variant === 'primary',
        'hover:border-orange-500': outlined !== true && variant === 'warning',
        'hover:border-orange-700': outlined !== true && variant === 'warning',
        'hover:text-orange-500': outlined === true && variant === 'warning',
      },
      className,
    )
    return (
      <button type={type} className={buttonClass} onClick={onClick} ref={reference} {...properties}>
        {typeof hasIcon !== 'undefined' ? <Image src={hasIcon} alt="button-icon" /> : null}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
