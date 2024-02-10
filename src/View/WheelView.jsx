import React, { useState } from 'react';

import Navbar from "../components/NavBar/NavBar"
import Wheel from "../components/Wheel/Wheel";

function WheelView() {

  return (
    <>
        <Navbar />

        <h1>Aplicación con Ruleta</h1>
        <Wheel />
    </>
  );
}

export default WheelView;
