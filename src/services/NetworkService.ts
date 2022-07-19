export default class NetworkService {
  constructor() {
  }

  fetch(offset: number, limit: number) {
    const url = 'http://77.223.99.133:8080/api/products/part';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': token
      },
      body: JSON.stringify({ offset, limit })
    };

    return (
      fetch(url, requestOptions)
        .then((response) => response.json())
    );
  }
}
