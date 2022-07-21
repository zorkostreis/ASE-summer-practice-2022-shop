export default class NetworkService {
  endpoint: string;

  token: string;

  constructor(endpoint: string, token: string) {
    this.endpoint = endpoint;
    this.token = token;
  }

  fetch(url: string, requestType: string, body: any) {
    const requestOptions = {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': this.token
      },
      body
    };

    return (
      fetch(`${this.endpoint}${url}`, requestOptions)
        .then((response) => response.json())
    );
  }
}
