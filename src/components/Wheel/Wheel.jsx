import React, { useState, useEffect, useRef } from 'react';

import { UserService } from '../../userService';
import Swal from 'sweetalert2';
import './Wheel.css'

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
  
    // Agregar participante
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
            imageUrl: "public/images/iconoError.svg"
          });
          return prevDoomList;
        }
      });
    };
    
  console.log(doomList);

    // Quitar participante
    const handleRemoveButton = (user) => {
      setDoomList((prevDoomList) => {
        return prevDoomList.filter((item) => item.id !== user.id);
      });
    }
      
  let startAngle = 0;
  let arc = Math.PI / (doomList.length / 2);
  let spinTimeout = null;

  let spinArcStart = 10;
  let spinTime = 0;
  let spinTimeTotal = 0;

  function getColor(index) {
    if (index %  2 ===  0) {
      // Return white for even indices
      return "#FFFFFF"; // White color
    } else {
      // Return green for odd indices
      return "#D4E2D4"; // Light green color
    }
  }

  const canvasRef = useRef(null);
  const canvas = canvasRef.current;

  useEffect(() => {
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width =  500; // Ajusta el ancho al deseado
      canvas.height =  500; // Ajusta la altura al deseado
      drawRouletteWheel(ctx);
    }
  }, [doomList, startAngle, arc, canvasRef]); 

  function drawRouletteWheel(ctx) {

    if (ctx) {
      let outsideRadius = 200;
      let textRadius = 160;
      let insideRadius = 125;

      ctx.clearRect(0,0,500,500);

      ctx.strokeStyle = "transparent";

      ctx.font = 'bold 12px Helvetica, Arial';

      for(let i =  0; i < doomList.length; i++) {
        let angle = startAngle + i * arc;
        ctx.fillStyle = getColor(i, doomList.length);

        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        // Acceder al objeto user y a sus propiedades userName y userSurname
        const user = doomList[i];
        const userName = user.name;
        const userSurname = user.surname;

        // Concatenar el nombre y apellido para mostrarlo
        let text = `${userName} ${userSurname}`;

        //Arrow
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
        ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
        ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
        ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
        ctx.fill();

        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur =  0;
        ctx.shadowColor = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(250 + Math.cos(angle + arc /  2) * textRadius,  
                      250 + Math.sin(angle + arc /  2) * textRadius);
        ctx.rotate(angle + arc /  2 + Math.PI /  2);
        ctx.fillText(text, -ctx.measureText(text).width /  2,  0);
        ctx.restore();
      } 
    }
  } 

  let spinAngleStart =  0; 

  function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
  }

  function rotateWheel() {
    spinTime +=  30;
    if (spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    let spinAngle = spinAngleStart - easeOut(spinTime,  0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI /  180);
    const ctx = canvas.getContext('2d');
    drawRouletteWheel(ctx);
    requestAnimationFrame(rotateWheel);
  }

  function stopRotateWheel() {
    clearTimeout(spinTimeout);
    let degrees = startAngle *  180 / Math.PI +  90;
    let arcd = arc *  180 / Math.PI;
    let index = Math.floor((360 - degrees %  360) / arcd);
  
    // Acceder al objeto user usando el índice
    const user = doomList[index];
  
    // Acceder a las propiedades correctas del objeto user
    const userName = user.name; // Cambia userName por name
    const userSurname = user.surname; // Cambia userSurname por surname
  
    // Obtener el contexto del canvas aquí
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    ctx.save();
    ctx.font = 'bold  30px Helvetica, Arial';
    // Concatenar el nombre y apellido para mostrarlo
    let text = `${userName} ${userSurname}`;
    ctx.fillText(text,  250 - ctx.measureText(text).width /  2,  250 +  10);
    ctx.restore();
  }
  

  function easeOut(t, b, c, d) {
    let ts = (t/=d)*t;
    let tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }

  return (
    <>
    <section id="wheelComponent">
      <section id="tables">
          <table id="tableUsers">
            <thead>
              <tr>
              <th colSpan={2}>Alumnado</th>
              </tr>
            </thead>
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
                <th colSpan={2}>Participantes</th>
              </tr>
            </thead>
            <tbody>
              {doomList.map((doomed, index) => (
                <tr key={index}>
                  <td>{doomed.name} {doomed.surname}</td>
                  <td><button onClick={() => handleRemoveButton(doomed)}>-</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section> 

        <section className="roulette">
          <canvas ref={canvasRef}></canvas>
          <button id="spin" onClick={spin} className='btn'>Girar</button>
        </section>
      </section>
    </>
  )
}

export default Wheel;