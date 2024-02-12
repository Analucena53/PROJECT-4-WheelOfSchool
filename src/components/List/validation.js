function Validar(user){

    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const resultEmail = validateEmail.test(user.userEmail); 

    if (!user.userName ||
        !user.userSurname ||
        !user.userSecondSurname ||
        !user.userRol ||
        !user.userCourse ||
        !user.userClass ||
        !user.userEmail) {
        return(false);
    }
    else if(!resultEmail) {
        alert('caca');
        return (false);
    }
    else {
        return(true);
    }
};

export default Validar;