import { makeAutoObservable } from 'mobx';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

class AuthStore {
  currentUser: User | null = null;

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init() {
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
    });
  }

  logout = async () => {
    await signOut(auth);
    this.currentUser = null;
  }
}

const authStore = new AuthStore();
export default authStore;
