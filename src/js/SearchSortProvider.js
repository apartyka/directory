const React = require('react');

class SearchSortProvider extends React.Component {
  render() {
    var orderBy = this.props.orderBy;
    var orderDir = this.props.orderDir;

    return(
      <div className="search-providers">
        <div className="input-group">
          <input
            placeholder="Search Provider List"
            type="text"
            className="form-control"
            aria-label="Search Provider List"
          />
          <div className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by &nbsp;<span className="caret"></span>
            </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a href="#">Last Name {(orderBy === 'last_name') ? <span className="glyphicon glyphicon-ok"></span>: null}</a>
                </li>
                <li>
                  <a href="#">Specialty {(orderBy === 'specialty') ? <span className="glyphicon glyphicon-ok"></span>: null}</a>
                </li>
                <li>
                  <a href="#">Practice Name {(orderBy === 'practice_name') ? <span className="glyphicon glyphicon-ok"></span>: null}</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Asc {(orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a>
                </li>
                <li>
                  <a href="#">Desc {(orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SearchSortProvider;
