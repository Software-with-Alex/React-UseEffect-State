import React, {useEffect, useState} from 'react';

// import userEvent from "@testing-library/user-event";


// class UserInfo extends Component{
//     constructor(props){
//         super(props)

//         this.state = {user: {}}

//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((res) => {
//           return res.json()
//         })
//         .then((data) => {
//             this.setState({user: data})
//         })
//     }

//     render(){
//         return(
//         <div>
//             my name is {this.state.user.name} hi
//         </div>)
        
//     }
// }

// export default UserInfo





//  function UserInfo() {

//     const [user, setUser] = useState({})
    

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             setUser(data)
//         })
//     })

//      return(
//          <div>
//             name: {user.name}
//             name: {user.name}
//             name: {user.name}
//          </div>
//      )
//  }

//  export default UserInfo


function UserInfo (){
        
    const [user, setUser] = useState({});
    const [userInputValue, setUserInputValue] = useState(1);
    
    const userChangedValue = (event) => {
        setUserInputValue(event.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userInputValue)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setUser(data)
        })
    }, [userInputValue]);
    return(
        <div>
            user: {user.name}
            <br />
            <input type="number" value={userInputValue} id={userInputValue} onChange={userChangedValue}/>
            <br />
            user: {user.email}
            <br />
            user: {user.phone}
            
        </div>
    )
}
 export default UserInfo






