type Param = {
  disabled?: boolean
}

export const disabled = ({ disabled: isDisabled }: Param) => (isDisabled ? 'opacity: 0.6;' : '')
