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

export const useCourseStore = create<State>((set) => {
  return {
    courses: [],
    selectedCourseId: null,
    selectedModeId: null,
    modules: [],
    lessons: [],
    exercises: [],

    getCourses: async () => {
      try {
        const { data } = await axios.get(
          "https://baemir.pythonanywhere.com/api/courses/"
        );
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
          `https://baemir.pythonanywhere.com/api/courses/course_pk=${courseId}/modules/`
        );
        set({ modules: data });
      } catch (e) {
        console.error(`Failed to fetchlessons: ${courseId}`, e);
      }
    },
    getSelectedLessons: async (moduleId) => {
      try {
        const { data } = await axios.get<Lesson[]>(
          `https://baemir.pythonanywhere.com/api/courses/course_pk/modules/module_pk=${moduleId}/lessons/`
        );
        set({ lessons: data });
      } catch (e) {
        console.error(`Failed to fetchlessons: ${moduleId}`, e);
      }
    },
    getSelectedExercises: async (lessonId) => {
      try {
        const { data } = await axios.get<Exercise[]>(
          `https://baemir.pythonanywhere.com/api/courses/course_pk/modules/module_pk/lessons/lesson_pk=${lessonId}/exercises/
`
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
