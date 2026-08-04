import { User } from "@app/types/user";
import { getCookie } from "@shared/utils/cookie";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock user database
const mockUsers: User[] = [
  {
    id: "1",
    email: "test@example.com",
    name: "Test User",
    password: "password123", // In real app, this would be hashed
  },
];

export const authApi = {
  login: async (email: string, password: string): Promise<User> => {
    await delay(1000); // Simulate network delay

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Don't return password in response
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  register: async (
    email: string,
    password: string,
    name?: string
  ): Promise<User> => {
    await delay(1000);

    // Check if user already exists
    if (mockUsers.some((u) => u.email === email)) {
      throw new Error("User with this email already exists");
    }

    const newUser: User = {
      id: String(mockUsers.length + 1),
      email,
      password,
      name,
    };

    mockUsers.push(newUser);

    // Don't return password in response
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  logout: async (): Promise<void> => {
    await delay(500);
    // In a real app, this would invalidate the session/token
    return;
  },

  getCurrentUser: async (): Promise<User | null> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      return null;
    }
    // In a real app, this would validate the session/token and return user data
    // For now, we'll return a mock user if a token exists
    return {
      id: "1",
      email: "test@example.com",
      name: "Test User",
    };
  },

  updateProfile: async (userId: string, data: Partial<User>): Promise<User> => {
    await delay(1000);

    const userIndex = mockUsers.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      throw new Error("User not found");
    }

    const updatedUser = {
      ...mockUsers[userIndex],
      ...data,
    };

    mockUsers[userIndex] = updatedUser;

    // Don't return password in response
    const { password: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  },
};
