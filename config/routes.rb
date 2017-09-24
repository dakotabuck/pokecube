Rails.application.routes.draw do
  get 'welcome/index'

  resources :cubes#, :cards
  resources :cubes do
    resources :cubecards
  end

  root 'welcome#index'
end
