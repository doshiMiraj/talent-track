"use server";

import { addSkill } from "@/lib/data";
import { redirect } from "next/navigation";

export async function createSkill(formData: FormData){
    const name = formData.get('name');

    if(typeof name === 'string' && name.trim()){
        addSkill(name.trim());
        redirect("/dashboard/skills");
    }
}