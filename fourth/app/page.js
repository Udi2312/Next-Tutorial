"use client";
export default function Home() {
  const handleClick = async () =>{
    const data = { name: 'John Doe', age: 30 };
    let a = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  let res = await a.json();
  console.log(res);
}
  return (
    <div>
      <h1>Next.js api demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
    
}
