import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => {
    return <p>Hello, {props.name || "Stranger"}!</p>;
}

Hello.propTypes = {
    name: PropTypes.string
}

Hello.defaultProps = {
    name: 'Stranger'
}

export default Hello;