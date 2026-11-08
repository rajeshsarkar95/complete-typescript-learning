type User = { id: string; name: string };
interface UserRepository { findById(id: string): Promise<User | null> }

class UserService {
  constructor(private readonly users: UserRepository) {}
  async getProfile(id: string): Promise<User> {
    const user = await this.users.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }
}
