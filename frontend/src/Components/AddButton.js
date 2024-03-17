import React from 'react'
import { ReactComponent as Addbutton } from '../assets/add.svg'
import { Link } from 'react-router-dom'

const AddButton = () => {
    return (
        <Link to="/note/new" className='floating-button'>
            <Addbutton />

        </Link>
    )
}

export default AddButton