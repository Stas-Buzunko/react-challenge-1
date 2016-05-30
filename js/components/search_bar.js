import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  onInputChange(filterText) {
  	this.setState({filterText});
  	this.props.onSearchTextChange(filterText);
  }

  render() {
  	return (
  		<div className="row">
  			<div className="col-sm-12">
  				<div className="search-bar form-group">
	  				<input 
	  					className="form-control" 
	  					value={this.state.filterText}
	  					onChange={event => this.onInputChange(event.target.value)}
              placeholder="Search people by name..."
	  				/>
  				</div>
  			</div>
  		</div>
  	);
  }
}
export default SearchBar