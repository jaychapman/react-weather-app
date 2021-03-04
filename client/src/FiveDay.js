import React from 'react';


const FiveDay = ({ temp1, temp2, temp3, temp4, temp5, condition1, condition2, condition3, condition4, condition5 }) => {


    const icon1 = () => {
        if(condition1 === 'Clear'){
            return <i className="fas fa-sun"></i>;
        }else if(condition1 === 'Rain'){
            return <i className="fas fa-cloud-showers-heavy"></i>;
        }else if(condition1 === 'Snow'){
            return <i className="fas fa-snowflake"></i>;
        }else {
            return <i className="fas fa-cloud"></i>;
        }
    }

    const icon2 = () => {
        if(condition2 === 'Clear'){
            return <i className="fas fa-sun"></i>;
        }else if(condition2 === 'Rain'){
            return <i className="fas fa-cloud-showers-heavy"></i>;
        }else if(condition2 === 'Snow'){
            return <i className="fas fa-snowflake"></i>;
        }else {
            return <i className="fas fa-cloud"></i>;
        }
    }

    const icon3 = () => {
        if(condition3 === 'Clear'){
            return <i className="fas fa-sun"></i>;
        }else if(condition3 === 'Rain'){
            return <i className="fas fa-cloud-showers-heavy"></i>;
        }else if(condition3 === 'Snow'){
            return <i className="fas fa-snowflake"></i>;
        }else {
            return <i className="fas fa-cloud"></i>;
        }
    }

    const icon4 = () => {
        if(condition4 === 'Clear'){
            return <i className="fas fa-sun"></i>;
        }else if(condition4 === 'Rain'){
            return <i className="fas fa-cloud-showers-heavy"></i>;
        }else if(condition4 === 'Snow'){
            return <i className="fas fa-snowflake"></i>;
        }else {
            return <i className="fas fa-cloud"></i>;
        }
    }

    const icon5 = () => {
        if(condition5 === 'Clear'){
            return <i className="fas fa-sun"></i>;
        }else if(condition5 === 'Rain'){
            return <i className="fas fa-cloud-showers-heavy"></i>;
        }else if(condition5 === 'Snow'){
            return <i className="fas fa-snowflake"></i>;
        }else {
            return <i className="fas fa-cloud"></i>;
        }
    }


        const today = new Date();
      
        let day1 = today.getDay()+1;
        let day2 = today.getDay()+2;
        let day3 = today.getDay()+3;
        let day4 = today.getDay()+4;
        let day5 = today.getDay()+5;

        let daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat","Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
    
        let dayOne = daylist[day1];
        let dayTwo = daylist[day2];
        let dayThree = daylist[day3];
        let dayFour = daylist[day4];
        let dayFive = daylist[day5];


    return(
        <div id="five-day">
            <h2>Five Day</h2>
            <p> {dayOne} &nbsp; {icon1()} &nbsp; {temp1}&deg;F</p>
            <p> {dayTwo} &nbsp; {icon2()} &nbsp; {temp2}&deg;F</p>
            <p> {dayThree} &nbsp; {icon3()} &nbsp; {temp3}&deg;F</p>
            <p> {dayFour} &nbsp; {icon4()} &nbsp; {temp4}&deg;F</p>
            <p> {dayFive} &nbsp; {icon5()} &nbsp; {temp5}&deg;F</p>
        </div>
    )
}

export default FiveDay;