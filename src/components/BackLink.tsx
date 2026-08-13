import { type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type BackLinkProps = {
  to: string
  className?: string
  children: ReactNode
  state?: unknown
  onClick?: () => void
}

const BackLink = ({ to, className, children, state, onClick }: BackLinkProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const canGoBack = location.key !== 'default'

  return (
    <Link
      to={to}
      state={state}
      className={className}
      onClick={(event) => {
        onClick?.()

        if (!canGoBack) {
          return
        }

        event.preventDefault()
        navigate(-1)
      }}
    >
      {children}
    </Link>
  )
}

export default BackLink
