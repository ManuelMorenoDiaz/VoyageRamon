import { useState } from "react";
import "../../styles/people.css";
import Nav from "../../components/nav-bar";
import UserCard from "../../components/user-card";
import Footer from "../../components/footer";

const cardData = [
  {
    nombre: "Juan1 Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Pepe ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Maria3 Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Juan ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Rosa Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Jose ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Fernando Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Emmanuel ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Dulce ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Alonso Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Daniel ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
  {
    nombre: "Maria2 Moreno Diaz",
    fotoPerfil:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU",
  },
  {
    nombre: "Enrique ApellidoP ApellidoM",
    fotoPerfil:
      "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg",
  },
];
function People() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = cardData.filter((user) =>
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
              <UserCard
                key={index}
                nombre={user.nombre}
                fotoPerfil={user.fotoPerfil}
              />
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
