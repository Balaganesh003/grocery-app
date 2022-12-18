import './App.css';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import CreateContainer from './components/create-container/create-container';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
