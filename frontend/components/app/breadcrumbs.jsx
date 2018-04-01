import React from 'react';
import Link from 'react-router-dom';

const Breadcrumbs = props => {
  const links = props.links || []

  links.push(["Mission Control", "/"])
  const length = links.length
  debugger
  return (
    <div className="breadcrumbs">
      {
        links.map((link, idx) => {
          return <Link key={idx} to={link[1]}>{link[0]}</Link>
        })
      }
    </div>
  )
}

export default Breadcrumbs;
