import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { itemsFetchData, setTypedCity } from '../../actions';

import './SearchBox.scss';



class SearchBox extends Component {

  handleChange(e) {
    e.preventDefault();
    store.dispatch(setTypedCity(e.target.value));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentData } = state;
    store.dispatch(itemsFetchData(typedCity));
  };
  render() {
    const { handleChange, handleSubmit } = this.props
    return (
      < div className="search-box" >
        <h3 className="search-heading">Type city name</h3>
        <form onSubmit={handleSubmit}>
          <input className="input-search" type="text" placeholder="Type city name" onChange={handleChange} />
          <button>Go</button>
        </form>

      </div >
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     hasErrored: state.itemsHasErrored,
//     isLoading: state.itemsIsLoading
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };

export default SearchBox;
