import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StadiumDescription = ({ desc = '', thumb }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div className="bg-primary mt-3 shadow">
      <div className="py-1 pl-3 text-white title-grad">
        <h2>The Stadium</h2>
      </div>
      <div className="bg-lightgray p-3">
        <img src={thumb} alt="" className="img-thumbnail mb-2" />
        {isOpen ? (
          <>
            <span>{desc}</span>
            <Button color="link" size="sm" onClick={toggle} className="text-body">
              Less
              <FontAwesomeIcon icon={faChevronUp} fixedWidth className="ml-1" />
            </Button>
          </>
        ) : (
          <>
            <span>
              {desc.slice(0, 250)}
              ...
            </span>
            <Button color="link" size="sm" onClick={toggle} className="text-body">
              Read More
              <FontAwesomeIcon icon={faChevronDown} fixedWidth className="ml-1" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  desc: state.team?.strStadiumDescription,
  thumb: state.team?.strStadiumThumb,
});

export default connect(mapStateToProps)(StadiumDescription);
