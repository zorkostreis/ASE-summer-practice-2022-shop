export default class NetworkService {
  endpoint: string;

  token: string;

  constructor(endpoint: string, token: string) {
    this.endpoint = endpoint;
    this.token = token;
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
      body: JSON.stringify(body)
    };

    return (
      fetch(`${this.endpoint}${url}`, requestOptions)
        .then((response) => response.json())
    );
  }

  fetchToken(url: string, requestType: string, body: any) {
    const requestOptions = {
      method: requestType,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    };

    return (
      fetch(url, requestOptions)
        .then((response) => response.json())
    );
  }
}
