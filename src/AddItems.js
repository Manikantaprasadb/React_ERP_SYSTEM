import React from 'react';
import Button from "@mui/material/Button";
import { Link  } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddItems.css'
import ControlButtons from './ControlButtons';
import { useState ,useEffect,useContext,} from 'react';
import Context from './Context';

export default function AddItems() {
  const {setRows,editData,setEditData} = useContext(Context);


  const [pId,setPId] = useState("")
  const [name,setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity,setQuantity] = useState("")

  useEffect(() => {
    if (editData) {
      setPId(editData.pId);
      setName(editData.name);
      setPrice(editData.price);
      setQuantity(editData.quantity);
    }
  }, [editData]);

  function setData(){
    const data = {
      pId:pId,
      name:name,
      price:price,
      quantity:quantity
    }

    if (editData) {
      setRows((prevRows) => prevRows.map((row) => (row.pId === editData.pId ? data : row)));
      setEditData(null);
    } else {
      setRows((prevRows) => [...prevRows, data]);
    }
    
    setPId("")
    setName("")
    setPrice("")
    setQuantity("")

  }

  function updateData() {
    setData(); 
  }


  return (
    <div>
      <Link to="/homepage" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{ marginLeft: "85%", marginTop: "2%" }}
          startIcon={<HomeIcon />}
        >
          View Products
        </Button>
      </Link>
      <Box
        component="form"
        className="form-container" 
              sx={{
        '& .MuiTextField-root': { m: 2, width: '45ch' },
      }}
        noValidate
        autoComplete="off"
      >
        <h2>{editData ? "Edit Product" : "Add Product"}</h2>
        <TextField
          id="pId"
          label="Product Id"
          type="text"
          variant="standard"                                                                               
          value={pId}
          onChange={e=>setPId(e.target.value)}
         
        />
        <TextField
          id="name"
          label="Product Name"
          type="text"
          variant="standard"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <TextField
          id="price"
          label="Selling Price"
          type="number"
          variant="standard"
          value={price}
          onChange={e=>setPrice(e.target.value)}
        />
        <TextField
          id="quantity"
          label="Quantity"
          type="number"
          variant="standard"
          value={quantity}
          onChange={e=>setQuantity(e.target.value)}
        />
      </Box>
      
      <ControlButtons onUpdate={editData ? updateData : null} onSet={!editData ? setData : null} />


    </div>
  );
}
