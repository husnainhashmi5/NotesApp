import './App.css';
import Header from './Components/Header';
import NoteListPage from './Pages/NoteListPage';
import Notepage from './Pages/Notepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container dark'>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<NoteListPage />} />
          <Route path="/note/:id/" element={<Notepage />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
