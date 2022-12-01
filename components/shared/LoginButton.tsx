/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/pro-solid-svg-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';

function LogginButton() {

    const { login, logout } = useAuth();
    
    const [loading, setLoading] = useState(false);

    const [ isLogged, setIsLogged ] = useState(false)

    useEffect( () => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            setLoading(false)
            if (user) {
                setIsLogged(true)
            } 
        });
    }, [isLogged]);
    
    return (
        <button
            onClick={!loading && isLogged ? logout : login}
            className={` group
                w-full py-3
                lg:ml-8 lg:px-4  lg:py-2 
                border border-transparent lg:rounded-md 
                shadow-sm 
                text-base font-mediumtext-white
                ${!loading && isLogged ? "bg-red-600 hover:bg-red-700" : "bg-teal-600 hover:bg-teal-700"} `}>

            <span className={`inline-flex items-center justify-center group-hover:text-yellow-400 group-hover:animate-pulse text-white`} >
                <FontAwesomeIcon icon={!loading && isLogged ? faClose : faGoogle} className="w-4 h-4 mr-2" />
                {!loading && isLogged ? "Logout" : "Login via Google"}
            </span>
        </button>
    )
}

export default LogginButton;