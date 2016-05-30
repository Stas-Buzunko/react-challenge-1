import React from 'react';
import UserListItem from './user_list_item';

const UserList = (props) => {
	const userListItems = props.users.map((user) => {
		return (
			<UserListItem
				onUserSelect={props.onUserSelect}
				key={user.id}
				user={user}
			/> 
		)
	});

	return (
		<div className="col-sm-8 col-md-9 col-lg-10">
			<table className="user-list table" width='100%'>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{userListItems}
				</tbody>
			</table>
		</div>
	)
}
export default UserList;