import { IfAuthenticated, IfNotAuthenticated } from '../utils/Authenticated'
import { User, useAuth0 } from '@auth0/auth0-react'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  // TODO: replace placeholder user object with the one from auth0
  const { user, logout, loginWithRedirect } = useAuth0()
 

  // added logout()
  const handleSignOut = () => {
   return logout()
  }

  // added loginWithRedirect()
  const handleSignIn = () => {
    return loginWithRedirect()
  }

  return (
    <>
      <nav>
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
      </nav>
      
    </>
  )
}

export default Nav