import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Header, Footer } from './Components/Core';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <h1>BT React Code Test - by Jake Malkin - 19/05/2021</h1>
            <p>body</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
