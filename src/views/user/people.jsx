
import { useEffect, useState } from 'react';
import '../../styles/people.css';
import Nav from '../../components/nav-bar';
import UserCard from '../../components/user-card';
import Footer from '../../components/footer';
import { useDataContext } from '../../context/DataContext';

function People() {
  const [searchQuery, setSearchQuery] = useState('');
  const { personas, fetchPersonas } = useDataContext();
 
  useEffect(()=>{
    fetchPersonas();
  }, [])

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = personas.filter((user) =>
    user.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <div className="cont-people">
        <div className="cont-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="users">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <UserCard key={index} nombre={user.nombre} fotoPerfil={user.imagen} />
            ))
          ) : (
            <p>No hay resultados</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default People;