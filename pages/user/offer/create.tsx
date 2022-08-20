import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Layout from '../../../components/layout';
import { useAuth } from '../../../context/AuthContext';
import UploadFile from '../../../components/storage/UploadFile';

const Offer = () => {
    const { useSession } = useAuth() as { useSession: user }

    const [content, setContent] = useState({
        title: undefined,
        body: undefined,
    })

    const [ imageUrl, setImageUrl ] = useState("")

    const handleCallback = (childData: string) => {
        setImageUrl(childData)
        console.log(childData)
    }

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

        const { title, body }= content as any;
        await axios.post('/api/offer', { title, slug: dashify(title), body, author }, {
            headers: headers
        });
    }
    return (
        <Layout page='offer-new'>
            <div>
                <UploadFile parentCallback={handleCallback} />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={content.title}
                    onChange={onChange}
                />
                <label htmlFor="body">Body</label>
                <textarea
                    name="body"
                    value={content.body}
                    onChange={onChange}
                />
                <button onClick={onSubmit}>POST</button>
            </div>
        </Layout>
    );
};

export default Offer;
