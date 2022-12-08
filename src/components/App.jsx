import Spinner from './Spinner/Spinner';
import { List } from 'redux/data/data';
import { useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import Header from './Header';

export const App = () => {
  const loading = useSelector(state => state.global.isLoading);

  return (
    <>
      {loading && <Spinner />}
      <LoginContainer />
      {/* <List />
      <RegisterContainer />
      <Header /> */}
    </>
  );
};
