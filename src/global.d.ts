declare interface EaseParams {
  tick?: ({start, end, duration, progress, ease, value}) => void;
  complete?: ({start, end, duration, progress, ease, value}) => void;
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

declare interface TweenInstance {
  start: () => void
  stop: () => void
  on: (name: string, callback: Function) => void
  progress: number
}

declare interface String {
  format(args: any): () => string;
}

declare interface FormResult {
  valid: boolean;
  errors: {message?: string, method?: string}[];
  value: any;
  name: string;
  level?: number;
}

declare interface SongInterface {
  title: string
  artist: string
  album: string
  genre: string
  picture: string
}

declare interface CurrentSongInterface {
  title: string,
  artist: string,
  picture: string
}
