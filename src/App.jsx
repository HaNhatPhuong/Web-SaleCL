import { SideBarProvider } from '@/contexts/SideBarProvider';
import routers from '@/routers/routers';
import SideBar from '@components/SideBar/SideBar';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SideBarProvider>
          <BrowserRouter>
            <SideBar />

            <Suspense fallback={<div>Loading...</div>}>
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
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
