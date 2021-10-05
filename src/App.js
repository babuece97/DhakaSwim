import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	Switch
// } from 'react-router-dom';

//import Footer from './components/Footer/Footer';


function App() {
  useEffect(() => {
    fetch('./fakeData.JSON')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className='App'>
      <Banner></Banner>
      <Body></Body>
      
    </div>
  );
}

export default App;
