const React = require('react');

class ProviderList extends React.Component {
  render() {
    return(
      <li className="provider">
        <div className="provider-info media-body">
          <div className="heading">
            <span className="name">
              {this.props.providers.last_name}, {this.props.providers.first_name}
            </span>
            <span className="specialty pull-right">
              {this.props.providers.specialty}
            </span>
          </div>
          <div className="sub-heading">
            <span className="email">
              {this.props.providers.email_address}
            </span>
            <span className="practice-name pull-right">
              {this.props.providers.practice_name}
            </span>
          </div>
        </div>
      </li>
    );
  }
}

module.exports = ProviderList;
