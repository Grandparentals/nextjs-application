import { useAuth } from '../context/AuthContext';

const LoggedIn = () => {
  const { user, logout } = useAuth();
  
  return (
    <div>

        {
          user ?
            <div>
              <div>Loading....</div>
            </div> :
            <>
              <div>
                <div>
                  { user && <div>Congratulations {user}! You are logged in.</div> }
                </div>
              </div>
              <div>
                <div>
                  <button onClick={logout}>Sign out</button>
                </div>
              </div>
            </>
        }
    </div>
  )
}

export default LoggedIn;
