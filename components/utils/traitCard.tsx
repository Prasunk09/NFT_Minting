import React from 'react';

const TraitCard = (props: any) => {
    return (
        <div
            className="card shadow-lg border-2 border-solid border-slate-400 grow mx-2 my-2"
            style={{ width: '600px' }}
        >
            <div className="card-body">
                <h1 className="card-title">{props.trait}</h1>
                <p>{props.name}</p>
            </div>
        </div>
    );
};
export default TraitCard;
