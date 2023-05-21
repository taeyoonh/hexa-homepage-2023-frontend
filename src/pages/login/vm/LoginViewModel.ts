// LoginViewModel.js (또는 LoginViewModel.ts)
import { action, makeObservable, observable } from 'mobx';

export class LoginViewModel {
  @observable
  username = '';

  @observable
  password = '';

  constructor() {
    makeObservable(this);
  }

  @action
  setUsername(username: string) {
    this.username = username;
  }

  @action
  setPassword(password: string) {
    this.password = password;
  }

  @action
  handleLogin() {
    // 로그인 처리 로직 작성
  }
}
