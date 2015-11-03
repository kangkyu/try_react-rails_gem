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
