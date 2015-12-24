```rb
# Gemfile
gem 'react-rails', '~> 1.4.0'
```

```
rails g react:install
```

```rb
# config/environments/development.rb
config.react.variant = :development
```

https://github.com/reactjs/react-rails


```rb
# app/assets/javascripts/components/account.js.jsx

# app/controllers/accounts_controller.rb

  def index
    respond_to do |format|
      format.html do
        render component: 'AccountList', props: { accounts: @accounts }
      end
      format.json { render json: @accounts }
    end
  end
```

```rb
# app/assets/javascripts/components/account_form.js.jsx

# app/controllers/accounts_controller.rb

  def new
    @account = Account.new
    render component: 'AccountForm', props: { account: @account }
  end
```

```jsx
// AccountForm
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
```

Which one's a good way to do this "create action"? The other one I tried:

```rb
# app/controllers/accounts_controller.rb

  def new
    form = {
      action: accounts_path,
      csrf_param: request_forgery_protection_token,
      csrf_token: form_authenticity_token }

    render component: 'AccountForm', props: { form: form }, tag: 'div'
  end
```

```jsx
// AccountForm
var AccountForm = React.createClass({

  render: function() {
    return (
      <div>
        <form className="new_account" id="new_account" action={ (this.props.form).action } acceptCharset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name={ (this.props.form).csrf_param } value={ (this.props.form).csrf_token } />
          <div className="field">
            <label htmlFor="account_name">Name</label><br />
            <input type="text" name="account[name]" id="account_name" placeholder="Name" />
          </div>
          <div className="actions">
            <input type="submit" name="commit" value="Create Account" />
          </div>
        </form>
      </div>
    );
  }

});
```
