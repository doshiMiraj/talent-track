export type Skill = {
    id: string;
    name: string;
};

export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
    id: string;
    title: string; 
    status: TaskStatus;
}

export const skills: Skill[] = [
    {id:"1", name: "React"},
    {id: "2", name: "Next.js"},
];

export const tasks: Task[] = [
    {id: "1", title: "Learn App Router", status: "done"},
    {id: "2", title: "Build TalentTrack", status: "in-progress"},
];

export function addSkill(name: string) {
    skills.push({
        id: crypto.randomUUID(),
        name,
    });
}

export function addTask(title: string){
    tasks.push({
        id: crypto.randomUUID(),
        title,
        status: 'todo',
    });
}

export function toggleTaskStatus(id: string){
    const task = tasks.find((t) => t.id === id);

    if(!task)
        return;

    if(task.status === 'todo')
        task.status = 'in-progress';
    else if(task.status === 'in-progress')
        task.status = 'done';
    else
        task.status = 'todo';
}