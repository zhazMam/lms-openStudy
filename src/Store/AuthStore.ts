import { create } from "zustand";
import type { User } from "../types";
import axios from "axios";

interface State {
  users: User[];
  signUp: (newUser: object) => Promise<boolean>;
  logout: () => void;
  token: string | null;
  isAuth: Boolean;
  login: (user: { username: string; password?: string }) => Promise<boolean>;
  justSignedUp: Boolean;
}
export const useAuthStore = create<State>((set) => {
  return {
    users: [],
    token: localStorage.getItem("accessToken") || null,
    isAuth: !!localStorage.getItem("accessToken"),
    justSignedUp: localStorage.getItem("justSignedUp") === "true",

    signUp: async (newUser) => {
      console.log(newUser);
      try {
        const { data } = await axios.post(
          "https://baemir.pythonanywhere.com/api/user/register/",
          newUser
        );
        if (data.accessToken) {
          set({
            token: data.accessToken,
            isAuth: true,
            justSignedUp: true,
          });
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("justSignedUp", "true");
          return true;
        }
        return false;
      } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          throw e.response.data;
        } else {
          throw new Error("An unknown error occurred during sign up.");
        }
      }
    },
    login: async (User) => {
      console.log(User);
      try {
        const { data } = await axios.post(
          "https://baemir.pythonanywhere.com/api/user/token/",
          User
        );
        if (data.accessToken) {
          set({
            token: data.accessToken,
            isAuth: true,
            justSignedUp: false,
          });
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("justSignedUp", "false");
          return true;
        }
        return false;
      } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          throw e.response.data;
        } else {
          throw new Error("An unknown error occurred during login.");
        }
      }
    },
    logout: () => {
      set({ token: null, isAuth: false, justSignedUp: false });
      localStorage.removeItem("accessToken");
    },
  };
});
export const useToken = () => useAuthStore((store) => store.token);
export const useIsAuth = () => useAuthStore((store) => store.isAuth);
export const useJustSignedUp = () =>
  useAuthStore((store) => store.justSignedUp);

export const useAuthAction = () => {
  const store = useAuthStore();
  return {
    signUp: store.signUp,
    logout: store.logout,
    login: store.login,
  };
};
