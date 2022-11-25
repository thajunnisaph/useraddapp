// import React, {useContext}from 'react';

// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';
// import AuthContext from './store/AuthContext';
// function App() {
// const ctx = useContext(AuthContext);
//   return (
//     <React.Fragment>
//       <MainHeader />
//       <main>
//         {!ctx.isLoggedIn && <Login  />}
//         {ctx.isLoggedIn && <Home  />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;
import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/Demolist';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [buttonLabel,setButtonLabel] = useState('Change To Descending Order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const changeLabelHandler = useCallback( () =>{

    if(buttonLabel==='Change To Descending Order')
  setButtonLabel('Change To Ascending Order');
  else setButtonLabel('Change To Descending Order');
  },[buttonLabel])
  

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems}  sortHandler={buttonLabel}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeLabelHandler}>{buttonLabel}</Button>
    </div>
  );
}

export default App;