import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({userList}) => (
  <div className='container row cards'>
    {userList.map((user) => {
      return <Card key={user.id} user={user} />;
    })}
  </div>
);

export default CardList;