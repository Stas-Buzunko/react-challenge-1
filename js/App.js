import React, { Component } from 'react';
import UserList from './components/user_list';
import ActiveUser from './components/active_user';
import SearchBar from './components/search_bar';
import Toolbar from './components/toolbar';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      activeUser: {},
      sortedBy: '',
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(users) {
        this.setState({
          users: users,
          filteredUsers: users,
          activeUser: users[0]
        });
      }.bind(this),
    });
  }
  filterUser(filterText) {
    var rows = [];
    this.state.users.forEach(function(user) {
      if (user.name.indexOf(filterText) === -1 ) {
        return;
      }
      rows.push(user);
    });
    this.setState({
      filteredUsers: rows,
      activeUser: rows[0],
    });
  }
  sortUsers(field) {
    if (this.state.sortedBy === field) {
      let reversedUsers = this.state.filteredUsers.reverse();
      this.setState({
        filteredUsers: reversedUsers,
        activeUser: reversedUsers[0]
      })
    } else {
      let sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var nameA = a[`${field}`];
      var nameB = b[`${field}`];
       if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
      });
      this.setState({
        filteredUsers: sortedUsers,
        activeUser: sortedUsers[0],
        sortedBy: field,
      });
    }
    
  }
  

  render() {
    return (
      <div className="app container-fluid">
        <SearchBar onSearchTextChange={(filterText) => this.filterUser(filterText)}/>
        <Toolbar onButtonClick={(field) => this.sortUsers(field)}/>
        <div className="row">
          <ActiveUser user={this.state.activeUser}/>
          <UserList 
            users={this.state.filteredUsers}
            onUserSelect={selectedUser => this.setState({activeUser: selectedUser}) }
          />
        </div>
      </div>
    );
  }
}
export default App;