import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '@components/Homepage/Homepage';
import Blogs from '@components/Blogs/Blogs';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';

function App() {
  return (
    <SideBarProvider>
      <SideBar />
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
    </SideBarProvider>
  );
}

export default App;
