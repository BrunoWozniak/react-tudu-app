import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDescendingDate, sortByAscendingDate, setStartDateFilter, setEndDateFilter } from '../actions/filters';

export class TodoListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  
  onSortChange = (e) => {
    if (e.target.value === 'descending') {
      this.props.sortByDescendingDate();
    } else if (e.target.value === 'ascending') {
      this.props.sortByAscendingDate();
    }
  }

  onShowAll = () => {
    this.props.setStartDate(null);
    this.props.setEndDate(null);
    this.props.setTextFilter('');
  }
  
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search todos"
              value={this.props.filters.searchText}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="ddescending">Descending</option>
              <option value="ascending">Ascending</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div>
            <button
              className="button button--filter-bar"
              onClick={this.onShowAll}
            >
              Show all
            </button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (searchText) => dispatch(setTextFilter(searchText)),
  sortByDescendingDate: () => dispatch(sortByDescendingDate()),
  sortByAscendingDate: () => dispatch(sortByAscendingDate()),
  setStartDate: (startDate) => dispatch(setStartDateFilter(startDate)),
  setEndDate: (endDate) => dispatch(setEndDateFilter(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilters);
