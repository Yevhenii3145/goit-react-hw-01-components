import PropTypes from 'prop-types'
import css from './friend.module.css'
import getBgColor from './getBgColor'

export default function FriendEl({ avatar, name, isonline }) {
    
    const state = getBgColor(isonline)
    console.log("gg", state)
       
        return (
            <li className={css.item}>
                <span className={`${css["status"]} ${css[state]} `}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
    }

FriendEl.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isonline: PropTypes.bool.isRequired,
}

// style={{ backgroundColor: getBgColor(isonline) }}
//{isOnline ? className='online' : className='offline'}