import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import styles from "./style";

function App() {
    return (
        <div className="w-full overflow-hidden bg-[#ace2e1]">
            <Header />
            <MainContent />
        </div>
    );
}

export default App;
