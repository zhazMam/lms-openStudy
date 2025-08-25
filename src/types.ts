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
  title: string;
  description: string;
  position: number;
};
export type Lesson = {
  title: string;
  description: string;
  content: string;
  position: number;
  starts_at: string;
  end_at: string;
  meeting_url: string;
};
