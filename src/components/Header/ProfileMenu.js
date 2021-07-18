import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { useState } from "react";
import '@szhsin/react-menu/dist/index.css';
import './Header.css'


function ProfileMenu() {

    const [display, setDisplay] = useState('arrow');
    const [align, setAlign] = useState('end');
    const [position, setPosition] = useState('anchor');
    const [viewScroll, setViewScroll] = useState('auto');

    const menus = [<i className="fas fa-user"></i>].map(direction => (
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
                ['Profile', <i className="fas fa-shopping-cart"> Add To Cart</i>, 'Logout']
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