  msg = function(message){
    document.getElementById("stat").insertAdjacentHTML('beforeend',"<li>"+message+"</li>");
  }
  
  function clear(){
	document.getElementById("myProgress").style.visibility = "hidden";
  }

  // L'oggetto che controlla la cache 
  var appCache = window.applicationCache;

  // Nuovi eventi disponbili con le Offline API 
  appCache.addEventListener('checking', function(ev) {
    msg("Checking Cache"); 
  }, false);
   
  appCache.addEventListener('noupdate', function(ev) {
    msg("Cache never changed");
	clear()
  }, false);
   
  appCache.addEventListener('downloading', function(ev) { 
    msg("Download file from Cache list"); 
  }, false);
   
  appCache.addEventListener('progress', function(ev) { 

	  var elem = document.getElementById("myBar");   
	  var width = ev.loaded;
	  var id = setInterval(frame, 1);
	  function frame() {
		if (width >= 100) {
		  clearInterval(id);
		} else {
		  width++; 
		  elem.style.width = width + '%'; 
		  elem.innerHTML = width * 1 + '%';
		}
	  }
  
  }, false);
   
  appCache.addEventListener('cached', function(ev) { 
    msg("Finish");
  }, false);
   
  appCache.addEventListener('updateready', function(ev) { 
    msg("New version cache downloaded."); 
  }, false);
   
  appCache.addEventListener('obsolete', function(ev) { 
    msg("Error 404 or 410 check your list and compare to the file present in your folder"); 
  }, false);
   
  appCache.addEventListener('error', function(ev) {
	msg("<br>Ops, attention I found an error <br><br>"+ev.url+"<br>");
  }, false);