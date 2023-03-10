import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

export default function UserPlaces() {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Emp. State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u2",
    },
  ];

  const userId = useParams().id;

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return (
    <>
      <PlaceList items={loadedPlaces} />
    </>
  );
}
