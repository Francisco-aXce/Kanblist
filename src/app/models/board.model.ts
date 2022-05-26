export interface Board {
  id: string,
  name: string,
  tasks: Task[]
}

export interface Task {
  id: string,
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
