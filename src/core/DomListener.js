import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners =[]) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener!`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      console.log(method);
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in
         ${this.name || ''} Component!`);
      }
      // addEventListener realisation
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListernes() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return 'on'+capitalize(eventName);
}
