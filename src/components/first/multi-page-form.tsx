import { useEffect, useState } from "react";
import GenresForm from "./genres/genres";
import ArtistsForm from "./artists/artists";

export default function MultiPageForm() {
  const [index, setIndex] = useState(0);
  const formArray = [
    <GenresForm isValid={validate} />,
    <ArtistsForm isValid={validate} />,
  ];
  function validate() {
    setIndex(1);
  }

  return <>{formArray[index]}</>;
}
