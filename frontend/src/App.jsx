import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";


import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";


// Importing your Route containers
import PublicRoutes from "./Routes/PublicRoutes";
import ScrollToTop from "./Components/ScrollToTop";



const AppWrapper = () => {

    const location = useLocation();
    const hideFooterPaths = ['/login', '/register', '/register-2', '/buy-content', '/*'];
    const shouldHideFooter = hideFooterPaths.some(path => location.pathname.includes(path));

    return (
        <div className="App">
            <ScrollToTop />
            <Navbar />
            <Routes>
                {/* This points to your Landing page inside PublicRoutes */}
                <Route path="/*" element={<PublicRoutes />} />
            </Routes>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

const App = () => {
    return (
        <AppWrapper />
    );
};

export default App;