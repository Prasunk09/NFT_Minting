import React from 'react';

const hoverButton = (props: { data: any }) => {
    const { data } = props;
    return <button className="btn btn-outline-warning">{data}</button>;
};

export default hoverButton;
