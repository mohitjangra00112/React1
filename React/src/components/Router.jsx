import {NavLink , Route , Routes} from 'react-router-dom';
import { useState } from 'react';
import { Home } from './Sub/Home';
import { Page2 } from './Sub/Page2';


export function Router() {

    return (
        <>
        <div>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/page2"> Page 2 </NavLink>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </div>
        </>
    )
    
}
