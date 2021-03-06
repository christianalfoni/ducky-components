import React from 'react';
import PropTypes from 'prop-types';


function ImageElement(props) {
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: props.backgroundSize ? props.backgroundSize : 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: props.width,
    height: props.height
  };

  return (
    <div className={props.className}>
      <div
        onClick={props.onClick}
        style={style}
        />
    </div>
  );
}

ImageElement.propTypes = {
  backgroundSize: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string.isRequired
};

export default ImageElement;
