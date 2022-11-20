import { getApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { useRef, useState } from "react";

const UploadFile = ({ setImageCallback }: { setImageCallback: any }) => {
    const inputEl = useRef(null) as any
    const [imgUrl, setImgUrl] = useState('');
    const [value, setValue] = useState(0)

    function setImage(imageUrl: string) {
        setImageCallback(imageUrl)
        setImgUrl(imageUrl)
        
    }

    function uploadFile() {
        var file = inputEl.current.files[0]
        if (!file) return;

        setImgUrl('');
        const firebaseApp = getApp();
        const storage = getStorage(firebaseApp, "gs://medicine-40a75.appspot.com");
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setValue(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
                    setImage(downloadURL)
                });
            }
        );

    }

    return (
        <>
            
            
            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                    Photo
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex items-center">
                        <span className="h-32 w-32 overflow-hidden rounded-full bg-gray-100">
                            
                            {
                                (value > 0 && value < 100) || !imgUrl ?
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>:
                                <img src={imgUrl} alt='uploaded file' className="h-full w-full text-gray-300"  />
                                
                            }
                        </span>
                        <label
                            htmlFor="uploadAvatar"
                            className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Change
                        </label>
                        <input
                            name="uploadAvatar"
                            id="uploadAvatar"
                            className="hidden"
                            type="file"
                            onChange={uploadFile}
                            ref={inputEl}
                        />
                    </div>
                </div>
            </div>
            {
                value > 0 && value < 100 ?
                <div className='outerbar'>
                    <progress value={value} max="100"></progress>
                    <div className='innerbar' style={{ width: `${value}%` }}>{value}%</div>
                </div> : ''
            }
            
        </>
    )
}

export default UploadFile