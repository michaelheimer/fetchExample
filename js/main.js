document.getElementById("getJoke").addEventListener('click', getJoke);
document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getJson);


function getJoke()
{
	fetch('http://api.icndb.com/jokes/random/6')
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
      let output = '<h2> Jokes </h2>';
      data.value.forEach(function(jokes){
      	output += `
           <ul>
  		     <li>ID: ${jokes.id}</li>
  		     <li>ID: ${jokes.joke}</li>

  		  </ul>
      	`;
      });
      document.getElementById('output').innerHTML = output;
	})
}

function getText()
{
   // console.log("function get joke called");
   // fetch("sample.txt")
   // .then(function(res){
   // 	return res.text();
   // })
   // .then(function(data){
   // 	console.log(data);
   // })
   fetch('sample.txt').
   then((res) => res.text())
   .then((data) => {
   	document.getElementById('output').innerHTML = data;
   })
   .catch((err) => console.log(err));
}
function getJson()
{
  fetch('user.json')
  .then((res) => res.json())
  .then((data) => {
  	let output = '<h2>Users</h2>';
  	data.forEach(function(user){
  		output +=`
  		<ul>
  		  <li>ID: ${user.id}</li>
  		  <li>Name: ${user.name}</li>
  		  <li>Age: ${user.age}</li>
        </ul>
  		  `;
  	});
  	document.getElementById('output').innerHTML = output;
  })
}

