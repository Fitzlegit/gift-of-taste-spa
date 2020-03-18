Rails.application.routes.draw do
  resources :recipes, only: [:index, :create, :show, :update, :destroy]
  resources :cookbooks
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
