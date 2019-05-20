function Machine(power) {
  this._power = power;
  this._enabled = false;

  let self = this;

  this.enable = function () {
    self._enabled = true;
  };

  this.disable = function () {
    self._enabled = false;
  };
}

function Fridge(...args) {
  Machine.apply(this, args);

  this._power = this._power / 100;

  this._food = [];

  const machineDisable = this.disable;

  this.disable = () => {
    if (this._food.length) {
      throw new Error(`В холодильнике еда`);
    }
    machineDisable();
  };

  this.addFood = (...food) => {
    this._food.concat(food);

    if (!this._enabled) {
      throw new Error(`Включите холодильник`);
    }

    if (this._food.length + food.length > this._power) {
      throw new Error(`Слишком много продуктов`);
    }
    this._food = this._food.concat(food);
  };

  this.getFood = () => {
    const food = this._food.slice();
    return food;
  };

  this.removeFood = (item) => {
    this._food = this._food.filter((it) => {
      return it.title !== item.title;
    });

    this.filterFood = (func) => {
      const filtredFood = this._food.filter(func);
      return filtredFood;
    };
  };
}
