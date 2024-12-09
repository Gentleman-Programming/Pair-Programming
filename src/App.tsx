import "./App.css";
import Card from "./components/Card.tsx";
import YoutubeInformation from "./components/YoutubeInformation.tsx";
import { useCreatorsContext } from "./contexts/Creators/useCreators.ts";

function App() {
  const { state } = useCreatorsContext();

  if (!state) {
    return <div>No hay data</div>;
  }

  return (
    <>
      <div>
        {state.map((creator) => (
          <div key={creator.id}>
            <h2>{creator.name}</h2>
            {creator.channels.map((channel) => (
              <Card key={channel.id}>
                <YoutubeInformation channel={channel} />
              </Card>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
