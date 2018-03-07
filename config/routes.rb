Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show, :index]
    post '/users/demo', to: 'users#demo'

    resource :session, only: [:create, :destroy]
    resources :todo_lists, expect: [:new, :edit]
  end

  root 'static_pages#root'
end
