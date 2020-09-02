import React from 'react';
import { connect } from 'react-redux';
import {
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';

const WelcomeBlock = ({
  logo,
  name,
  site,
  twitter,
  facebook,
  insta,
  shortName,
}) => (
  <div className="bg-primary mt-7 py-4 pl-4 d-flex shadow">
    <div className="w-50">
      <img
        src={logo}
        alt={name}
        className="img-fluid img-thumbnail shadow"
      />
    </div>
    <div className="text-white w-100">
      <div className="pl-2 py-2 bg-secondary">
        <h1>{shortName}</h1>
      </div>
      <div className="w-100">
        <SocialLink url={twitter} icon={faTwitterSquare} />
        <SocialLink url={insta} icon={faInstagramSquare} />
        <SocialLink url={facebook} icon={faFacebookSquare} />
        <SocialLink url={site} icon={faExternalLinkSquareAlt} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  logo: state.team?.strTeamBadge,
  name: state.team?.strTeam,
  site: state.team?.strWebsite,
  twitter: state.team?.strTwitter,
  facebook: state.team?.strFacebook,
  insta: state.team?.strInstagram,
  shortName: state.team?.strTeamShort,
});

export default connect(mapStateToProps)(WelcomeBlock);
