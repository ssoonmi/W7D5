json.session do
  json.currentUserId @user.id
end

json.users do
  json.set! @user.id do
    json.extract! @user, :username
  end
end
