"use client";
import Image from "next/image";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div>
   <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}} >
    <div>
      <label htmlFor="Name">Name</label>
      <input name = "Name" id="Name" className="text-black bg-white" type="text" />
    </div>
    <div>
      <label htmlFor="Add">Address</label>
      <input name = "Add" id="Add" className="text-black bg-white" type="text" />
    </div>
    <div>
      <button>Submit</button>
    </div>
   </form>
    </div>
  );
}
