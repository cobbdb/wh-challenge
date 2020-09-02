import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import logo from '../../static/img/wh-logo.svg';

const Footer = () => (
  <div className="mt-auto mt-4 py-1 px-3 border-top border-lightgray footer-logo bg-gray">
    <Container className="py-2">
      <a href="https://www.williamhill.com/us/nv/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="" className="img-fluid" />
      </a>
    </Container>
  </div>
);

const mapStateToProps = () => ({
});

export default connect(mapStateToProps)(Footer);
