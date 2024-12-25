import { useState} from "react";
import GenresForm from "./genres/genres";
import ArtistsForm from "./artists/artists";
import APIClient from "@/lib/api/api-client";
import { useDispatch} from "react-redux";
import { addGenres, addArtists } from "@/features/preferences/preferencesSlice";

export interface FormData {
  genres?: string[];
  favoriteArtists?: string[];
}

export default function MultiPageForm() {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const formArray = [
    <GenresForm isValid={validate} populateFormData={populateFormData} key={1} />,
    <ArtistsForm
      isValid={validate}
      populateFormData={populateFormData}
      submitForm={sendFormData}
      key={2}
    />,
  ];

  function populateFormData(data: FormData) {
    if (data.genres) {
      dispatch(addGenres(data.genres));
    }
    if (data.favoriteArtists) {
      dispatch(addArtists(data.favoriteArtists));
    }
  }

  function validate() {
    if (index !== formArray.length - 1) {
      setIndex((prev) => prev + 1);
      return;
    }

    //sendFormData(selector);
  }

  function sendFormData(formData: FormData | undefined) {
    console.log(formData);
    if (formData) {
      APIClient.req("post", "user/update?field=preferences", formData);
    }
  }

  return <>{formArray[index]}</>;
}
