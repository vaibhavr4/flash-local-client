export class MessageServiceClient {
  createMessage(message_details) {
    return fetch('http://localhost:4000/api/message', {
      body: JSON.stringify(message_details),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
