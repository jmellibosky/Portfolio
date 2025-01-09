import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortfolioWrapper } from './components/Portfolio';

export function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PortfolioWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }