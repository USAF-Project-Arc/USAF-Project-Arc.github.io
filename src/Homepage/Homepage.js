import { useState } from 'react'
import './Homepage.css'

function Homepage() {
    const menuItems = ['Mission', 'Projects', 'Cohorts', 'Contact']
    const paths = ['/content', '/projects', '/cohorts', '/contact']

    const [selectedNav, setSelectedNav] = useState(0)



    return (
        <div className='menu'>
            <div className='menu-items'>
                {menuItems.map((item, index) => (
                    <a href={paths[index]} onClick={() => setSelectedNav(index)} className='menu-item'>{item}</a>
                ))}
            </div>
            <div className='menu-background'/>
        </div>
    )
}

export default Homepage