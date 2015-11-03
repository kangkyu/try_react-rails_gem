var AccountForm = React.createClass({

  getInitialState: function() {
    return (this.props.form);
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
        <form className="new_account" id="new_account" action={ this.state.action } acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" /><input type="hidden" name={ this.state.csrf_param } value={ this.state.csrf_token } />
          <div className="field">
            <label htmlFor="account_name">Name</label><br />
            <input type="text" name="account[name]" id="account_name" placeholder="Name" onChange={this.inputChange} />
          </div>
          <div className="actions">
            <input type="submit" name="commit" value="Create Account" />
          </div>
        </form>
      </div>
    );
  }

});
