import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination({ setPage, error }) {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color:"brown",
    onClick: () => {
      if (!error) {
        setActive(index);
        setPage(index);
      }
    },
    className: "rounded-full",
  });

  const next = () => {
    if (active === 4 || error) return;

    setActive(active + 1);
    setPage(active + 1);
  };

  const prev = () => {
    if (active === 1 || error) return;

    setActive(active - 1);
    setPage(active - 1);
  };

  return (
    <div className="flex items-center p-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> 
      </Button>
      <div className="flex items-center">
        {[1, 2, 3, 4].map((index) => (
          <IconButton key={index} {...getItemProps(index)}>
            {index}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 4}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
