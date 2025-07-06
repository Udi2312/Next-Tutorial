"use server";
import fs from "fs/promises";
export const submitAction = async (e) =>{
    console.log(e.get("Name") , e.get("Add"));
   let a = await fs.writeFile("Udit.txt", `Name is ${e.get("Name")} and Address is ${e.get("Add")}`);
  }