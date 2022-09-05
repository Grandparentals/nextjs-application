import Link from 'next/link';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/authenticated/Dashboard';
import Layout from '../../components/layout';
import { useAuth } from '../../context/AuthContext';
import { session } from '../../lib/session';

const LoggedIn = () => {
  const [user, setUser] = useState<user>() 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const oUser = session.get('user')
    if(oUser){
      setUser(oUser)
      console.log(oUser)
    }
    setLoading(false)
  }, []);
  
  return (
    <Layout page='user'>
      <div>
        {
          loading ?
            <div>
              <div>Loading....</div>
            </div> :
            <Dashboard></Dashboard>
        }
      </div>
    </Layout>
  )
}

{/* <>
  <div>
    {<div>Congratulations {user?.displayName}! You are logged in.</div>}
    <Link href={"/user/offer/list"}>
      <a>
        Vagas
      </a>
    </Link>
  </div>
</> */}

export default LoggedIn;
