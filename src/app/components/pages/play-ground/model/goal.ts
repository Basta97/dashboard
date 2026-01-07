import { Task } from "./task";

export interface Goal {
    id: number;
    name: string;
    tasks: Task[];
}
