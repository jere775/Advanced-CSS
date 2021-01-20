import React from 'react'
import '.App.js';

//Medium and Hard
class BasicInfo extends React.Component{ 
    render() {
        return (
            <ul>
                {this.props.person.map(info => (
                    <div className="person">
                        <li className="top">Name: {info.Name}</li>
                        <li>Phone: {info.Phone}</li>
                        <li>Date of Birth: {info.DOB}</li>
                        <li>Job: {info.Job}</li>
                    </div>
                    )
                )
            }
            </ul>
        )
    }
}

export default BasicInfo;
