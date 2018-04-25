import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = props => {
    let links = props.links || []

    links = [["Mission Control", "/"],...links]
    const length = links.length

    return (
      <div className="breadcrumbs">
        {
          links.map((link, idx) => {
            return <span key={idx}><Link to={link[1]}>{link[0]}</Link>{ length === idx + 1 ? "" : " › " }</span>
          })
        }
      </div>
    );
};

export default Breadcrumbs;
