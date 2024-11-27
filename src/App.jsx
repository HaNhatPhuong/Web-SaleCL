import { SideBarProvider } from '@/contexts/SideBarProvider';
import routers from '@/routers/routers';
import SideBar from '@components/SideBar/SideBar';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
