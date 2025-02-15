export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
  __v: number;
}

export interface IStore {
  _id?: string;
  name: string;
  owner: string;
  status: string;
  location: string;
  price: number;
  image: string;
  __v: number;
}

export interface IAuthData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}
