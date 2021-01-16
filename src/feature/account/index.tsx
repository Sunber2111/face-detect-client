import React from 'react'
import { Segment } from 'semantic-ui-react'
import ListAccount from './components/ListAccount/List'
import "./index.scss"
 
const index = () => {
    return (
        <Segment className='acc-page'>
            <p>Danh Sách Tài Khoản</p>
            <ListAccount/>
        </Segment>
    )
}

export default index
