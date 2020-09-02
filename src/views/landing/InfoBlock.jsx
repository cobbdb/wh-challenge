import React from 'react';
import { connect } from 'react-redux';
import {
  faRing,
  faUsers,
  faMapMarkerAlt,
  faGlassCheers,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import InfoItem from './InfoItem';

const InfoBlock = ({
  logo,
  url,
  stadiumName,
  stadiumCap,
  stadiumLoc,
  manager,
  yearFormed,
  name,
}) => (
  <div className="bg-secondary mt-md-8 mt-3 shadow">
    <div className="bg-lightgray p-3">
      <div>
        <a href={`//${url}`} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={name} className="img-fluid" />
        </a>
      </div>
      <div className="pl-3">
        <InfoItem label="Stadium" icon={faRing} text={stadiumName} />
        <InfoItem label="Capacity" icon={faUsers} text={`${stadiumCap} people`} />
        <InfoItem label="Location" icon={faMapMarkerAlt}>
          <a
            href={`//www.google.com/maps/dir/Current+Location/${stadiumName},${stadiumLoc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {stadiumLoc}
          </a>
        </InfoItem>
        <InfoItem label="Manager" icon={faUserCircle} text={manager} />
        <InfoItem label="Formed" icon={faGlassCheers} text={yearFormed} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  logo: state.team?.strTeamLogo,
  url: state.team?.strWebsite,
  stadiumName: state.team?.strStadium,
  stadiumCap: state.team?.intStadiumCapacity,
  stadiumLoc: state.team?.strStadiumLocation,
  manager: state.team?.strManager,
  yearFormed: state.team?.intFormedYear,
  name: state.team?.strTeam,
});

export default connect(mapStateToProps)(InfoBlock);
