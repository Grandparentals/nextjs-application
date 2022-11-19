import { Fragment, useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Layout from '../../../components/layout';
import { useAuth } from '../../../context/AuthContext';
import UploadFile from '../../../components/storage/UploadFile';
import { Transition } from '@headlessui/react';
import { faCheckCircle, faXmark } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Offer = () => {
    const { useSession } = useAuth() as { useSession: user };

    const [show, setShow] = useState(false)

    const [imgUrl, setImgUrl] = useState('');

    const setImageFromChild = (imgString: string) => {
        setImgUrl(imgString)
    }

    const [content, setContent] = useState({
        about: undefined,
        type: undefined,
        location: undefined,
        department: undefined,
        fullName: undefined,
        closeDate: undefined,
        closeDateFull: undefined,
        professionalSkills: undefined,
        cellphone: undefined,
        phone: undefined,
        openSkills: undefined,
    })

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async () => {
        const author = {
            name: useSession.displayName,
            email: useSession.email,
            uid: useSession.uid,
            imageUrl: useSession.photoURL
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'lerigo'
        }

        const { about, type, location, department, fullName, professionalSkills, cellphone, phone, openSkills } = content as any;
        await axios.post('/api/offer', 
        { 
                slug: `${dashify(fullName)}-${author.uid}`, 
                about, 
                imgUrl,
                type,
                location,
                department,
                fullName,
                professionalSkills,
                cellphone,
                phone,
                openSkills,
                closeDate: new Date(),
                closeDateFull: new Date(), 
                author,
            }, {
            headers: headers
        });
    }
    return (
        <Layout page='offer-new'>
            <form className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-6" action="javascript:void(0)" method="POST">

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                        Fullname
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            value={content.fullName}
                                            onChange={onChange}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Maciej Krawczyk"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-1">
                                    <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">
                                       Cellphone
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            name="cellphone"
                                            id="cellphone"
                                            value={content.cellphone}
                                            onChange={onChange}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Maciej Krawczyk"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={content.phone}
                                            onChange={onChange}
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Maciej Krawczyk"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    About
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        value={content.about}
                                        onChange={onChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="I'm experienced handcraft, able to create really good art, equipaments or fix your wardrobe, I can also teach your dog some good tricks..."
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Tell more about your preferences and skills.</p>
                            </div>

                            <div>
                                <label htmlFor="professionalSkills" className="block text-sm font-medium text-gray-700">
                                    Professioal professionalSkills
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="professionalSkills"
                                        name="professionalSkills"
                                        rows={3}
                                        value={content.professionalSkills}
                                        onChange={onChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="I'm experienced handcraft, able to create really good art, equipaments or fix your wardrobe, I can also teach your dog some good tricks..."
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Tell more about your preferences and skills.</p>
                            </div>

                            <UploadFile setImageCallback={setImageFromChild} />
                        </div>
                    </div>
                </div>   
                
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Generic Skills</h3>
                            <p className="mt-1 text-sm text-gray-500">Chose through the categories we already have built.</p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-6">
                                    <fieldset className="border-t border-b border-gray-200">
                                        <div className="divide-y divide-gray-200">
                                            <div className="relative flex items-start py-4">
                                                <div className="min-w-0 flex-1 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        Comments
                                                        <p id="comments-description" className="text-gray-500">
                                                            Get notified when someones posts a comment on a posting.
                                                        </p>
                                                    </label>

                                                </div>
                                                <div className="ml-3 flex h-5 items-center">
                                                    <input
                                                        id="comments"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative flex items-start py-4">
                                                <div className="min-w-0 flex-1 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                                        Candidates
                                                        <p id="candidates-description" className="text-gray-500">
                                                            Get notified when a candidate applies for a job.
                                                        </p>
                                                    </label>

                                                </div>
                                                <div className="ml-3 flex h-5 items-center">
                                                    <input
                                                        id="candidates"
                                                        aria-describedby="candidates-description"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative flex items-start py-4">
                                                <div className="min-w-0 flex-1 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                        Offers
                                                        <p id="offers-description" className="text-gray-500">
                                                            Get notified when a candidate accepts or rejects an offer.
                                                        </p>
                                                    </label>
                                                </div>
                                                <div className="ml-3 flex h-5 items-center">
                                                    <input
                                                        id="offers"
                                                        aria-describedby="offers-description"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Open Skills</h3>
                            <p className="mt-1 text-sm text-gray-500">Use to best describe your skills, separating then through commas.</p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="Skills" className="block text-sm font-medium text-gray-700">
                                        Skills
                                    </label>
                                    <input
                                        type="text"
                                        name="skills"
                                        id="skills"
                                        value={content.openSkills}
                                        onChange={onChange}
                                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Listening, Dog care, Writer..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-3">
                    <button
                        type="reset"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </form>
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 "
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end pt-12 lg:pr-12">
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                                        {/* <p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p> */}
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <FontAwesomeIcon icon={faXmark} className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Layout>
    );
};

export default Offer;