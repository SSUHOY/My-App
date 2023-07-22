import { useParams, useNavigate } from "react-router-dom";


export const Profile = () => {

  const navigate = useNavigate();
  
  const handleBackButtonClick = () => {
    navigate('/',{replace:true});
  }
   
  const params = useParams();

  const user = USERS.find((user) => user.id === Number(params.id));
  const fullName = `${user.firstName} ${user.lastName}`;
  
    return (
      <section>
        <img src={user.avatar} alt={fullName} />
        <h1>{fullName}</h1>
        <p>email: {user.email}</p>
        <p>gender: {user.gender}</p>
        <button onClick={handleBackButtonClick}>Back to main</button>
      </section>
    );
  };