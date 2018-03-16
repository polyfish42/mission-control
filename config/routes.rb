Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show, :index]
    post '/users/demo', to: 'users#demo'
    get '/search/users', to: 'users#search'
    resource :session, only: [:create, :destroy]
    resources :todo_lists, except: [:new, :edit]
    resources :todos, except: [:index, :new, :edit]
    resources :messages, except: [:new, :edit]
    resources :comments, only: [:create]
    resources :events, except: [:new, :edit]
    post '/events/filter', to: 'events#filter_index'
  end

  root 'static_pages#root'
end
