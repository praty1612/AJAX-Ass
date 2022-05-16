console.log('AJAX Tutorial');


let Fetchbtn = document.getElementById('Fetchbtn');
Fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  console.log('You have clicked the Fetchbtn');
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //Open the object
  // xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1', true);

  // Use this for post request
  xhr.open('POST' , '	https://dummy.restapiexample.com/api/v1/create', true);
  xhr.getAllResponseHeaders('Content-type' , 'application/json' );

  //what to do on progress(optional)
  xhr.onprogress = function () {
    console.log('On progress');
  }

  // xhr.onreadystatechange = function(){
  //   console.log ("ready state is " , xhr.readyState);
  // }

  //what to do when response is ready
  xhr.onload = function () {
    if(this.status === 200){
      console.log(this.responseText);
    }
    else{
      console.log("some error occured");
    }
    
  }

  //send the request
  params = {"name":"test","salary":"123","age":"23"};
  xhr.send(params);

  console.log("We are Done");

}



let Popbtn = document.getElementById('Popbtn');
Popbtn.addEventListener('click', popHandler);

function popHandler(){
  console.log('You Have Clicled the popHandler ')
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //Open the object
  xhr.open('GET' , 'http://dummy.restapiexample.com/api/v1/employees', true);


  //what to do on progress(optional)
  xhr.onprogress = function () {
    console.log('On progress');
  }


  //what to do when response is ready
  xhr.onload = function () {
    if(this.status === 200){
     let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById('list');
      str = "";
      for (key in obj){
        str += '<li>${obj[key].employee_name}</li>'
      }
      list.innerHTML = str ;
    }
    else{
      console.log("some error occured");
    }
    
  }

  //send the request
  params = {"name":"test","salary":"123","age":"23"};
  xhr.send(params);

  console.log("We are Done");

}
