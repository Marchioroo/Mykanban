export interface Tag {
  title: string;
  color: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: { title: string; color: string }[];
  users: number;
}

export interface Column {
  id: number;
  name: string;
  colorDots: string;
  tasks: Task[];
}
