import React from 'react';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Router from './router/router';
function App() {
    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export default App;