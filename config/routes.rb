Rails.application.routes.draw do
  resources :users
  get 'welcome/index'

  resources :cards

  resources :cubes do
    resources :cube_cards#, :action => 'edit'
  end

  # this doesn't work because it still requires /cube_card/xx
  #resources :cube_cards, :path_prefix => 'cubes/:cube_id',

  resources :register, :controller => 'users', :action => 'new'
  resources :login, :controller => 'users', :action => 'login'
  #connect ':cubes/:cube_id/:cube_card_id', :action => 'show'
  #resources 'showcard/:cube_id/:cube_card_id', :controller => ['cubes', 'cube_cards'], :action => 'show'

  root 'welcome#index'
end
