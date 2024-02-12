function Validar(user){

    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const resultEmail = validateEmail.test(user.userEmail); 

    const validateName = /^[A-Za-z]+$/;
    const resultName = validateName.test(user.userName + user.userSurname + user.userSecondSurname);

    if (!user.userName ||
        !user.userSurname ||
        !user.userSecondSurname ||
        !user.userRol ||
        !user.userCourse ||
        !user.userClass ||
        !user.userEmail) {
        alert('Rellene todos los campos obligatorios')
        return(false);
        
    }
    else if(!resultEmail) {
        alert('Formato de correo electrónico incorrecto. Por favor, corrige el email según el siguente ejemplo: example@mail.com');
        return (false);
    }
    else if(!resultName) {
        alert('Formato de nombre incorrecto. El nombre y los apellidos deben contener sólo minúsculas y mayúsculas');
        return (false);
    }
    else {
        return(true);
    }
};

export default Validar;