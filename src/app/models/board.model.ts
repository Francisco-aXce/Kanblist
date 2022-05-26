export interface Board {
  id: number,
  name: string,
  tasks: Task[]
}

export interface Task {
  id: number,
  name: string,
  description: string,
  status: string,
  priority: Priority
}

export enum Priority {
  unassigned = 'unassigned',
  low = 'low',
  medium = 'medium',
  high = 'high'
}
