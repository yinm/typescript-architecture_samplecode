export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type SearchUserModelInput = {
  fetchUser: (query: string) => Promise<User[]>;
};

export class SearchUserModel implements SearchUserModelInput {
  async fetchUser(query: string) {
    const response = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    const json = await response.json();
    return json.items;
  }
}
