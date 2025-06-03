export interface TagsName {
  title:
    | "Setup"
    | "Design"
    | "Segurança"
    | "Backend"
    | "API"
    | "Code Review"
    | "Testes"
    | "Q&A"
    | "Deploy"
    | "DevOps"
    | string;
}

export interface TagWithColor {
  title: TagsName["title"];
  color: string;
}

export interface DropdownItem {
  label: TagsName["title"];
  color: string;
}
