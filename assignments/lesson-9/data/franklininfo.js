var text = '{ "name":"Name: Franklin", "motto":"Where you will grow!",<br> "yearFounded":"Year Founded: 1788",<br> "currentPopulation":"Population: 30485",<br> "averageRainfall":"Average Rainfall: 21",<br> "events":"Events:<br>march 4: March to the Drum of Donuts,<br>September 5-11: Founder days<br>December 1-26: Christmas in the Heart"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 

// </script>
//     {
//       "name": "Franklin",
//       "motto": "Where you will grow!",
//       "yearFounded": 1788,
//       "currentPopulation": 30458,
//       "averageRainfall": 21,
//       "events" : [
//         "March 4: March to the Drum of Donuts",
//         "September 5 - 11: Founder Days",
//         "December 1 - 26: Christmas in the Heart"
//     },
