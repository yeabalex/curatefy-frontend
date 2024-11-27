import { useState } from "react";
import GenresForm from "./genres/genres";
import ArtistsForm from "./artists/artists";
import APIClient from "@/lib/api/api-client";

export interface FormData {
  genres?: string[];
  artists?: string[];
}
export default function MultiPageForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>();
  const formArray = [
    <GenresForm isValid={validate} populateFormData={populateFormData} />,
    <ArtistsForm isValid={validate} populateFormData={populateFormData} />,
  ];

  function populateFormData(data: FormData) {
    setFormData((prev) => ({ ...prev, data }));
  }

  function validate() {
    if (index !== 1) {
      setIndex(1);
      return;
    }
  }

  function sendFormData() {}

  return <>{formArray[index]}</>;
}
