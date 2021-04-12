import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import Header from './Header/index'


const Product = () => {
    const history = useHistory()

    var product = JSON.parse(localStorage.getItem('addProduct'))
    var abc

    useEffect(() => {
       
      abc = JSON.parse(localStorage.getItem('abc'))
      product = JSON.parse(localStorage.getItem('addProduct'))
      deleteProduct()
    }, [localStorage,abc])
    
    const [search,setSearch]=useState("")
    const [sorting,setSorting]=useState({field:"",order:""})
    const [check,setCheck]=useState(false)

    var headers=[
       {name:"S.no",field:"id",sortable:false},
       {name:"Name",field:"name",sortable:true},
       {name:"SubCategory",field:"subCategory",sortable:true},
       {name:"Category",field:"category",sortable:true},
       {name:"Description",field:"description",sortable:true},

    ]

    

    if(product && sorting.field){
      const reversed=sorting.order === "asc" ? 1 :-1;
      console.log(product)
      product = product.sort(
         (a,b)=>
            reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
   }
   
   const handle=(id)=>{
      var a=[];

     
      if(!JSON.parse(localStorage.getItem('abc'))){
         a.push(id)
         localStorage.setItem('abc', JSON.stringify(a))
      }else{
        var old=JSON.parse(localStorage.getItem('abc'))
        if(old.includes(id)){
         localStorage.removeItem('abc')
         for( let i = 0; i < old.length; i++){ 
    
            if ( old[i] === id) { 
        
                old.splice(i, 1); 
            }
        
        }
        console.log(old)
        localStorage.setItem('abc', JSON.stringify(old))

      }else{

         old.push(id)
        
        localStorage.setItem('abc', JSON.stringify(old))
      }
      }
     
    }

    const renderTableData=(key)=>{
      return product.filter(val=>{
          if(search==""){
      return val
   }else if(val.name.toLowerCase().includes(search.toLowerCase())){
      return val
   }
}).map((product, index) => {
           const { name, category,subCategory,description ,id } = product 

           return (
               <tr >
               <td key={id}><input type="checkbox"   onChange={(e)=>setCheck(!check),function(){
                  handle(id)
               }} /></td>
               <td>{name}</td>
               <td>{subCategory}</td>
               <td>{category}</td>
               <td>{description}</td>

            </tr>
             
           )

        })
        
     
   }
  const deleteProduct=()=>{
      if(abc && product){

         abc.map(val=>{
         for( let i = 0; i < product.length; i++){ 
            if(val==product[i].id){
               localStorage.removeItem('addProduct') 
               product.splice(i, 1);
               console.log(val)
               console.log(product)
               localStorage.setItem('addProduct', JSON.stringify(product))

            }
         }
         })
         localStorage.removeItem('abc') 

    window.location.reload()

      }
   }


   const deleteRow=()=>{
      
    window.location.reload()

   }
     

  return (
    <div className='container' style={{marginTop:"30px",marginBottom:"80px"}}>
       <div style={{display: "flex",
        justifyContent: "center"}}>
       
      

       </div>
        <div>
           <button onClick={deleteRow} type="button">Delete</button>
            <h5 id='title'>All Products List</h5>
            
            <Table striped bordered hover variant="dark">
            
            <Header headers={headers} onSorting={(field,order)=>
            setSorting({field,order})
            }/>
               <tbody>
                  { product &&  renderTableData()}
               </tbody>
               </Table>
         </div>
    </div>
  )
}

export default Product
