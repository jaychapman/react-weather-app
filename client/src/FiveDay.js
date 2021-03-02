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

    return(
        <div id="five-day">
            <h2>Five Day</h2>
            <p>Mon: &nbsp; {icon1()} &nbsp; {temp1}&deg;F</p>
            <p>Tue: &nbsp; {icon2()} &nbsp; {temp2}&deg;F</p>
            <p>Wed: &nbsp; {icon3()} &nbsp; {temp3}&deg;F</p>
            <p>Thur: &nbsp; {icon4()} &nbsp; {temp4}&deg;F</p>
            <p>Fri: &nbsp; {icon5()} &nbsp; {temp5}&deg;F</p>
        </div>
    )
}

export default FiveDay;