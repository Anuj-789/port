import { Routes, Route } from 'react-router-dom';
import AllProjects from './pages/AllProjects';
import Portfolio from './pages/Portfolio';
import ScrollRestoration from './components/sections/ScrollRestoration';

function App() {
    return (
        <>
            <ScrollRestoration />

            <main>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/projects" element={<AllProjects />} />
                </Routes>
            </main>
        </>
    )
};

export default App;
