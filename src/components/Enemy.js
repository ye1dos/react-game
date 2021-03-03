import React from 'react'
import {useHistory } from 'react-router-dom';
import './General.css'
const Enemy = () => {
    const history = useHistory();
    const onClickEnemy = (a) => {
        localStorage.setItem('enemy', a)
        history.push('/game_with')
        }
    // useEffect(() => {

    // }, [])
    return (
        <div className='scr'>
            <h1>Choose your enemy</h1>
            <button type="button" id="human" onClick={() => onClickEnemy('h')}>Human</button>
            <button type="button" id="computer" onClick={() => onClickEnemy('c')}>Computer</button>
        </div>
    )
}
export default Enemy;