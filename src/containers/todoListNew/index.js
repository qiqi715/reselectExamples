import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { injectIntl, intlShape } from 'react-intl';
import { createPropsSelector } from 'reselect-immutable-helpers';

import TodoList from '../todoList';
import {

} from './selectors';

export class reselectPage extends React.Component {
  render() {
    console.log('render todoListNew')
    return (
      <div>
        <TodoList listId="1" />
        <TodoList listId="2" />
        <TodoList listId="3" />
      </div>
    )
  }
}

// reselectPage.propTypes = {
//
// };

const mapStateToProps = createPropsSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(reselectPage));
export default connect(mapStateToProps, mapDispatchToProps)(reselectPage);
