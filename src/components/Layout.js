import React from 'react';
import Navbar from "../modules/shared/components/Navbar/Navbar";

function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}

export default Layout