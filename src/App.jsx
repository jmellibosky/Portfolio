import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

export function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    );
  }