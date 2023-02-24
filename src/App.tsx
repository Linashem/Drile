import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Helper/Conatants/routes';
import { Pagewrapper } from './Components/common/PageWrapper';
import { Shop } from './Containers/Shop';
import { NotFound } from './Containers/NotFound';
import { Auth } from './Containers/Auth';
import { Blog } from './Containers/Blog';
import { OnePost } from './Containers/OnePost';
import { OneGood } from './Containers/OneGood';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.shop} element={<Pagewrapper />}>
          <Route index element={<Shop />} />
          {/* <Route path={routes.shop} element={<Shop />} /> */}
          <Route path={routes.oneGood} element={<OneGood />} />

          <Route path={routes.auth} element={<Auth />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.onePost} element={<OnePost />} />

          <Route path={routes.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
