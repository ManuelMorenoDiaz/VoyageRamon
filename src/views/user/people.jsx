import React from 'react';
import '../../styles/people.css';
import Nav from '../../components/nav-bar';
import UserCard from '../../components/user-card';

const cardData = [
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
  {
    nombre: "Manuel Moreno Diaz",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU"
  },
  {
    nombre: "Nombre ApellidoP ApellidoM",
    fotoPerfil: "https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
  },
];

function people() {
  return (
    <div>
      <Nav />
      <div className="cont-people">
      <div className='cont-search'>
        <input type="text" placeholder='Search...' className='search-input' />
      </div>
        <div className="users">
          {cardData.map((card, index) => (
            <UserCard key={index} nombre={card.nombre} fotoPerfil={card.fotoPerfil} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default people;
