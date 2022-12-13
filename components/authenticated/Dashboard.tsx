import Grandparents from "./Grandparents"
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'


function Dashboard() {
    const { t } = useTranslation();

    const { useSession } = useAuth() as { useSession: user };

    const [ author, setAuthor ] = useState() as any;

    useEffect(() => {
        if(useSession)
            setAuthor(useSession);
    }, [useSession])
    
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-6">
            <h1 className="sr-only">{t('page.userDashboard.title')}</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4  lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Welcome panel */}
                    <section aria-labelledby="profile-overview-title">
                        <div className="overflow-hidden rounded-lg bg-white shadow">
                            <h2 className="sr-only" id="profile-overview-title">
                                {t('page.userDashboard.subtitle')}
                            </h2>
                            <div className="bg-white p-6">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <div className="sm:flex sm:space-x-5">
                                        <div className="flex-shrink-0">
                                            <img className="mx-auto h-20 w-20 rounded-full" src={author?.photoURL} alt="" />
                                        </div>
                                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                            <p className="text-sm font-medium text-gray-600">{t('page.userDashboard.welcome')}</p>
                                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{author?.displayName}</p>
                                            <p className="text-sm font-medium text-gray-600">{author?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>

                    {/* Actions panel */}
                    <section aria-labelledby="quick-links-title">
                        <Grandparents></Grandparents>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;