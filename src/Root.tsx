import { Outlet } from 'react-router'
import { PhoneShell } from './PhoneShell'

export default function Root() {
  return (
    <PhoneShell>
      <Outlet />
    </PhoneShell>
  )
}
