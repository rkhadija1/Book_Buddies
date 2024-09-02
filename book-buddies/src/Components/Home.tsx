import '../App.css';
import '../App';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';




function Home() {
    const navigate = useNavigate();


       return (
        <div>

        
        <span> Home</span> 

        <Button className="BasicButton" onClick={() => { navigate('/About')}}> Go to About!!!! </Button>
        
        </div>
   
);
}
export default Home;
