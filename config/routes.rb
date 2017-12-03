Rails.application.routes.draw do
  resources :users
  get 'welcome/index'

  resources :cards

  resources :cubes do#, shallow:true do
    resources :cube_cards
  end

  root 'welcome#index'
end
