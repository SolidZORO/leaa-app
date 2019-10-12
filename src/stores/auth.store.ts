import { observable } from 'mobx';
import { IAuthBaseInfo } from '@/interfaces';

export interface IAuthStore {
  permissions?: string[];
  authToken?: string;
  authExpiresIn?: string;
  // authInfo?: IAuthBaseInfo;
  authInfo?: string;
}

export class AuthStore {
  @observable authToken = '';
  @observable authExpiresIn = '';
  @observable authInfo = '';

  constructor(initData?: IAuthStore) {
    this.authToken = (initData && initData.authToken) || this.authToken;
    this.authExpiresIn = (initData && initData.authExpiresIn) || this.authExpiresIn;
    this.authInfo = (initData && initData.authInfo) || this.authInfo;
  }
}
