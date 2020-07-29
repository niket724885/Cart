import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Category = () => {
    return(
        
            <ListGroup>
                <Link className="list-group-item list-group-item-action active" tag="a" to="/" action>All Categories</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/bread" action>Bread</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/dairy" action>Dairy</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/fruits" action>Fruits</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/seasoningAndSpices" action>Seasoning and Spices</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/vegetables" action>Vegetables</Link>
            </ListGroup>
        
    );
}

export default Category;