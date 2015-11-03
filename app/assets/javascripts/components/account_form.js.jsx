var AccountForm = React.createClass({

  getInitialState: function() {
    return {};
  },

  handleSubmit: function(e) {
    $.ajax({
      url: '/accounts',
      dataType: 'json',
      type: 'POST',
      data: {
        account: {
          name: this.state.name
        }
      }
    })
    e.preventDefault();
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
        <form className="account-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" onChange={this.inputChange} />
          <input type="submit" value="Add Account" />
        </form>
      </div>
    );
  }
});
