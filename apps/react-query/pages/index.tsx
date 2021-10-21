import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Container from '../components/ui/container/container';
import Header from '../components/ui/header/header';
import Navbar from '../components/ui/navbar/navbar';
import Planets from '../components/domain/planets/planets';
import People from '../components/domain/people/people';

const queryClient = new QueryClient();

export function Index() {
  const [page, setPage] = useState('planets');

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header />
        <Navbar setPage={setPage} />
        {page === 'planets' ? <Planets /> : <People />}
      </Container>
    </QueryClientProvider>
  );
}

export default Index;
