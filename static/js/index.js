//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	console.log("1");
	message = new Paho.MQTT.Message("1");
    message.destinationName = "joseedwin62@gmail.com/test1";
    client.send(message);
  
}
function LED1_Off(){	
	console.log("2");
	message = new Paho.MQTT.Message("2");
    message.destinationName = "joseedwin62@gmail.com/test1";
    client.send(message);
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "joseedwin62@gmail.com",
    password: "087918693EJCHL-",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("joseedwin62@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "joseedwin62@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log(message.payloadString);
	if (message.payloadString.split("=")[0] = "sensor1"){
		document.getElementById("sensor").innerHTML=message.payloadString;
	}else if(message.payloadString.split("=")[0] = "sensor2"){
		document.getElementById("sen2").innerHTML=message.payloadString;
		}
	
	
	
	}
  
  
