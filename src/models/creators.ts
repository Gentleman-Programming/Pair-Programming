export interface Channel {
  id: number;
  name: string;
  viewCount: number;
  subscriberCount: number;
  videoCount: number;
}

export interface Creator {
  id: number;
  name: string;
  channels: Channel[];
}
