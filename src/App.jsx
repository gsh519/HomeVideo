import React from 'react';
import Router from './Router'
import {HeadBar} from './components/UIkit'


const App = () => {
  return (
    <>
      <HeadBar/>
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
