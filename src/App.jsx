import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '@components/Homepage/Homepage';
import Blogs from '@components/Blogs/Blogs';
import routers from '@/routers/routers';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {routers.map((item, index) => {
            return (
              <Route
                path={item.path}
                element={<item.component />}
                key={index}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
