import React ,{useState}from 'react'

function Login({fn}) {

//     let [input, setInput] = useState('')

//   function manageInp(e) {
//     let { id, value } = e.target
//     setInput(value)
//   }

  
   
  return (
   <>
   <div className='flex justify-center bg-blue-400 mt-44 p-2 mx-96 text-xl font-bold'>
    <h1>Login</h1>
   </div>
   
   <div className=' bg-blue-400  p-2 mx-96 text-xl font-bold pt-12 flex '>
   <h1>email-id:</h1>
   <div className='pl-12'>
   <input type="text" onChange={fn}/>
   </div>
   </div>

   <div className=' bg-blue-400  p-2 mx-96 text-xl font-bold pt-1 flex '>
   <h1>password:</h1>
   <div className='pl-8'>
   <input type="text" />
   </div>
   </div>


   <div className=' bg-blue-400  p-2 mx-96 text-xl font-bold pt-12 flex justify-center '>
   <button className='border-2 rounded-xl p-1 border-black'>Submit</button>
   </div>

    

   </>
  )
}

export default Login