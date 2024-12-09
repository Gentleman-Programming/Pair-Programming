import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Creator } from "../../models";

type DefaultState = Creator[] | null;

const Creatorscontext = createContext<{
  state: DefaultState;
  setState: Dispatch<SetStateAction<Creator[]>>;
}>({
  state: null,
  setState: () => null,
});

const CreatorsProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<Creator[]>([] as Creator[]);

  return (
    <Creatorscontext.Provider value={{ state, setState }}>
      {children}
    </Creatorscontext.Provider>
  );
};

export { Creatorscontext, CreatorsProvider };
