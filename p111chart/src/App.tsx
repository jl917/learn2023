import { RecoilRoot } from 'recoil';
import Router from '@/router';
import './global.css';
import { getPercentSeats } from './utils/number';

console.log(getPercentSeats([50, 49950, 49950]));
console.log(getPercentSeats([1, 1, 1]));

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;

