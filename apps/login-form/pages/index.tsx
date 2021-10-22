import Login from '../components/domain/login/login';
import { LoginProvider } from '../contexts/loginContext';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </>
  );
}

export default Index;
