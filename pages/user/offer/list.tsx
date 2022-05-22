import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Layout from '../../../components/layout';

const List = () => {
  const [entries, setEntries] = useState([]);
  useEffect( () => {
    const axiosRequest = async () => {
      const res = await axios.get('/api/offer/list');
      setEntries(res.data.offersData);
    };
    axiosRequest();
  }, []);

  return (
    <Layout page='offers'>
      <div>
        <h1>Vagas</h1>
        <Link href={'/user/offer/create'}>
          <a>Anunciar Vaga</a>
        </Link>
        {entries.map((entry: any) => (
          <div key={entry.id}>
            <Link href={`/user/offer/edit/${entry.id}`}>
              <a>{entry.title}</a>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default List;