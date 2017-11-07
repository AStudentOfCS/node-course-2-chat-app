const socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'Mike',
  //   text: 'whats up'
  // });

  // socket.emit('createEmail', {
  //   to: 'test@example.com',
  //   text: 'Hello from world!'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });
