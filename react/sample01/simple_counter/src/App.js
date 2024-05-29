// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Viewer from './component/Viewer.js'
import Controller from './component/Controller.js';
import { useState } from 'react';



function App() {
  const [cnt, setCnt] = useState(100)

  return (
    <div className="App">
      <div className='container'>
        <div className='title alert alert-Light'>
          <h1 >Simple Counter</h1>
        </div>
      </div>
      <section>
        <Viewer cnt ={cnt} />
      </section>
      <section>
        <Controller setCnt = {setCnt} cnt = {cnt} />
      </section>

    </div>
  );
}


export default App;
