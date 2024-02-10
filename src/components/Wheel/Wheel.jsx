import React, { useState, useEffect } from 'react';
import { UserService } from '../../userService';
import Swal from 'sweetalert2';

function Wheel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const allUsers = await UserService.getAllUsers();
              setUsers(allUsers);
              console.log(allUsers);
          } catch (error) {
              console.error('Error fetching users:', error);
          }
      };

      fetchUsers();

    }, []);
    
    // Participantes
    const [doomList, setDoomList] = useState([]);
    
      // Manejador del evento onClick para el botón
      const handleAddButton = (user) => {
        setDoomList((prevDoomList) => {
          // Verificar si el objeto ya existe en doomList
          const existingUser = prevDoomList.find((item) => item.id === user.id);
      
          // Solo agregar el objeto si no existe en doomList
          if (!existingUser) {
            return [
              ...prevDoomList,
              {
                id: user.id,
                name: user.userName,
                surname: user.userSurname
              }
            ];
          } else {
            // Si el objeto ya existe, mostrar un mensaje de alerta
            Swal.fire({
              title: "Error",
              text: `${user.userName} ya está en la lista.`,
              icon: "error"
            });
            return prevDoomList;
          }
        });
      };
      
      
      console.log(doomList);

      // Quitar participante
  
  

  return (
    <>
      <table id="tableUsers">
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userName} {user.userSurname}</td>
              <td>
                <button onClick={() => handleAddButton(user)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table id="tableDoomed">
        <thead>
          <tr>
            <th>A la hoguera</th>
          </tr>
        </thead>
        <tbody>
          {doomList.map((user, index) => (
            <tr key={index}>
              <td>{user.name} {user.surname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="circle">
        <li>
          <section className='text'>1</section>
        </li>
      </ul>
    </>
  )
}

export default Wheel;
































// import { useState } from 'react';
// import RoulettePro from 'react-roulette-pro';
// import 'react-roulette-pro/dist/index.css';

// import { UserService }  from '../../userService';

// const prizes = [
//   'Angy',
//   'https://i.ibb.co/T1M05LR/good-2.png',
//   'https://i.ibb.co/Qbm8cNL/good-3.png',
//   'https://i.ibb.co/5Tpfs6W/good-4.png',
//   'https://i.ibb.co/64k8D1c/good-5.png',
// ];

// const winPrizeIndex = 0;

// const reproductionArray = (array = [], length = 0) => [
//   ...Array(length)
//     .fill('_')
//     .map(() => array[Math.floor(Math.random() * array.length)]),
// ];

// const reproducedPrizeList = [
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length * 3),
//   ...prizes,
//   ...reproductionArray(prizes, prizes.length),
// ];

// const generateId = () =>
//   `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

// const prizeList = reproducedPrizeList.map((prize) => ({
//   image: prize,
//   id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
// }));

// const Wheel = () => {
//   const [start, setStart] = useState(false);

//   const prizeIndex = prizes.length * 4 + winPrizeIndex;

//   const handleStart = () => {
//     setStart((prevState) => !prevState);
//   };

//   const handlePrizeDefined = () => {
//     console.log('🥳 Prize defined! 🥳');
//   };

//   return (
//     <>
//       <RoulettePro
//         prizes={prizeList}
//         prizeIndex={prizeIndex}
//         start={start}
//         onPrizeDefined={handlePrizeDefined}
//       />
//       <button onClick={handleStart}>Start</button>
//     </>
//   );
// };

// export default Wheel;
