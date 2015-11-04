var Account = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
});

var AccountList = React.createClass({
  render: function() {
    var accountNode = this.props.accounts.map(function (account) {
      return (
        <Account name={account.name} key={account.id} />
      );
    });
    return (
      <div>
        { accountNode }
      </div>
    );
  }
});
