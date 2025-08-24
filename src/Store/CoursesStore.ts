import { create } from "zustand";
import type { Course } from "../types";
import axios from "axios";

interface State {
  courses: Course[];
  getCourses: () => Promise<void>;
}
export const useCourseStore = create<State>((set) => {
  return {
    courses: [],
    getCourses: async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        set({ courses: data });
      } catch (e) {
        console.log(e);
      }
    },
  };
});
export const useCourses = () => useCourseStore((store) => store.courses);

export const useCoursesAction = () => {
  const store = useCourseStore();
  return { getCourses: store.getCourses };
};
