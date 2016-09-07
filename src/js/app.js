const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
    	<div className="col-sm-12">
        Hello {this.props.name}
        <div className="addProvider">
          Add Provider form component...
        </div>
        <div className="row">
          <div className="col-sm-12">
            Provider list component here...
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
