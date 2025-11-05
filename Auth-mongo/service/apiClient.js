class ApiClient {
  constructor() {
    this.baseURL = "http://localhost:8000/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "include", //to send cookies
      };
      console.log(`Fetching url ${url}`);

      const response = await fetch(url, config);
      // check for response.ok === value
      const data = await response.json();
    } catch (error) {
      console.error("APT Error", error);
      throw error;
    }
  }

  async signup(name, email, password) {
    return this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async logout() {
    return this.customFetch("/users/logout", {
      method: "POST",
    });
  }

  async getme() {
    return this.customFetch("/users/current-user");
  }
}
