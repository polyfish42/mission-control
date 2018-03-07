Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    post '/users/demo', to: 'users#demo'

    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
