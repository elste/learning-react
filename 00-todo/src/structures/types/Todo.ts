export type Todo = {
    id: number;
    priority: 0 | 1 | 2;
    description: string;
    done: Date | null;
};