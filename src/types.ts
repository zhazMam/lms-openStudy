export type Course = {
  id: number;
  title: string;
  price: string;
  starts_at: string;
  end_at: string;
  description: string;
  is_active: boolean;
  duration: number;
};

export type Module = {
  id: number;
  course_pk: number;
  title: string;
  description: string;
  position: number;
};

export type Lesson = {
  id: number;
  module_pk: number;
  title: string;
  description: string;
  content: string;
  position: number;
  starts_at: string;
  end_at: string;
  meeting_url: string;
};

export type Exercise = {
  lesson: number;
  title: string;
  description: string;
  status: string;
  due_at: string;
  max_score: number;
  sample_solution: string;
};
