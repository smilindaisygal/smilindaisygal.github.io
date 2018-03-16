var text = '{ "name":"Name: Springfield", "motto":"Where everyone is lifted.", "yearFounded":"Year Founded: 1826", "currentPopulation":"Population: 17852", "averageRainfall":"Average Rainfall: 17", "events":"Events:<br>January 8: Spring into Winter<br>April 10-20: Celebration of Life<br>July 31-Aug 15: Dog Days of Summer Festival"}';
var obj = JSON.parse(text);


document.getElementById("springfieldinfo").innerHTML = obj.name + ",<br> " + obj.motto + ",<br>" + obj.yearFounded + ",<br>" + obj.currentPopulation
+",<br>" + obj.averageRainfall + ",<br>" + obj.events; 

// </script>
// //     Springfield
// Motto: Where everyone is lifted.

// Year Founded: 1826

// Current Population: 17852

// Average Rainfall: 17

// Events:

// January 8: Spring into Winter
// April 10-20: Celebration of Life
// July 31-Aug 15: Dog Days of Summer Festival
//     },
