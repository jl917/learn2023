import { RecoilRoot } from 'recoil';
import Router from '@/router';
import './global.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
