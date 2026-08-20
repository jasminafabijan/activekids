import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type BackLinkProps = {
  to: string
  className?: string
  children: ReactNode
  state?: unknown
  onClick?: () => void
}

const BackLink = ({ to, className, children, state, onClick }: BackLinkProps) => {
  return (
    <Link to={to} state={state} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default BackLink
