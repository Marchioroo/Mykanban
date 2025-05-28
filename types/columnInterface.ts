export interface Tag {
  title: string;
  color: string;
}

export interface Task {
  id: number;
  title: string;
  tags: Tag[];
  users: number;
}

export interface Column {
  id: number;
  name: string;
  colorDots: string;
  tasks: Task[];
}
