Rails.application.routes.draw do
  resources :tests
  resources :features
  mount_ember_app :frontend, to: "/"
end
