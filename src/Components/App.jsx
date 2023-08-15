//2. Create a App.jsx component and return all other components from here.
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;