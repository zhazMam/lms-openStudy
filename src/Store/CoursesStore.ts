import { create } from "zustand";
import type { Course, Module } from "../types";
import axios from "axios";

interface State {
  courses: Course[];
  modules: Module[];
  selectedModuleId: number|null;
  getCourses: () => Promise<void>;
}
export const useCourseStore = create<State>((set, get ) => {
  return {
    courses: [],
    getCourses: async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        set({ courses: data });
      } catch (e) {
       console.error("Failed to fetch courses:", e);
      }
    },
    
  };
});
export const useCourses = () => useCourseStore((store) => store.courses);

export const useCoursesAction = () => {
  const store = useCourseStore();
  return { getCourses: store.getCourses };
};
