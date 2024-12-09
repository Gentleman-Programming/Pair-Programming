import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Creator } from "../../models";

const contentCreators: Creator[] = [
  {
    id: 0,
    channels: [
      {
        id: 0,
        name: "Youtube",
        subscriberCount: 65300,
        videoCount: 623,
        viewCount: 5384955,
      },
    ],
    name: "GentlemanProgramming",
  },
];

type DefaultState = Creator[] | null;

const Creatorscontext = createContext<{
  state: DefaultState;
  setState: Dispatch<SetStateAction<Creator[]>>;
}>({
  state: null,
  setState: () => null,
});

const CreatorsProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<Creator[]>(contentCreators);

  return (
    <Creatorscontext.Provider value={{ state, setState }}>
      {children}
    </Creatorscontext.Provider>
  );
};

export { Creatorscontext, CreatorsProvider };
