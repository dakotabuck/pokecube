Rails.application.routes.draw do
  resources :users
  get 'welcome/index'

  resources :cards

  resources :cubes#, :cards
  resources :cubes do
    resources :cube_cards
  end

  root 'welcome#index'
end
