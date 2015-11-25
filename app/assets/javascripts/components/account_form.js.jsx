var ErrorList = React.createClass({
  render: function() {
    console.log(this.props.errors);
    // return <div></div>;
    var somethingElse = this.props.errors.map(function (message) {
      return (
        <li>{ message }</li>
      );
    });
    return (
      <div id="error_explanation">
        // <h2>{ this.props.errors.count } error prohibited this account from being saved:</h2>
        <ul>{ somethingElse }</ul>
      </div>
    );
  }
});
// "map"

var AccountForm = React.createClass({

  getInitialState: function() {
    return {};
  },

  inputChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  render: function() {
    console.log(this.props);
    var errorNode;
    if ( this.props.any_error ) {
      errorNode = <ErrorList account={ this.props.errors } />;
    } else {
      errorNode = <span>valid</span>;
    }
    return (
      <div>
        <h3>{this.state.name}</h3>
        <form className="new_account" id="new_account" action={ (this.props.form).action } acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" /><input type="hidden" name={ (this.props.form).csrf_param } value={ (this.props.form).csrf_token } />

          { errorNode }

          <div className="field">
            <label htmlFor="account_name">Name</label><br />
            <input type="text" value={ this.props.account.name } name="account[name]" id="account_name" placeholder="Name" onChange={this.inputChange} />
          </div>
          <div className="actions">
            <input type="submit" name="commit" value="Create Account" />
          </div>
        </form>
      </div>
    );
  }

});