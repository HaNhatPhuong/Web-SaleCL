import Mainlayout from './components/Layout/Layout';
import Myheader from './components/Header/Header';
import Myfooter from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Mainlayout>
        <Myheader />
        <Myfooter />
      </Mainlayout>
    </div>
  );
}

export default App;
