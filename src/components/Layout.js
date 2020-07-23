import React from 'react';
import Navbar from "../modules/shared/components/Navbar/Navbar";

function AppLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}

export default AppLayout