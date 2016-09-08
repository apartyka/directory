const React = require('react');

class AddProvider extends React.Component {
  // Toggles display of the form via a passed function prop
  toggleDisplay() {
    this.props.handleFormDisplay();
  }

  clearForm() {
    var fields = ['fName', 'lName', 'email', 'specialty', 'practiceName'];

    fields.map(function(field) {
      this.refs[field].value = '';
    }.bind(this));
  }

  handleAdd(e) {
    // Nuke default event where a page refresh would occur onSubmit
    e.preventDefault();

    // Important: key name must match syntax used in json data
    var formValues = {
      first_name: this.refs.fName.value,
      last_name: this.refs.lName.value,
      email_address: this.refs.email.value,
      specialty: this.refs.specialty.value,
      practice_name: this.refs.practiceName.value
    };

    // Call Add method via passed function as props
    this.props.handleAdd(formValues);
     // Clear the values
    this.clearForm();
  }

  render() {
    // Use an inline style rule to handle the Form display
    var formDisplay = {
      display: this.props.formIsVisible ? 'block' : 'none'
    };

    return(
      <div className="add-provider panel panel-primary">
        <h5 className="panel-heading" onClick={this.toggleDisplay.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span> Add Provider
        </h5>
        <div className="panel-body" style={formDisplay}>
          <h6>
            <span className="required-field" role="alert">*</span> = required field
          </h6>
          <form
            className="form form-horizontal"
            onSubmit={this.handleAdd.bind(this)}
          >
            <div className="form-group">
              <label className="col-sm-12" htmlFor="fName">
                First Name <span className="required-field" role="alert">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  ref="fName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" htmlFor="lName">
                Last Name <span className="required-field" role="alert">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  ref="lName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" htmlFor="email">
                Email <span className="required-field" role="alert">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref="email"
                  placeholder="address@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" htmlFor="specialty">
                Specialty
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="specialty"
                  placeholder="Pediatrics, General Medicine etc."
                  ref="specialty"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" htmlFor="practiceName">
                Practice Name
              </label>
              <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="practiceName"
                ref="practiceName"
              />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">Add Provider</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = AddProvider;
