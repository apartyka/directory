const React = require('react');
const ReactDOM = require('react-dom');

const PROVIDERS = [
  {
  	"last_name": "Harris",
  	"first_name": "Mike",
  	"email_address": "mharris@updox.com",
  	"specialty": "Pediatrics",
  	"practice_name": "Harris Pediatrics"
  },
  {
  	"last_name": "Wijoyo",
  	"first_name": "Bimo",
  	"email_address": "bwijoyo@updox.com",
  	"specialty": "Podiatry",
  	"practice_name": "Wijoyo Podiatry"
  },
  {
  	"last_name": "Rose",
  	"first_name": "Nate",
  	"email_address": "nrose@updox.com",
  	"specialty": "Surgery",
  	"practice_name": "Rose Cutters"
  },
  {
  	"last_name": "Carlson",
  	"first_name": "Mike",
  	"email_address": "mcarlson@updox.com",
  	"specialty": "Orthopedics",
  	"practice_name": "Carlson Orthopedics"
  },
  {
  	"last_name": "Witting",
  	"first_name": "Mike",
  	"email_address": "mwitting@updox.com",
  	"specialty": "Pediatrics",
  	"practice_name": "Witting’s Well Kids Pediatrics"
  },
  {
  	"last_name": "Juday",
  	"first_name": "Tobin",
  	"email_address": "tjuday@updox.com",
  	"specialty": "General Medicine",
  	"practice_name": "Juday Family Practice"
  }
];

class App extends React.Component {
  componentWillMount() {
    this.setState({
      providers: PROVIDERS
    });
  }

  render() {
    var providers = this.state.providers;
    providers = providers.map((provider, index) => {
      return (
        <li
          key={index}
          className="provider media"
        >
          <div className="provider-info media-body">
            <div className="heading">
              <span className="name">
                {this.state.providers[index].last_name}, {this.state.providers[index].first_name}
              </span>
              <span className="specialty pull-right">
                {this.state.providers[index].specialty}
              </span>
            </div>
            <div className="sub-heading">
              <span className="email">
                {this.state.providers[index].email_address}
              </span>
              <span className="practice-name pull-right">
                {this.state.providers[index].practice_name}
              </span>
            </div>
          </div>
        </li>
      )
    });

    return (
    	<div className="col-sm-12">
        Hello {this.props.name}
        <div className="add-provider">
          Add Provider form component...
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul className="providers media-list">
              {providers}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App name="Adam" />,
  document.getElementById('app')
);
