import React from 'react';
import { connect } from 'react-redux';
import {
  UncontrolledCarousel,
  Jumbotron,
} from 'reactstrap';

const MediaBanner = ({
  art1,
  art2,
  art3,
  art4,
}) => {
  const slides = [art1, art2, art3, art4].map((src) => ({ src, altText: '' }));

  return (
    <Jumbotron className="w-100 p-0 m-0 position-absolute">
      <UncontrolledCarousel
        items={slides}
        controls={false}
        indicators={false}
        pause={false}
        interval={4200}
        slide
      />
    </Jumbotron>
  );
};

const mapStateToProps = (state) => ({
  art1: state.team?.strTeamFanart1,
  art2: state.team?.strTeamFanart2,
  art3: state.team?.strTeamFanart3,
  art4: state.team?.strTeamFanart4,
});

export default connect(mapStateToProps)(MediaBanner);
