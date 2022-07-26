export default class NetworkService {
  endpoint: string;

  token: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setToken(token: string) {
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

  getToken(url: string, requestType: string, body: any) {
    const token = localStorage.getItem('token') as string;

    if (body.email === 'user@user' && body.password === 'user') {
      return token;
    }
  }
}
