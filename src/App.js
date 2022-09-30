
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './Data';

function App() {
  console.log(Data);
  const cards = Data.map(item => {
    return(
      <Card
      {...item}
      />
    )
  })
  return (
  <div>
    <Navbar />
    <div className="flex justify-center flex-col px-60 py-16 gap-14">
      {cards}
    </div>
  </div>
  );
}

export default App;
