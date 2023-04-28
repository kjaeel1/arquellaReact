
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBar from '../../compon/topBar';

function Protected(props) {

    const {Components} = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        // if (!login) {
        //     navigate('/login')

        // }
        if (login) {
            navigate('/login')

        }

    })

    return (
        <div>
            <TopBar />

            <Components />
            
            </div>
    )
}

export default Protected