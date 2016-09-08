const React = require('react');

class AddProvider extends React.Component {
  toggleDisplay() {
    console.debug('toggleDisplay called');
  }

  handleAdd(e) {
    e.preventDefault();
    console.debug('handleAdd called');
  }

  render() {
    return(
      <div className="add-provider panel panel-primary">
        <h5 className="panel-heading" onClick={this.toggleDisplay.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span> Add Provider
        </h5>
        <div className="panel-body">
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
                  placeholder="First Name"
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
                  placeholder="Last Name"
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
                placeholder="Practice Name"
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
