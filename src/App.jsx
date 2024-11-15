import Mainlayout from './components/Layout/Layout';
import Myheader from './components/Header/Header';
import Myfooter from './components/Footer/Footer';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Mainlayout>
        <Button />
        <Myheader />
      </Mainlayout>
    </div>
  );
}

export default App;
