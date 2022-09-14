import React from 'react';
import {Link} from "react-router-dom";
import Category from "./Category";

function CategoryNav(props) {
    return (
        <div>
            <Category/>
            <Link to="/">Category Leanna</Link>
            <Link to="/ervin">Category Ervin</Link>
            <Link to="/clementine">Category Clementine</Link>
            <Link to="/patricia">Category Patricia</Link>
        </div>
    );
}

export default CategoryNav;