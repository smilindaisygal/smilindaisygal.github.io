 

 // store the URL of the JSON we want to retrieve in a variable
 var requestURL = 'http://smilindaisygal.github.io/assignments/lesson-9/data/towndata.json';
    
 // create a new request object instance from the XMLHttpRequest constructor, using the new keyword
 var request = new XMLHttpRequest();

 // open a new request using the open() method
 request.open('GET', requestURL);

 // setting the responseType to JSON, so that XHR knows that the server will be returning JSON,
 // and that this should be converted behind the scenes into a JavaScript object
 request.responseType = 'json';
 request.send();

 // waiting for the response to return from the server, then dealing with it
 request.onload = function() {

//  Here we are storing the response to our request (available in the response property) in a variable
// called superHeroes; this variable will now contain the JavaScript object based on the JSON! 
 var townData = request.response;
 populateHeader(townData);
 showIndex(townData);
 }

 // Function to populate the Header
 function populateHeader(jsonObj) {
 var myH1 = document.createElement('h1');
 myH1.textContent = jsonObj['name'];
 header.appendChild(myH1);

 }

 // creates and displays the superhero cards
 function showIndex(jsonObj) {
 var index = jsonObj['towns'];
   
 for (var i = 0; i < index.length; i++) {
 var myArticle = document.createElement('article');
 var myH2 = document.createElement('h2');
 var myPara1 = document.createElement('p');
 var myPara2 = document.createElement('p');
 var myPara3 = document.createElement('p');
 var myPara4 = document.createElement('p');
 var myPara5 = document.createElement('p');
 var myList = document.createElement('ul');

 myH2.textContent = index[i].name;
 myPara1.textContent = 'Motto: ' + index[i].motto;
 myPara2.textContent = 'Year Founded: ' + index[i].yearFounded;
 myPara3.textContent = 'Current Population:' + index[i].currentPopulation;
 myPara4.textContent = 'Average Rainfall' + index[i].averageRainfall;
 myPara5.textContent = 'Events';
     
 var events = index[i].powers;
 for (var j = 0; j < events.length; j++) {
   var listItem = document.createElement('li');
   listItem.textContent = events[j];
   myList.appendChild(listItem);
 }

 myArticle.appendChild(myH2);
 myArticle.appendChild(myPara1);
 myArticle.appendChild(myPara2);
 myArticle.appendChild(myPara3);
 myArticle.appendChild(myPara4);
 myArticle.appendChild(myPara5);
 myArticle.appendChild(myList);

 section.appendChild(myArticle);
}
}
 

 
  
  
