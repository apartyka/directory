var React = require('react');

class SearchSortProvider extends React.Component {
  // Call orderBy function as prop, pass along the target of the click and order
  handleOrderBy(e) {
    this.props.handleOrderBy(e.target.id, this.props.orderDir);
  }

  // Same thing as orderBy only in reverse
  handleOrderDir(e) {
    this.props.handleOrderBy(this.props.orderBy, e.target.id);
  }

  // Use the event to tell our props what to search for
  handleSearch(e) {
    this.props.handleSearch(e.target.value);
  }

  render() {
    var orderBy = this.props.orderBy;
    var orderDir = this.props.orderDir;

    return(
      <div className="search-providers">
        <div className="input-group">
          <input
            placeholder="Search Provider List by Last Name"
            type="text"
            className="form-control"
            aria-label="Search Provider List by Last Name"
            onChange={this.handleSearch.bind(this)}
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
                  <a
                    href="#"
                    id="first_name"
                    onClick={this.handleOrderBy.bind(this)}
                  >
                    First Name {(orderBy === 'first_name') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="last_name"
                    onClick={this.handleOrderBy.bind(this)}
                  >
                    Last Name {(orderBy === 'last_name') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="email_address"
                    onClick={this.handleOrderBy.bind(this)}
                  >
                    Email {(orderBy === 'email_address') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="specialty"
                    onClick={this.handleOrderBy.bind(this)}
                  >
                    Specialty {(orderBy === 'specialty') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="practice_name"
                    onClick={this.handleOrderBy.bind(this)}
                  >
                    Practice Name {(orderBy === 'practice_name') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a
                    href="#"
                    id="asc"
                    onClick={this.handleOrderDir.bind(this)}
                  >
                    Asc {(orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="desc"
                    onClick={this.handleOrderDir.bind(this)}
                  >
                    Desc {(orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null}
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SearchSortProvider;
