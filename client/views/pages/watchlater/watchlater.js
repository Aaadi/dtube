Template.watchlater.helpers({
  watchLater: function () {  
      return WatchLater.find().fetch()
    
  }, 
  isOnMobile: function () {
    if (/Mobi/.test(navigator.userAgent)) { 
        return true;
    }
  }
})
