import { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import People from '../components/people/people';
import Planets from '../components/planets/planets';

export function Index() {
  const [page, setPage] = useState('planets');

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl p-4 font-heading text-yellow-300">
        Star Wars Info
      </h1>
      <Navbar setPage={setPage} />
      <div className="text-left pt-8">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default Index;
