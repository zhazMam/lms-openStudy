import { create } from "zustand";
import type { Course, Exercise, Lesson, Module } from "../types";
import axios from "axios";

interface State {
  courses: Course[];
  modules: Module[];
  lessons: Lesson[];
  exercises: Exercise[];
  selectedCourseId: number | null;
  getCourses: () => Promise<void>;
  setSelectedCourseId: (id: number) => void;
  getSelectedModules: (courseId: number) => Promise<void>;
  getSelectedLessons: (moduleId: number) => Promise<void>;
  getSelectedExercises: (lessonId: number) => Promise<void>;
}

export const useCourseStore = create<State>((set, get) => {
  return {
    courses: [],
    selectedCourseId: null,
    modules: [],
    lessons: [],
    exercises: [],

    getCourses: async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        set({ courses: data });
      } catch (e) {
        console.error("Failed to fetch courses:", e);
      }
    },
    setSelectedCourseId: (id) => {
      set({ selectedCourseId: id });
    },
    getSelectedModules: async (courseId) => {
      try {
        const { data } = await axios.get<Module[]>(
          `http://localhost:3000/modules?course_pk=${courseId}`
        );
        set({ modules: data });
      } catch (e) {
        console.error(`Failed to fetchlessons: ${courseId}`, e);
      }
    },
    getSelectedLessons: async (moduleId) => {
      try {
        const { data } = await axios.get<Lesson[]>(
          `http://localhost:3000/lessons?module_pk=${moduleId}`
        );
        set({ lessons: data });
      } catch (e) {
        console.error(`Failed to fetchlessons: ${moduleId}`, e);
      }
    },
    getSelectedExercises: async (lessonId) => {
      try {
        const { data } = await axios.get<Exercise[]>(
         `http://localhost:3000/exercises?lesson_pk=${lessonId}`
        );
        set({ exercises: data });
      } catch (e) {
        console.error(`Failed to fetch exercise for lesson: ${lessonId}`, e);
      }
    },
  };
});
export const useCourses = () => useCourseStore((store) => store.courses);
export const useModules = () => useCourseStore((store) => store.modules);
export const useLessons = () => useCourseStore((store) => store.lessons);
export const useExercises = () => useCourseStore((store) => store.exercises);

export const useCoursesAction = () => {
  const store = useCourseStore();
  return {
    getCourses: store.getCourses,
    getModules: store.getSelectedModules,
    getLessons: store.getSelectedLessons,
    getExercises: store.getSelectedExercises,
  };
};
