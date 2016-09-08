const React = require('react');

class SearchSortProvider extends React.Component {
  render() {
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
                  <a href="#">Last Name</a>
                </li>
                <li>
                  <a href="#">Specialty</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Asc</a>
                </li>
                <li>
                  <a href="#">Desc</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SearchSortProvider;
