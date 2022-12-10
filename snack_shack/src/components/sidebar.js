import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/sidebar.css';

const Sidebar = () => {
    return (
        <Menu>
            <a className='menu-item' href="/">
                Home
            </a>
            <a className='menu-item' href="/feed">
                Your Feed
            </a>
            <a className='menu-item' href="/deals">
                Special Deals
            </a>
            <a className='menu-item' href="/pack">
                Pack Snack
            </a>
        </Menu>
    );
}

export default Sidebar;