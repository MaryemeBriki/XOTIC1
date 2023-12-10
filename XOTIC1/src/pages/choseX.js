import * as React from "react";

function MyComponent(props) {
  return (
    <div className="justify-center items-center border border-[color:var(--color-surface-surface-outline,#ECECEC)] shadow bg-white flex grow basis-[0%] flex-col px-16 py-7 rounded-[80px] border-solid max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/22adab405ee887cdeddaa318cbfc415b6d7195d38c16ebabdf5816accfcd37da?"
        className="aspect-square object-contain object-center w-7 overflow-hidden"
      />
    </div>
  );
}


