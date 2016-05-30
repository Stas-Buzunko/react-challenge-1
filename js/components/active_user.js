import React from 'react';

const ActiveUser = ({user}) => {
	if (!user) {
		return <div></div>;
	}
	const url = `./images/${user.image}.svg`;

	return (
		<div className="col-sm-4 col-md-3 col-lg-2">
			<div className="thumbnail">
				<img src={url} />
				<h3>{user.name}</h3>
				<table className="user-info table table-responsive">
					<tbody>	
						<tr>
							<td>Age:</td>
							<td>{user.age}</td>
						</tr>
						<tr>
							<td>Favorite animal::</td>
							<td>{user.image}</td>
						</tr><tr>
							<td>Phone:</td>
							<td>{user.phone}</td>
						</tr>
					</tbody>
				</table>
				<p><strong>Favorite phrase:</strong> {user.phrase}</p>
			</div>
		</div>
	)
};
export default ActiveUser;
