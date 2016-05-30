import React from 'react';

const UserListItem = ({user, onUserSelect}) => {
	if (!user) {
		return <div></div>;
	}
	const url = `./images/${user.image}.svg`;
	return (
		<tr onClick={() => onUserSelect(user)} className="user-list-item">
			<td><img src={url} height='60' width='60'/></td>
			<td>{user.name}</td>
			<td>{user.age}</td>
			<td>{user.phone}</td>
		</tr>
	)
};

export default UserListItem;