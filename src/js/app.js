const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');

const AddProvider = require('./AddProvider');
const ProviderListItem = require('./ProviderList');
const SearchSortProvider = require('./SearchSortProvider');

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
      providers: PROVIDERS,
      formIsVisible: false,
      orderBy: 'last_name',
      orderDir: 'asc',
      query: ''
    });
  }

  handleRemove(provider) {
    const providers = this.state.providers;
    const updatedProviderList = _.without(providers, provider);

    this.setState({
      providers: updatedProviderList
    })
  }

  handleFormDisplay() {
    const visibility = !this.state.formIsVisible;

    this.setState({
      formIsVisible: visibility
    });
  }

  handleAdd(newProvider) {
    const providers = this.state.providers;

    providers.unshift(newProvider);

    this.setState({
      providers: providers
    });
  }

  handleOrderBy(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  }

  // Accepts query text from the SearchSortProvider and update state
  handleSearch(q) {
    this.setState({
      query: q
    });
  }

  render() {
    var providers = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var query = this.state.query;
    var providersState = this.state.providers;

    // Sort with user query if it exists, lets stick to just last_name
    providersState.forEach((item) => {
      var q = (item.last_name.toLowerCase().indexOf(query.toLowerCase()) !== -1);

      if(q) {
        providers.push(item);
      }
    });

    // Ordering
    providers = _.orderBy(providers, function(provider) {
      return provider[orderBy].toLowerCase();
    }, orderDir);

    // Map provider data to the subcomponent
    providers = providers.map((provider, index) => {
      return (
        <ProviderListItem
          key={index}
          providers={provider}
          selectedProvider={provider}
          onRemove={this.handleRemove.bind(this)}
        />
      )
    });

    return (
    	<div className="layout">
        <div className="add-provider col-sm-4">
          <AddProvider
            formIsVisible={this.state.formIsVisible}
            handleFormDisplay={this.handleFormDisplay.bind(this)}
            handleAdd={this.handleAdd.bind(this)}
          />
        </div>
        <div className="col-sm-8">
          <SearchSortProvider
            orderBy={this.state.orderBy}
            orderDir={this.state.orderDir}
            handleOrderBy={this.handleOrderBy.bind(this)}
            handleSearch={this.handleSearch.bind(this)}
          />
          <ul className="providers media-list">
            {providers}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
