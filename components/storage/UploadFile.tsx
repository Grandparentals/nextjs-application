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
            <progress value={value} max="100"></progress>
            <input
                type="file"
                onChange={uploadFile}
                ref={inputEl}
            />
            {
                !imgUrl &&
                <div className='outerbar'>
                    <div className='innerbar' style={{ width: `${value}%` }}>{value}%</div>
                </div>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt='uploaded file' height={200} />
            }
        </>
    )
}

export default UploadFile