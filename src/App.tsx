import React from 'react';
import { Home } from './Containers/Home';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Helper/Conatants/routes';
import { Pagewrapper } from './Components/common/PageWrapper';
import { Shop } from './Containers/Shop';
import { NotFound } from './Containers/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Pagewrapper />}>
          <Route index element={<Home />} />
          <Route path={routes.shop} element={<Shop/>}/>
          <Route path={routes.notFound} element={<NotFound/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
