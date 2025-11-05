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
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "API request failed");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error", error);

      throw error;
    }
  }

  async signup(username, email, password) {
    return this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
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

const apiClient = new ApiClient();

export default apiClient;
