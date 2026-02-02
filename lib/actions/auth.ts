"use server";

import {cookies} from 'next/headers';
import {redirect} from "next/navigation";

export async function logout(){
    console.log('logout')
    const store = await cookies();
    store.delete("auth");

    redirect('/login');
}