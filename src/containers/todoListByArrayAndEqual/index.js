import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { injectIntl, intlShape } from 'react-intl';
import { createPropsSelector } from 'reselect-immutable-helpers';
import { Badge } from 'react-bootstrap';

import {
  getFilterTodoListSelector,
  filterTypesSelector
} from './selectors';
import {toogleTodoAction} from '../todoListByArray/actions';
import './style.scss';

export class TodoListByArray extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterArray: []
    }
  }

  filterClick = (filter, e) => {
    /*var badgeEl = e.target;
    var active = badgeEl.dataset.active;
    badgeEl.dataset.active = active === '0' ? '1' : '0';
    badgeEl.style.color = active === '0' ? 'red' : 'white';

    var filterArray = Array.from(badgeEl.parentNode.children)
      .filter(el => el.dataset.active === '1')
      .map(el => el.dataset.filter === 'true' ? true : false);

    console.log('查询的条件：', filterArray);
    this.props.onTodoClick(filterArray);*/

    var badgeEl = e.target;


    var filterArray = Array.from(badgeEl.parentNode.children)
      .forEach(el => el.style.color = 'white')
    badgeEl.style.color = 'red';

        filterArray = [badgeEl.dataset.filter === 'true' ? true : false];
        console.log('查询的条件：', filterArray);
        this.props.onTodoClick(filterArray);
  }

  render() {
    console.log('render todoList')
    let {filterTodoList} = this.props;
    return (
      <div>
        <div>
          {
            this.props.filterTypes.map((filter, index) =>
              <Badge data-active="0" data-filter={filter.completed} onClick={(e) => {this.filterClick(filter, e)}} key={index}>{filter.type}</Badge>
            )
          }
        </div>
        <ul>
          {
            filterTodoList.map((todo, index) =>
              <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.title}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

TodoListByArray.propTypes = {
  listId: PropTypes.number,
  filterTodoList: PropTypes.array
};

const mapStateToProps = createPropsSelector({
  filterTodoList: getFilterTodoListSelector,
  filterTypes: filterTypesSelector
});

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (filter) => {
      dispatch(toogleTodoAction(filter))
    },
  };
}

// export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(reselectPage));
export default connect(mapStateToProps, mapDispatchToProps)(TodoListByArray)
