// import * as React from "react";
// import { useForm } from "react-hook-form";

// type FormData = {
//   username: string;
//   password: string;
// };

// export default function App() {
//   const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const onSubmit = handleSubmit(data => console.log(data));
//   // firstName and lastName will have correct type

//   return (
//       <div className="">
//         <div className="">
//           <div className=""> 

//           </div>
//         </div>
//       </div>
//   );
// }


import React, { useEffect, useState } from 'react'

const ExampleForm = () => {
  const [data,setData] = useState([])
  const url = "https://store.krenai.work/api/v4/product/customer?id=0&secondaryKey=&productName=&categoryName=&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=6&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=3ed28503-8aae-11ed-8ac6-0283a590984e"

  const fetchdata =()=>{ 
  fetch(url)
  .then(response => response.json())
  .then(data => setData(data.object))
  .catch(error => console.error(error))}
  console.log("This is data",data)

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
      <img src={data.mediaUrl}  />
      <h1>{data.description}</h1>
    </div>
  )
}

export default ExampleForm