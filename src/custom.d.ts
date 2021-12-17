/// <reference types="react-scripts" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "comlink-loader!*" {
  class WebpackWorker extends Worker {
    constructor();

    // Add any custom functions to this class.
    // Make note that the return type needs to be wrapped in a promise.
    processData(data: string): Promise<string>;
  }

  export = WebpackWorker;
}
