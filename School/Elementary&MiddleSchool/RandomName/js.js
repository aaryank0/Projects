function generate() {
    var lastNames = ['Adams','Alexander','Allen','Alvarez','Anderson','Andrews','Armstrong','Arnold','Bailey','Baker','Barnes','Bell','Bennett','Berry','Black','Blaese','Bradley','Brooks','Brown','Bryant','Burns','Butler','Campbell','Carter','Castillo','Chapman','Chavez','Clark','Cole','Coleman','Corona','Collins','Cook','Cooper','Cox','Crawford','Cruz','Cunningham','Davis','Diaz','Dixon','Duncan','Dunn','Edwards','Elliott','Ellis','Evans','Ferguson','Fisher','Flores','Ford','Foster','Fox','Freeman','Garcia','Gardner','Gibson','Gonzales','Gonzalez','Gordon','Graham','Grant','Gray','Green','Griffin','Gutierrez','Hall','Hamilton','Harper','Harris','Harrison','Hart','Hawkins','Hayes','Henderson','Henry','Hernandez','Herrera','Hill','Holmes','Howard','Hudson','Hughes','Hunt','Hunter','Jackson','James','Jenkins','Jimenez','Johnson','Johnston','Jones','Jordan','Kelley','Kelly','Kennedy','Kim','King','Knight','Lane','Lawrence','Lee','Lewis','Long','Lopez','Lynch','Marshall','Martin','Mason','Matthews','Mcdonald','Medina','Mendoza','Meyer','Miller','Mills','Mitchell','Moore','Morales','Morgan','Morris','Morrison','Murphy','Murray','Nelson','Nguyen','Brien','Connor','Doherty','Gallagher','Moore','Neill','Quinn','Reilly','Ryan','Sullivan','Olson','Ortiz','Owens','Palmer','Parker','Patel','Patterson','Payne','Perry','Phillips','Porter','Powell','Price','Ramirez','Ramos','Reed','Reid','Reyes','Reynolds','Rice','Richards','Richardson','Riley','Rivera','Roberts','Robertson','Robinson','Rodriguez','Rogers','Romero','Rose','Ross','Ruiz','Russell','Ryan','Sanchez','Sanders','Scott','Shaw','Simmons','Simpson','Smith','Snyder','Spencer','Stephens','Stevens','Stewart','Stone','Sullivan','Taylor','Thomas','Thompson','Tucker','Turner','Vasquez','Wagner','Walker','Wallace','Walsh','Ward','Warren','Washington','Watson','Webb','Wells','West','White','Williams','Willis','Wilson','Wood','Woods','Wright','Young','Trelawney'];
    var boyNames= ['Albert','Tom','James','Matthew','Mark','Luke','John','David','Harold','Bob','Jack','Mike','Raymond','Cuthbert','Casper','Harry','Cameron','Warwick','Steve','Steven','Simon','Jeff','Zach','Chris','Christian','Matt','Mathias','Alex','Will','William','Forest','Clarke','Gregory','Joshua','Josh','Andy','Andrew','Rick','Richard','Rob','Robert','Mohammad','Hector','Reginald','Phillip','Phil','Pete','Roger','Brad','Shane','Daniel','Dan','Tristan','Roy','Gary','Tony','Toby','Barry','Graham','Kevin','Tommy','Sandie','Darth','Garth'];
    var girlNames  = ['Abby','Abigail','Amy','Alex','Alice','Alyssa','Amanda','Ava','Beth','Bethany','Brooke','Catherine','Chelsea','Clara','Crystal','Daisy','Elena','Eliza','Elizabeth','Ella','Ellen','Ellie','Elsie','Emily','Emma','Eva','Eve','Evelyn','Evie','Francesca','Georgia','Grace','Hannah','Heather','Isabel','Isabella','Izzy','Jasmine','Jenna','Jennifer','Jessica','Jessie','Julia','Katherine','Katie','Katy','Kayla','Keira','Lily','Lisa','Lucy','Madeleine','Molly','Morgan','Nancy','Naomi','Natalie','Natasha','Nicole','Olivia','Rachel','Rebecca','Rose','Rosie','Ruby','Ruth','Samantha','Sara','Sarah','Savannah','Sofia','Sophia','Stella','Stephanie','Summer','Tara','Vanessa','Victoria'];
    var boymiddels = ['James', 'John', 'William', 'Thomas', 'David', 'Robert', 'Edward', 'Peter', 'Lee', 'Christopher', 'Micheal', 'Alexander', 'Daniel'];
    var space = " ";
    var girlmiddels = ['Louise', 'Rose', 'Grace', 'Jane', 'Elizabeth', 'Anne', 'Ann', 'May', 'Marie', 'Amy', 'Catherine', 'Victoria'];
    var gender = document.getElementById("genderSelect").value;
    var randomBoyName = boyNames[Math.floor(Math.random() * boyNames.length)];
    var randomGirlName = girlNames[Math.floor(Math.random() * girlNames.length)];
    var allNames = boyNames.concat(girlNames);
    var randomName = allNames[Math.floor(Math.random() * allNames.length)];
    var randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    var middle = document.getElementById("middel");
    var boymiddle = boymiddels[Math.floor(Math.random() * boymiddels.length)];
    var girlmiddle = girlmiddels[Math.floor(Math.random() * girlmiddels.length)];
    var allmiddles = boymiddels.concat(girlmiddels);
    var allmiddle = allmiddles[Math.floor(Math.random() * allmiddles.length)];
    var output = document.getElementById("outputBox");
    if (gender == "0"){
        output.value = "Select a gender first!";
    }
    if (gender == "1"){
        if (middle.checked) {
            output.value = randomBoyName + space + boymiddle + space + randomLastName;
        }
        else {
            output.value = randomBoyName + space + randomLastName;
        }
    }
    if (gender == "2"){
        if (middle.checked) {
            output.value = randomGirlName + space + girlmiddle + space + randomLastName;
        }
        else{
            output.value = randomGirlName + space + randomLastName;
        }
    }
    if (gender == "3"){
        output.value = randomName + " " + randomLastName;
        if (middle.checked) {
            if (girlmiddels.includes(allmiddle)) {
                output.value = randomGirlName + " " + girlmiddle + " " + randomLastName;
            } 
            if (boymiddels.includes(allmiddle)) {
                output.value = randomBoyName + " " + boymiddle + " " + randomLastName;
            }
            else{
                output.value = randomName + " " + allmiddle + " " + randomLastName;
            }
        }
    }
    addToHistory();
} 
function addToHistory(){
    var name = document.getElementById("outputBox").value;
    if (name == "Select a gender first!"){
        $(".history").append("");
    }
    else{
        $(".history").append("<div class='historyItem'><p>"+name+"</p></div>");
    }
}
