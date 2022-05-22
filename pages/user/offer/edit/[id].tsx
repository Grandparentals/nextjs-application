import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import dashify from 'dashify';
import axios from 'axios';
import Layout from '../../../../components/layout';

const EditEntry = () => {
    const router = useRouter()
    const [content, setContent] = useState({
        title: undefined,
        body: undefined,
    })

    useEffect(() => {
       const axiosRequest = async () => {
           const { id } = router.query;
           if (id) {
               const res = await axios.get(`/api/offer/${id}`);
               const { title, body } = res.data;
               setContent({
                   title,
                   body
               })
           }
       }
       axiosRequest()
    }, [router])

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async (e: any) => {
        const { id } = router.query
        const { title, body } = content as any;
        console.log(id, title, body);
        await axios.put(`/api/entry/${id}`, {
            slug: dashify(title),
            title,
            body,
        });
    }

    const onDelete = async () => {
        const { id } = router.query;
        await axios.delete(`/api/entry/${id}`);
        router.back();
    }

    return (
        <Layout page='offer-list'>
            <div>
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
                <button
                    type="button"
                    onClick={onSubmit}
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </Layout>
    );
};

export default EditEntry;