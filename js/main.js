// theoxt.com - Qué haces fisgoneando mi código :v
var DEFAULT_SERVER = "149.56.19.53:5001";

var chooseServers = [
	["FFA 1", "149.56.19.53:3002"],
	["FFA 2", "149.56.19.53:3002"],
	["FFA 3", "149.56.19.53:3003"],
	["Instant 1", "149.202.209.118:4001"], // nbk.io
	["Instant 2", "149.56.19.53:4002"],
	["Instant 3", "149.56.19.53:4003"],
	["Crazy 1", "149.56.19.53:5001"],
	["Crazy 2", "149.56.19.53:5002"],
	["Crazy 3", "149.56.19.53:5003"],
	["Crazy 4", "150.95.135.169:5003"],
	["Bots 1", "150.95.135.169:6001"],
	["Bots 2", "149.56.19.53:6002"],
	["Bots 3", "149.56.19.53:6003"],
	["Bots 4", "149.202.209.118:6001"], // nbk.io
	["Bots 5", "149.202.209.118:6002"], // nbk.io
	["Bots 6", "149.202.209.118:6003"],	// nbk.io
	["TheoBots1", "myogarserver-theoliztik632768.codeanyapp.com:8887"]
];

$("document").ready(function() {
	setDefaultServer();
	loadServers();
});

function setDefaultServer() {
	setCurrentServer("ws://" + DEFAULT_SERVER);
}

function loadServers() {
	$('<select id="chooseServer" class="form-control chooseServer" onchange="setCurrentServer($(\'#chooseServer\').val())"></select>').insertAfter("#skin_url");


	// Default server
	$("#chooseServer").append('<option value="Default" disabled default selected style="display: none;">Default Server</option>');
	for (var i = 0; i < chooseServers.length; ++i) {
		var nameServer = chooseServers[i][0];
		var ipServer = chooseServers[i][1];
		$("#chooseServer").append(
			'<option value="ws://' + ipServer + '">' + nameServer + '</option>'
		);
	}
}

function joinCurrentServer(ipServer) {
	if (ipServer && ipServer.length > 0) {
		setCurrentServer(ipServer);
	}
}