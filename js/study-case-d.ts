export type Name = string;

export type Record = {
  name: Name;
  description: string;
  icon: string;
  paths: Array<{
    name: string;
    value: string;
  }>;
};

export type Records = Array<Record>;

export type ActiveRecord = {
  name: Name;
  path: { name: string };
};
