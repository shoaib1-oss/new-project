import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(credentials: { username: string; password: string }) {
    // Validate credentials, retrieve user details (mocked here)
    const user = { id: 1, username: credentials.username };

    // Generate JWT
    const token = this.jwtService.sign(user);
    return { token };
  }

  async register(userData: { username: string; password: string; email: string }) {
    // Register logic here (mocked for simplicity)
    return { message: 'User registered successfully' };
  }
}
