import React,{useEffect,useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {addProduct} from './actions/addProduct'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'




const AddProducts = () => {
    const [name,setName]=useState("")
    const [subCategory,setSubCategory]=useState("")
    const [category,setCategory]=useState("")
    const [description,setDescription]=useState("")
    const [check,setCheck]=useState(false)
    const dispatch = useDispatch()
    const history=useHistory()

   

    const handleSubmit=(e)=>{
     e.preventDefault();
     
    //  console.log(id)
     var id = JSON.parse(localStorage.getItem('addProduct'))
    
    if(id==null){
   var idd=1;
    }else{
      idd=id.length+1
    }
     const product={
         name:name,
         subCategory:subCategory,
         category:category,
         description:description,
         id:idd,
     }

     var a=[]
      if(!JSON.parse(localStorage.getItem('addProduct'))){
         a.push(product)
         localStorage.setItem('addProduct', JSON.stringify(a))
      }else{
        var old=JSON.parse(localStorage.getItem('addProduct'))
        old.push(product)
        console.log(old)
        localStorage.setItem('addProduct', JSON.stringify(old))
        console.log(JSON.parse(localStorage.getItem('addProduct')))
      }
      
     setName("")
     setSubCategory("")
     setCategory("")
     setDescription("")
    //  setImage("")
     history.push('/')
     
    }
  return (

    <div className="container addProduct" style={{marginTop:"30px"}}>
      <Form onSubmit={handleSubmit}>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name </Form.Label>
    <Form.Control type="text" placeholder="Product name" required
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>SubCategory </Form.Label>
    <Form.Control type="text" placeholder="setSubCategory" required
     value={subCategory}
     onChange={(e)=>setSubCategory(e.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Category  </Form.Label>
    <Form.Control type="text" placeholder="Product Category" required
     value={category}
     onChange={(e)=>setCategory(e.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Description  </Form.Label>
    <Form.Control type="text" placeholder="Product desc" 
     value={description}
     onChange={(e)=>setDescription(e.target.value)}
    />
  </Form.Group>
  <Button type="submit">Submit form</Button>
</Form>
    </div>

  )
}

export default AddProducts
