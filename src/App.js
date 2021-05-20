import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Header, Footer } from './Components/Core';
import { Search } from './Components/News';

const App = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-5 p-5 section-main">
        <div className="row">
          <div className="col">
            <h1 className="text-center">BT React Code Test - by Jake Malkin - 19/05/2021</h1>
            <Search />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
