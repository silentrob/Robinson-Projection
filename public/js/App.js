
window.onload = function() {
  
	map = new VectorMap();
	map.init('map');
		
  // Add some points
  map.addPoint("#7be0f3", 49.248523, -123.1088, "127.0.0.1", "Vancouver Team");
  map.addPoint("#0099ff", 37.75,  -122.68, "127.0.0.2", "SanFran Team");
  map.addPoint("#0084fe", 41.162114,-2.285156, "127.0.0.3", " Spain Team");  
};
