import PropTypes from 'prop-types'
import css from './friend.module.css'
import FriendEl from './FriendEl'

export default function FriendList({ friends }) {
    console.log(friends)
    const elements = friends.map(({id, avatar, name, isOnline}) => <FriendEl key={id} avatar={avatar} name={name} isonline={isOnline} /> )
    return (
<ul className={css["friend-list"]}>{elements}</ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
     })
    )
}
