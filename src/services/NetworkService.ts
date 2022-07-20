export default class NetworkService {
  token: string;

  constructor(token: string) {
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
      fetch(url, requestOptions)
        .then((response) => response.json())
    );
  }
}
