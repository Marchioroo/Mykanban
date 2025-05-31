export interface Tag {
  title: string;
  color: string;
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  date: string; // formato ISO ou "YYYY-MM-DD"
  tags?: {
    title: string;
    color: string;
  }[];
  users?: number;
  comments?: {
    id: number;
    user: {
      name: string;
      photo: string;
    };
    text: string;
    time: string; // Ex: '2d', '1d', '3h' etc.
  }[];
}

export interface Column {
  id: number;
  name: string;
  colorDots: string;
  tasks: Task[];
}
