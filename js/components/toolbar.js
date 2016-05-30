import React from 'react';

const Toolbar = ({onButtonClick}) => {
	return (
		<div className="row"> 
			<div className="toolbar col-sm-12">
				<button onClick={() => onButtonClick('name')} className="btn btn-default">Sort by name</button>
				<button onClick={() => onButtonClick('age')} className="btn btn-default">Sort by age</button>
			</div>
		</div>
	);
};
export default Toolbar;

