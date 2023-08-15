//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

// Footer Component
function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();


    return (
        <footer>
            <p>
            Copyright &copy; {currentYear}
            </p>
        </footer>
    );
}

export default Footer;