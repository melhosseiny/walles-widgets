export class Widget {
  id: number;
  name: string;
  color: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  size: Size;
  machine: Machine;
  size_id: number;
  machine_id: number;
  url: string;
}

export class Machine {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
  url: string;
}

export class Size {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
  url: string;
}
