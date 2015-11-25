var Account = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.account.name}</div>
      </div>
    );
  }
});

var AccountList = React.createClass({
  render: function() {
    var accountNode = this.props.accounts.map(function (account) {
      return (
        <Account account={account} key={account.id} />
      );
    });
    console.log(this.props.accounts);
    return (
      <div>
        { accountNode }
      </div>
    );
  }
});
