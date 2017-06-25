import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Displays the list of character kits currently viewable. Takes in a
 */
class Browse extends Component {

  componentWillMount() {
    this.props.onFilterSets();
  }
  render() {
    const kits = this.props.sets;
    return (
      <Grid>
        {kits && Object.keys(kits).map((kit) => {
          kit = kits[kit];
          return <Row key={kit.kitId}>
            <Col xs={3}>
              <Link to={`/kits/${kit.kitId}`}> {kit.name}</Link>
            </Col>
            <Col xs={3}>
              {kit.job}
            </Col>
            <Col xs={3}>
              {kit.creatorName}
            </Col>
            <Col xs={3}>
              {kit.stars}
            </Col>
          </Row>
        })}
      </Grid>
    );
  }
}
Browse.propTypes = {
  sets: PropTypes.object,
  onFilterSets: PropTypes.func.isRequired
};
Browse.defaultProps = {
  sets: []
}

export default Browse;
