import { create } from "zustand";
import type { Course, Lesson, Module } from "../types";
import axios from "axios";
import { Try } from "@mui/icons-material";

interface State {
  courses: Course[];
  modules: Module[];
  lessons: Lesson[];
  selectedModuleId: number | null;
  getCourses: () => Promise<void>;
  getModules: (current_pk: number) => Promise<void>;
  getLessons: (module_pk: number) => Promise<void>;
}

export const useCourseStore = create<State>((set, get) => {
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
    getModules: async (course_pk) => {
      try {
        const { data } = await axios.get<Module[]>(
          `http://localhost:3000/courses/${course_pk}/modules`
        );
        set({ modules: data });
      } catch (e) {
        console.error("Failed to fetch modules:", e);
      }
    },
    getLessons: async (module_pk) => {
      try {
        const { data } = await axios.get<Lesson[]>(
          `http://localhost:3000/courses/${module_pk}/modules`
        );
        set({ lessons: data });
      } catch (e) {
        console.error("Failed to fetchlessons:", e);
      }
    },
  };
});
export const useCourses = () => useCourseStore((store) => store.courses);

export const useCoursesAction = () => {
  const store = useCourseStore();
  return {
    getCourses: store.getCourses,
    getModules: store.getModules,
    getLessons: store.getLessons,
  };
};
