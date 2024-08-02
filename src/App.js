import React from 'react';
import './index.css';
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";
function App(props) {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
