export type Name = string;

export type Record = {
  name: string;
  description: string;
  image?: string;
  git_url: string;
  badge?: string;
};

export type Records = Array<Record>;

export type ActiveRecord = {
  name: Name;
};
