import React from 'react'
interface Props {
  Name:string,
  age:number,
  RollNo:number,
  Quarter:string,
  image : string
}

function Page(props: Props) {
  return (
    <>
      <div  className='border-4 border-black w-80   m-10 h-52 bg-neutral-300  rounded-md'>
       <h1 className='text-2xl  text-center font-semibold mb-5 bg-zinc-200 '>Student Card</h1>
       <div className=' w-fit pl-2 text-black font-medium '>
       <h3>Name : {props.Name}</h3>
       <h3>Age : {props.age}</h3>
       <h3>RollNo : {props.RollNo}</h3>
       <h3>Quarter : {props.Quarter}</h3>
       </div>
       <span className='flex justify-end ml-40 -mt-28 w-36 h-28 mr-2 '>
      <img src={props.image} alt="student" />
        </span>
       
        <div className='border-2 mt-4 text-center bg-slate-500 text-white'>{props.Quarter}</div>
       </div>
    </>
  )
}

export default Page