export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  createdAt?: string;
}
