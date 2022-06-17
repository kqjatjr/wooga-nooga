declare namespace NodeJS {
  interface Process {
    env: {
      PORT?: string;
      NODE_ENV?: string;
    };
  }
}
