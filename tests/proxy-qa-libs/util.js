'use strict';

module.exports = {
  mySleep: function (milliseconds) {
    var e = new Date().getTime() + (milliseconds);
      while (new Date().getTime() <= e) {
        ;
      }
  },

  getError: function (err) {
    return err || Error('Caught undefined error');
  }
};
