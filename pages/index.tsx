import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../context/AuthUserContext';

const Home: NextPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event: any) => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("Success. The user is created in firebase")
      router.push('/logged_in');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-violet-700">
      <Head>
        <title>The Devs Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-semibold text-white">
          Welcome to{' '}
          <a className="text-violet-100 font-extralight" href="https://nextjs.org">
            remoteu.org
          </a>
        </h1>
        <hr />
        <h2 className="font-light text-white">
          A application from dev to dev.
        </h2>

        <div className="text-center" style={{ padding: '40px 0px'}}>
            <div>
              <div>
                <h2>Login</h2>
              </div>
            </div>
            <div style={{maxWidth: '400px', margin: 'auto'}}>
              <div>
                <form onSubmit={onSubmit}>
                { error && <div color="danger">{error}</div>}
                  <div >
                    <label >Email</label>
                    <div >
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        id="loginEmail"
                        placeholder="Email" />
                    </div>
                  </div>
                  <div >
                    <label  >Password</label>
                    <div >
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id="loginPassword"
                        placeholder="Password" />
                    </div>
                  </div>
                  <div >
                   <div>
                     <button>Login</button>
                   </div>
                 </div>
                 <div >
                  <div>
                    No account? <Link href="/sign_up"><a>Create one</a></Link>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bg-white">
        <span>Made with ❤️</span>
      </footer>
    </div>
  )
}

export default Home
