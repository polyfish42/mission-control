import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash">
      <nav className="splash__nav">
        <div className="splash__nav_left">
          <img className="splash__nav_logo" src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" />
        </div>
        <div>
          <Link to="/signup" className="splash__nav_right_li splash__nav_right_link">Sign up</Link>
          <Link to="/login" className="splash__nav_right_li splash__nav_right_link">Log in</Link>
          <Link to="/demo" className="button button--blue splash__nav_right_li">Demo</Link>
        </div>
      </nav>
      <section className="splash__section">
        <img className="splash__section__elem" src="https://3.basecamp-static.com/bcxhq/assets/landing/jtbd/hof-2018-9bfac3b274495e9163052455c53becfd3452a47fcd8d441d46ddc5c6d6ee1a88.jpg" />
        <h1 className="splash__h1 splash__section__elem">We've been expecting you.</h1>
        <h2 className="splash__h2 splash__section__elem">All growing businesses run into the same fundamental problems. Hair on fire, buried under email, stuff everywhere. The good news? Basecamp solves them.</h2>
        <Link to="/demo" className="button button--blue">Get Started</Link>
      </section>
    </div>
  );
};

// <img src="../../../app/assets/images/frontend/splash_page.jpg" />
export default Splash;
