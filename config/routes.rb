Rails.application.routes.draw do
  resources :features
  mount_ember_app :frontend, to: "/"
end
