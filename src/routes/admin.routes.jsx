import { Routes, Route } from 'react-router-dom';


import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Create } from '../pages/Create';
import { Update } from '../pages/Update';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>

    );

}