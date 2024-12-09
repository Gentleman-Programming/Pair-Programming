import { useContext } from "react";
import { Creatorscontext } from "./creatorsContext";

export const useCreatorsContext = () => {
  const context = useContext(Creatorscontext);

  if (context.state === null) {
    throw new Error(
      "useCreatorsContext must be used within a CreatorsProvider",
    );
  }

  return context;
};
