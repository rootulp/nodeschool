function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submitted) {
      return goodUsers.some(function(good){
        return submitted.id === good.id;
      });
    });
  }
}

module.exports = checkUsersValid
