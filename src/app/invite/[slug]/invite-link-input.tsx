'use client'

import { Copy, Link } from 'lucide-react'
import { IconButton } from '../../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../../components/input'

interface InviteLinkProps {
  url: string
}

export function InviteLinkInput(props: InviteLinkProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(props.url)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link size={16} />
      </InputIcon>
      <InputField readOnly defaultValue={props.url} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy size={16} />
      </IconButton>
    </InputRoot>
  )
}
