import React from "react";
import Card from "./Card";

const Gallery = () => {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md cursor-pointer">
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
