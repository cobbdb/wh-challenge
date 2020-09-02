import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

const MerchBlock = ({ thumb, name }) => (
  <div className="bg-secondary mt-3 shadow">
    <div className="bg-lightgray">
      <Row className="p-3 pb-0 h4">
        <Col>
          <a
            href="https://www.mlbshop.com/new-york-yankees/t-36770932+os-90+z-943745-555862172"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={thumb} alt="" className="img-thumbnail" />
          </a>
        </Col>
        <Col>
          <span>All the best </span>
          {name}
          <span> Gear and Collectibles are at the official online store!</span>
        </Col>
      </Row>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  thumb: state.team?.strTeamJersey,
  name: state.team?.strTeam,
});

export default connect(mapStateToProps)(MerchBlock);
