import React from 'react';
import PropTypes from 'prop-types';

function Card(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>{props.price}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content : PropTypes.string,
    price: PropTypes.number
}
Card.defaultProps = {
    title : "Нaзвание отстутвует",
    content : "Контент отстутвует",
    price : "?"
}
export default Card;