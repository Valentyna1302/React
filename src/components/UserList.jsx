import { Link, useLocation } from 'react-router-dom';

const UserList = ({ users }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <Link to={`/users/${item.id}`} state={location}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
