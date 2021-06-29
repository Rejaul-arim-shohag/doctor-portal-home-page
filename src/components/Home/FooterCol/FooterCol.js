import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
        <h6  className="text-primary ">{props.menuTitle ? props.menuTitle : " "}</h6>
        <ul className="list-unstyled mt-4 text-decoration-none">
             {
                 props.menuItems.map((item, index) => <li key={index}><Link style={{textDecoration:"none", fontSize:"16px", color:"#41485C"}} to={item.link} className="text-secondary">{item.name}</Link></li>)
             }
        </ul>
        {props.children && props.children}
    </div>
    );
};

export default FooterCol;