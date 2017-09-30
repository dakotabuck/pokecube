Rails.application.routes.draw do
  resources :users
  get 'welcome/index'

  resources :cubes#, :cards
  resources :cards
  resources :cubes do
    resources :cube_cards
  end

  root 'welcome#index'
end
