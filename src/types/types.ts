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

export type LinksInformation = {
  platform: string;
  link: string;
};

export type LinkTabInformation = {
  platform: string;
  link: string;
  id: number;
};

export type LinkInfo = {
  email: string;
  firstname?: string;
  lastname?: string;
  url?: string;
};

export type User = {
  email: string;
  firstname?: string;
  lastname?: string;
  url?: string;
  links?: LinkTabInformation[];
};

export type LinkUser = {
  platform: string;
  url: string;
};

export type LinkUserWithId = {
  platform: string;
  url: string;
  id: number;
};
