export type Activity = {
  id: string;
  title: string;
  description: string;
  type: ActivityType;
  status: Status;
  time?: string;
  people: { person: Person; status: string }[];
};

export enum Status {
  'SUGGESTION', 'PLANNED', 'CANCELED'
}

export type ActivityType = {
  icon: string;
  name: string;
};

export type Person = {
  id: string;
  name: string;
  description: string;
  phoneNumber: string;
  avatar: string;
};

export type Party = {
  name: string;
  people: Person[];
};
