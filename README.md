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

    respond_to do |format|
      format.html do
        render component: 'AccountList', props: { accounts: @accounts }, tag: 'span'
      end
      format.json { render json: @accounts }
    end
```