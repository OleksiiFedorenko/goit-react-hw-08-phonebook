import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
