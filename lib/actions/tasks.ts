"use server";

import {toggleTaskStatus, addTask} from "@/lib/data";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData){
    const title = formData.get('title');

    if(typeof title === 'string' && title.trim()){
        addTask(title.trim());
        redirect('/dashboard/tasks');
    }
}

export async function updateTaskStatus(formData: FormData){
    const id = formData.get('id');

    if(typeof id === 'string'){
        toggleTaskStatus(id);
        redirect('/dashboard/tasks');
    }
}