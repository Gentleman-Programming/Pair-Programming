import Description from "./Description";
import Title from "./Title";

function YoutubeInformation() {
  return (
    <>
      <Title>Youtube</Title>
      <Description descriptionLabel="viewCount" descriptionValue={15000} />
      <Description descriptionLabel="suscriberCount" descriptionValue={50000} />
      <Description descriptionLabel="VideoCount" descriptionValue={35000} />
    </>
  );
}

export default YoutubeInformation;
