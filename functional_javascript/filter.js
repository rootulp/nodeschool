function getShortMessages(messages) {
  return messages.filter(function(item) {
    return shortMessage(item)
  }).map(function(item) {
    return item.message
  })
}

function shortMessage(item) {
  return item.message.length < 50
}

module.exports = getShortMessages
