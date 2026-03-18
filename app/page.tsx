"use client";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Body from "./components/body";
export default function notegraph(){
  return (
    <section className="bg-white flex">
    <Navbar/>
    <div className="flex flex-1 mt-16">
      <Sidebar/>
      <Body/>
    </div>
    </section>
  )
}