//var year = getColumn("NBA winners ", "Year");
//var west = getColumn("NBA winners ", "Western Champion");
//var east = getColumn("NBA winners ", "Eastern Champion ");

//Making three list for NBA fianlists starting from year 1947

var year = [1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
var east = ["Philadelphia Warriors","Philadelphia Warriors","Washington Capitols","Syracuse Nationals","New York Knicks","New York Knicks","New York Knicks","Syracuse Nationals","Syracuse Nationals","Philadelphia Warriors","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Philadelphia Warriors","Boston Celtics","Boston Celtics","New York Knicks","Baltimore Bullets","New York Knicks","New York Knicks","Boston Celtics","Washington Bullets","Boston Celtics","Philadelphia 76ers","Washington Bullets","Washington Bullets","Philadelphia 76ers","Boston Celtics","Philadelphia 76ers","Philadelphia 76ers","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Detroit Pistons","Detroit Pistons","Detroit Pistons","Chicago Bulls","Chicago Bulls","Chicago Bulls","New York Knicks","Orlando Magic","Chicago Bulls","Chicago Bulls","Chicago Bulls","New York Knicks","Indiana Pacers","Philadelphia 76ers","New Jersey Nets","New Jersey Nets","Detroit Pistons","Detroit Pistons","Miami Heat","Cleveland Cavaliers","Boston Celtics","Orlando Magic","Boston Celtics","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Toronto Raptors","Miami Heat"];
var west = ["Chicago Stags","Baltimore Bullets","Minneapolis Lakers","Minneapolis Lakers","Rochester Royals","Minneapolis Lakers","Minneapolis Lakers","Minneapolis Lakers","Fort Wayne Pistons","Fort Wayne Pistons","St. Louis Hawks","St. Louis Hawks","Minneapolis Lakers","St. Louis Hawks","St. Louis Hawks","Los Angeles Lakers","Los Angeles Lakers","San Francisco Warriors","Los Angeles Lakers","Los Angeles Lakers","San Francisco Warriors","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Milwaukee Bucks","Los Angeles Lakers","Los Angeles Lakers","Milwaukee Bucks","Golden State Warriors","Phoenix Suns","Portland Trail Blazers","Seattle Supersonics","Seattle Supersonics","Los Angeles Lakers","Houston Rockets","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Houston Rockets","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Portland Trail Blazers","Los Angeles Lakers","Portland Trail Blazers","Phoenix Suns","Houston Rockets","Houston Rockets","Seattle Supersonics","Utah Jazz","Utah Jazz","San Antonio Spurs","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","San Antonio Spurs","Los Angeles Lakers","San Antonio Spurs","Dallas Mavericks","San Antonio Spurs","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Dallas Mavericks","Oklahoma City Thunder","San Antonio Spurs","San Antonio Spurs","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Los Angeles Lakers"];
var nbawinner = ["Philadelphia Warriors","Baltimore Bullets","Minneapolis Lakers","Minneapolis Lakers","Rochester Royals","Minneapolis Lakers","Minneapolis Lakers","Minneapolis Lakers","Syracuse Nationals","Philadelphia Warriors","Boston Celtics","St. Louis Hawks","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Philadelphia 76ers","Boston Celtics","Boston Celtics","New York Knicks","Milwaukee Bucks","Los Angeles Lakers","New York Knicks","Boston Celtics","Golden State Warriors","Boston Celtics","Portland Trail Blazers","Washington Bullets","Seattle SuperSonics","Los Angeles Lakers","Boston Celtics","Los Angeles Lakers","Philadelphia 76ers","Boston Celtics","Los Angeles Lakers","Boston Celtics","Los Angeles Lakers","Los Angeles Lakers","Detroit Pistons","Detroit Pistons","Chicago Bulls","Chicago Bulls","Chicago Bulls","Houston Rockets","Houston Rockets","Chicago Bulls","Chicago Bulls","Chicago Bulls","San Antonio Spurs","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","San Antonio Spurs","Detroit Pistons","San Antonio Spurs","Miami Heat","San Antonio Spurs","Boston Celtics","Los Angeles Lakers","Los Angeles Lakers","Dallas Mavericks","Miami Heat","Miami Heat","San Antonio Spurs","Golden State Warriors","Cleveland Cavaliers","Golden State Warriors","Golden State Warriors","Toronto Raptors","Los Angeles Lakers"];

// when return to Generator button is clicked, program will return to "generator " screen
onEvent("returntoGenButton", "click", function() {
  setScreen("generator");
});

// all this code will execute when "resultsButton" is clicked. 
onEvent("resultsButton", "click", function() {
  var yearInput = 0;
  
  setText("WesternText", " ");
  setText("EasternText", " ");
  setText("incorrectText", " ");
  // yearInput is equal to the user input
  yearInput = getNumber("yearText");
  // checks if the input is valid or not 
  if (yearInput < 1947) {
    setText("incorrectText", "Enter a year after 1947");
  }
  // function "findnbawinner" will find the NBA winners for user input year
  else {
    findnbawinner(yearInput);
  }  
});


 
function findnbawinner(pYear) {
  // pYear contains value supplied from the user
  // re-setting variables 
     var vResult = "false";
     var vEastwin = " ";
     var vWestwin = " ";
     setText("incorrectText", " ");
     // for each value in the year list, program will check if the input entered by user is equal to a year in 
     // the list " year" 
     for (var i = 0; i < year.length; i++) {
        if (pYear == year[i]) {
            setScreen("results");
            setText("displayyear", pYear);
            setText("EasternText", east[i]);
            setText("WesternText", west[i]);
            setText("nbawinner", nbawinner[i]);
            
            //assign nba winners to variables
            vEastwin = east[i];
            vWestwin = west[i];
            
            //assign true to variable so we know we had a match from the list
            vResult = "true";
        }
      }  // for loop ends here
      
    // if the input is not in the data list, throw an error to the user
     if (vResult == "false") {
        setText("incorrectText", ("Entered value is not valid"));
     } else {
        // there was match, vResult would be true
        // so now find the previous years wins for those teams in pYear
        findpreviouswins(vEastwin, vWestwin, pYear);  
     }
}   // findnbawinner function ends here



function findpreviouswins(pEast, pWest, pYear) {
  // pYear = contains the year given by the user
  // this function matches for eastern and western teams not in pYear 
  // because we know in 'pYear' the teams won, so we dont want to display those year
  // just display other years these two teams won in respective conference
  
  var vmatch = "false";
  var vyearswon = "";
  
  for (var i = 0; i < year.length; i++) {
    
    if (pYear !== year[i]) {   // only go to next IF statement when year does not match, i.e dont display matching year as it is done by previous function.
      if (pEast == east[i] && pWest == west[i] ) {   //  if given west,east team matches display the year
           vyearswon = vyearswon + year[i] + "   ";
           vmatch = "true";      
          }
    }
  }
  
  if (vmatch == "true") {
    setText("otherwinyears", vyearswon);
  } else
  {
    setText("otherwinyears", "Looks like these two teams played each other in the conference finals only in year "+pYear);
  }
}   // findpreviouswins ends here

