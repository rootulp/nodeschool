function loadUsers(userIds, load, done) {
  var users = []
  var count = 0

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      count += 1;
      if (userIds.length === count) {
        return done(users);
      }
    })
  })
}

module.exports = loadUsers
