/**
 * 01. Create new Date Object 
 * 02. var now = new Date()
 * 03. Custom Date
 *     var someDate = new Date(Date.parse("May 25, 2004"));
 * 04. The Date.UTC() method also returns the millisecond representation of a date, but constructs that value
       using different information than Date.parse() . The arguments for Date.UTC() are the year, the zero -
       based month (January is 0, February is 1, and so on), the day of the month (1 through 31), and the hours
       (0 through 23), minutes, seconds, and milliseconds of the time. Of these arguments, only the first two
       (year and month) are required. If the day of the month isn ’ t supplied, it ’ s assumed to be 1, while all other
       omitted arguments are assumed to be 0. Here are two examples of Date.UTC() in action:

   05.Two dates are created in this example. The first date is for midnight (GMT) on January 1, 2000, which is
    represented by the year 2000 and the month 0 (which is January). Because the other arguments are filled
    in (the day of the month as 1 and everything else as 0), the result is the first day of the month at
    midnight. The second date represents May 5, 2005 at 5:55:55 PM GMT. Even though the date and time
    contain only fives, creating this date requires some different numbers: the month must be set to 4
    because months are zero - based, and the hour must be set to 17 because hours are represented as 0
   through 23. The rest of the arguments are as expected.

   06. As with the other reference types, the Date type overrides toLocaleString() , toString() , and
    valueOf() , though unlike the previous types, each method returns something different. The Date
    type ’ s toLocaleString() method returns the date and time in a format appropriate for the locale in
    which the browser is being run. This often means that the format includes AM or PM for the time and
    doesn ’ t include any time - zone information (the exact format varies from browser to browser). The
    toString() method typically returns the date and time with time - zone information, and the time is
    typically indicated in military time (hours ranging from 0 to 23). The following list displays the formats
    that various browsers use for toLocaleString() and toString() when representing the date/time of
    February 1, 2007 at midnight PST (Pacific Standard Time):
 */

var someDate = new Date(Date.parse("May 25, 2004"));
var someDate = new Date("May 25, 2004"); // Both are identical

//January 1, 2000 at midnight GMT
var y2k = new Date(Date.UTC(2000, 0));
//May 5, 2005 at 5:55:55 PM GMT
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

var date1 = new Date(2007, 0, 1); //”January 1, 2007”
var date2 = new Date(2007, 1, 1); //”February 1, 2007”
console.log(date1 < date2); //true
console.log(date1 > date2); //false


/**
 * 01. Date Formatting
 * 02. toDateString() — Displays the date ’ s day of the week, month, day of the month, and year in
       an implementation - specific format
  03. toTimeString() — Displays the date ’ s hours, minutes, seconds, and time zone in an
      implementation - specific format
  04.toLocaleDateString() — Displays the date ’ s day of the week, month, day of the month, and
     year in an implementation - and locale - specific format
     toLocaleTimeString() — Displays the date ’ s hours, minutes, and seconds in an
     implementation - specific format
  05.toUTCString() — Displays the complete UTC date in an implementation - specific format
 */






 /**
  * 
    01. getTime() Returns the milliseconds representation of the date;
        same as valueOf() .

    02. setTime( milliseconds ) Sets the milliseconds representation of the date, thus
        changing the entire date.
    03. getFullYear() Returns the four - digit year (2007 instead of just 07).
        getUTCFullYear() Returns the four - digit year of the UTC date value.
    04. setFullYear( year ) Sets the year of the date. The year must be given with
        four digits (2007 instead of just 07).
    05. setUTCFullYear( year ) Sets the year of the UTC date. The year must be given
        with four digits (2007 instead of just 07).
        getMonth() Returns the month of the date, where 0 represents
        January and 11 represents December.
    06. getUTCMonth() Returns the month of the UTC date, where 0 represents
        January and 11 represents December.
    07. setMonth( month ) Sets the month of the date, which is any number 0 or
        greater. Numbers greater than 11 add years.
    08. setUTCMonth( month ) Sets the month of the UTC date, which is any number 0
        or greater. Numbers greater than 11 add years.
    09. getDate() Returns the day of the month (1 through 31) for the date.
    10. getUTCDate() Returns the day of the month (1 through 31) for the UTC
        date.
    11. setDate( date ) Sets the day of the month for the date. If the date is
        greater than the number of days in the month, the
        month value also gets increased.

    12. setUTCDate( date ) Sets the day of the month for the UTC date. If the date is
        greater than the number of days in the month, the
        month value also gets increased.
    13. getDay() Returns the date ’ s day of the week as a number (where 0
        represents Sunday and 6 represents Saturday).
    14. getUTCDay() Returns the UTC date ’ s day of the week as a number
       (where 0 represents Sunday and 6 represents Saturday).
    15. getHours() Returns the date ’ s hours as a number between 0 and 23.
    16. getUTCHours() Returns the UTC date ’ s hours as a number between
        0 and 23.
    17. setHours( hours ) Sets the date ’ s hours. Setting the hours to a number
        greater than 23 also increments the day of the month.
    18. setUTCHours( hours ) Sets the UTC date ’ s hours. Setting the hours to a number
        greater than 23 also increments the day of the month.
    19. getMinutes() Returns the date ’ s minutes as a number between 0 and 59.
    20. getUTCMinutes() Returns the UTC date ’ s minutes as a number between 0
        and 59.
    21. setMinutes( minutes ) Sets the date ’ s minutes. Setting the minutes to a number
        greater than 59 also increments the hour.
    22. setUTCMinutes( minutes ) Sets the UTC date ’ s minutes. Setting the minutes to a
        number greater than 59 also increments the hour.
    23. getSeconds() Returns the date ’ s seconds as a number between 0 and 59.
    24. getUTCSeconds() Returns the UTC date ’ s seconds as a number between
        0 and 59.
    25. setSeconds( seconds ) Sets the date ’ s seconds. Setting the seconds to a number
        greater than 59 also increments the minutes.
        setUTCSeconds( seconds ) Sets the UTC date ’ s seconds. Setting the seconds to a
        number greater than 59 also increments the minutes.
    26. getMilliseconds() Returns the date ’ s milliseconds.
        getUTCMilliseconds() Returns the UTC date ’ s milliseconds.
    27. setMilliseconds( milliseconds ) Sets the date ’ s milliseconds.
    28. setUTCMilliseconds( milliseconds ) Sets the UTC date ’ s milliseconds.
    29. getTimezoneOffset() Returns the number of minutes that the local time zone
        is offset from UTC. For example, Eastern Standard Time
        returns 300. This value changes when an area goes into
        Daylight Saving Time.
  */

  