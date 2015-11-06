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
    return (
      <div>
        <h3>{this.state.name}</h3>
        <form className="new_account" id="new_account" action={ (this.props.form).action } acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" /><input type="hidden" name={ (this.props.form).csrf_param } value={ (this.props.form).csrf_token } />
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
