import React,{ useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import firebase from "../firebase"

const Contacts = () => {

    var [contactObjects,setContactObjects] = useState({})
    var [currentId,setCurrentId] = useState('')

    useEffect(() => {
        // snapshot callback will occur whenever there will be an insert update
        // or delete
        firebase.database().ref('contacts').on('value',snapshot => {
            if(snapshot.val() != null){
                setContactObjects({})
            }
            else{
                setContactObjects({
                    ...snapshot.val()
                })                
            }
        })
    },[])//s`imilar to component did Mount

    const addoredit = obj => {
        if(currentId == ''){
            firebase.database().ref('contacts').push(obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentId('')
                    }
                })
                console.log(obj)
        }
        else{
            firebase.database().ref(`contacts/${currentId}`).set(obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentId('')
                    }
                })
                console.log(obj)
        }

    }

    const onDelete = key =>{
        if(window.confirm('Are you sure to delete the record')){
            firebase.database().ref(`contacts/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentId('')
                    }
                })
        }
    }

  return (
    <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Register Here</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-5'>
                <ContactForm {...({addoredit,currentId,contactObjects})}/>
            </div>
            <div className='col-md-7'>
                <table className='table table-borderless table-stripped'>
                    <thead className="thead-light">
                        <tr>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // If we were using array we can directly use map to 
                            // loop through the records
                            // this keys function will return an array
                            Object.keys(contactObjects).map(id =>{
                                return <tr key={id}>
                                <td>{contactObjects[id].fullName}</td>
                                <td>{contactObjects[id].mobile}</td>
                                <td>{contactObjects[id].email}</td>
                                <td>
                                    <a className='btn text-primary' onClick={() => {setCurrentId(id)}}>
                                        <i className='fas fa-pencil-alt'></i>                                
                                    </a>
                                    <a className='btn text-danger' onClick={() => {onDelete(id)}}>
                                        <i className='far fa-trash-alt'> </i>
                                    </a>
                                </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default Contacts;
