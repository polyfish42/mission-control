import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor (props) {
    super(props);
    this.demo = this.demo.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('splash');
  }

  componentWillUnmount() {
    document.body.classList.remove('splash');
  }

  render () {
    return (
      <div className="splash">
        <nav className="splash__nav">
          <div className="splash__nav_left">
            <img
              className="splash__nav_logo"
              src={ window.logo } />
          </div>
          <div>
            <Link
              to="/signup"
              className="splash__nav_right_li splash__nav_right_link">
              Sign up
            </Link>
            <Link
              to="/login"
              className="splash__nav_right_li splash__nav_right_link">
              Log in
            </Link>
            <button
              className="button button--blue splash__nav_right_li splash__button"
              onClick={this.demo}>
              Free Demo
            </button>
          </div>
        </nav>
        <section className="splash__section">
          <img
            className="splash__section__elem"
            src={ window.splashImg } />
          <h1 className="splash__h1 splash__section__elem">
            We've been expecting you.
          </h1>
          <h2 className="splash__h2 splash__section__elem">
            All growing businesses run into the same fundamental problems. Hair on fire, buried under email, stuff everywhere. The good news? Basecamp solves them.
          </h2>
          <button
            className="button button--blue splash__button--big"
            onClick={this.demo}>
            Try a free demo
          </button>
        </section>
      </div>
    );
  }

  demo () {
    this.props.demo();
  }
}


export default Splash;
