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
import {toogleTodoAction} from './actions';

export class todoListPage extends React.Component {
  
  filterClick = (filter) => {
    this.props.onTodoClick(filter);
  }

  render() {
    console.log('render todoList')
    let {filterTodoList} = this.props;
    return (
      <div>
        <div>
          {
            this.props.filterTypes.map((filter, index) =>
              <Badge onClick={() => {this.filterClick(filter)}} key={index}>{filter}</Badge>
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

todoListPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(todoListPage)
