import { useState } from 'react'
import Layout from '../components/Layout'
const Form = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('') 

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,      
    };
    fetch('/api/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    

   // console.log(data);
  }
  return (
     <Layout>
<div className="min-h-screen  flex items-center">
  <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
    <div className="py-12 p-10 bg-white rounded-xl">
    <form onSubmit={handleSubmit} >
      <div className="mb-6">
        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Name</label>
        <input name="name" onChange={e => setName(e.target.value)} type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" />
      </div>
      <div className="">
        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Email</label>
        <input name="category" onChange={e => setCategory(e.target.value)} type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="@email" />
      </div>
      <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">forget password</span>
      <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
    </form>
    </div>
  </div>
</div>
</Layout>)
}
export default Form