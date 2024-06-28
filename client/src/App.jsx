import './App.css'
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/routes.jsx';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <AppRoutes />
            </div>
        </>
    )
}

export default App;
