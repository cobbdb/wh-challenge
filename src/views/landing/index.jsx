import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Spinner,
  Row,
  Col,
} from 'reactstrap';
import getTeam from '../../actions/team-search';
import MediaBanner from './MediaBanner';
import WelcomeBlock from './WelcomeBlock';
import TeamDescription from './TeamDescription';
import StadiumDescription from './StadiumDescription';
import MerchBlock from './MerchBlock';
import InfoBlock from './InfoBlock';

class Landing extends React.PureComponent {
  componentDidMount() {
    getTeam();
  }

  render() {
    const { name } = this.props;

    if (name) {
      return (
        <Container>
          <MediaBanner />
          <Row className="pb-3">
            <Col md="6">
              <WelcomeBlock />
              <MerchBlock />
              <StadiumDescription />
            </Col>
            <Col>
              <InfoBlock />
              <TeamDescription />
              <MerchBlock />
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container className="h-100 d-flex flex-column justify-content-center">
        <h1 className="mb-5 text-center">Loading Your Team</h1>
        <div className="d-flex justify-content-center align-items-center">
          <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
          <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
          <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.team?.strTeam,
});

export default connect(mapStateToProps)(Landing);
