export type SignInFormType = {
  email: string;
  password: string;
};

export type SignUpFormType = {
  email: string;
  password: string;
  validatePassword?: string;
};

export type UpdateFormType = {
  image?: File | undefined;
  firstname: string;
  lastname: string;
  email?: string;
};

export type LinkInfoProfile = {
  email: string;
  firstname?: string;
  lastname?: string;
};

export type LinkUser = {
  platform: string;
  url: string;
  id: number;
};

export type UserData = {
  lastname?: string;
  firstname?: string;
  email?: string;
  image?: string | Blob;
  links?: LinkUser[];
  ranking?: number;
  id?: string;
};

// Redux User type

export type CurrentUserState = {
  currentUser?: UserData;
  isDemo: boolean;
  isLoading: boolean;
};
