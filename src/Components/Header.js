import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Header() {

    const [data,setdata] = useState()

    const d = useSelector((state) => state.carts)

    console.log("gdfgdf"+JSON.stringify(d))
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
   


  return (
    <div>
       
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping app</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to='/' className="text-decoration-none text-light mx-3" >Home</NavLink> 
           <NavLink to='/cartdetails' className="text-decoration-none text-light">CardDetails</NavLink> 
          </Nav>
        
          <Badge badgeContent={4} color="primary"   ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          <i class="fa fa-shopping-cart text-light" style={{fontSize:"25px",cursor:"pointer"}}aria-hidden="true"></i>
          </Badge>
        
        </Container>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                   
                    <MenuItem >your cart is empty <i class="fa fa-times" aria-hidden="true" style={{margin:"5px"}} onClick={handleClose} ></i></MenuItem>
                   
                  </MenuList>


                  
                </ClickAwayListener>
              </Paper>



             
            </Grow>
          )}
        </Popper>
       
      </Navbar>
     
    </div>
  )
}
