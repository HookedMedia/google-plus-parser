// Generated by CoffeeScript 1.7.1
(function() {
  jQuery(function() {
    var elems, fireEvent, latestNumber;
    fireEvent = function(element, event) {
      var evt;
      var evt;
      if (document.createEvent) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(event, true, true);
        return !element.dispatchEvent(evt);
      } else {
        evt = document.createEventObject();
        return element.fireEvent('on' + event, evt);
      }
    };
    latestNumber = 1;
    elems = window.jq(".d-A");
    fireEvent(elems[latestNumber], "mousedown");
    return fireEvent(elems[latestNumber], "mouseup");
  });

}).call(this);