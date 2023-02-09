import Navbar from "../../components/Navbar/Navbar";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>ESTO ES LA HOME </h1>
      <Tarjeta />
    </>
  );
}
