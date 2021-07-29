import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { useState } from "react";
import '@szhsin/react-menu/dist/index.css';
import './Header.css'


function ProfileMenu() {

    const [display, setDisplay] = useState('arrow');
    const [align, setAlign] = useState('end');
    const [position, setPosition] = useState('anchor');
    const [viewScroll, setViewScroll] = useState('auto');

    const menus = [<span>  <i className="fas fa-user"></i> </span>].map(direction => (
        < Menu menuButton={< MenuButton > {direction}</MenuButton >}
            key={direction} direction={direction}
            align={align} position={position} viewScroll={viewScroll}
            arrow={display === 'arrow'}
            offsetX={display === 'offset' &&
                (direction === 'left' || direction === 'right')
                ? 12 : 0}
            offsetY={display === 'offset' &&
                (direction === 'top' || direction === 'bottom')
                ? 12 : 0}>

            {
                [<i className="fas fa-user" > Profile</i>,
                <i className="fas fa-shopping-cart "> Cart</i>,
                <i className="fas fa-sign-out-alt"> Logout</i>]
                    .map(profileM => <MenuItem key={profileM}>{profileM}</MenuItem>)
            }
        </Menu >
    ));

    return (
        <div className="profile-menu">
            {menus}
        </div>
    )

}

export default ProfileMenu;