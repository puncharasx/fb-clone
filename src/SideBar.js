import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import './SideBar.css'
import SideBarRow from  './SideBarRow.js'
import { useStateValue } from './StateProvider'

const SideBar = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SideBarRow 
            src={user.photoURL}
            title={user.displayName}
             />
            <SideBarRow 
            Icon={LocalHospital}
            title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlags} title="Page" />
            <SideBarRow Icon={People} title="Friends" />
            <SideBarRow Icon={Chat} title="Messenger" />
            <SideBarRow Icon={Storefront} title="Maketplace" />
            <SideBarRow Icon={VideoLibrary} title="videos" />
            <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace"  />
            
        </div>
    )
}

export default SideBar
