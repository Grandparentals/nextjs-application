import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Layout from '../../../components/layout';

const Offer = () => {
    const [content, setContent] = useState({
        title: undefined,
        body: undefined,
    })
    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }
    const onSubmit = async () => {
        const { title, body }= content as any;
        await axios.post('/api/offer', { title, slug: dashify(title), body });
    }
    return (
        <Layout page='offer-new'>
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
                <button onClick={onSubmit}>POST</button>
            </div>
        </Layout>
    );
};

export default Offer;
