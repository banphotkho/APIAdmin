import React  from 'react'
import Useritem from './Useritem';
import Spinner from '../layout/Spinner'
import  PropTypes from 'prop-types'
 

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner/>
    } else {
        return (
            <div style={UserStyled}>
                {users.map(user => (
                    <Useritem key={user.id}  user = {user} ></Useritem>
                ))}
            </div>
          );
    }

  } 

  Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
  }

  

  const UserStyled = {
    display : 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
    margin: '10px 10px 0 10px'
}

export default Users;
