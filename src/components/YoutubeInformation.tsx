import { Channel } from "../models";
import Description from "./Description";
import Title from "./Title";

interface Props {
  channel: Channel;
}

function YoutubeInformation({ channel }: Props) {
  return (
    <>
      <Title>{channel.name}</Title>
      <Description
        descriptionLabel="View Count"
        descriptionValue={channel.viewCount}
      />
      <Description
        descriptionLabel="Suscriber Count"
        descriptionValue={channel.subscriberCount}
      />
      <Description
        descriptionLabel="Video Count"
        descriptionValue={channel.videoCount}
      />
    </>
  );
}

export default YoutubeInformation;
