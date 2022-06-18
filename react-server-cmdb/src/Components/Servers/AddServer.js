import React, {useState} from 'react';

import Button from '../../UI/Button';

import classes from './AddServer.module.css';

const AddServer = (props) => {
    const [newServer, setNewServer] = useState({
        ipAddress: "",
        computerName: "",
        fqdn: "",
        operatingSystem: "",
        location: "",
        organization: "",
        businessOwner: "",
        technicalOwner: "",
        description: ""

    })

    const addServerFormHandler = (event) => {
        const value = event.target.value;

        setNewServer({
            ...newServer,
            [event.target.name] : value
        }) 
    }

    const addServerFormSubmitHandler = (event) => {
        event.preventDefault();

        console.log(
            newServer
        )

        setNewServer({
            ipAddress: "",
            computerName: "",
            fqdn: "",
            operatingSystem: "",
            location: "",
            ogranization: "",
            businessOwner: "",
            technicalOwner: "",
            description: ""
        })
    } 


    return (
        <div>
            <header>
                <h3>Type in your server info</h3>
            </header>
            <form onSubmit={addServerFormSubmitHandler}>
                <div className={classes.div}>
                    <label className={classes.label}>IP Address:</label>
                    <input type="text" className={classes.input} name="ipAddress" value={newServer.ipAddress} onChange={addServerFormHandler} />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Computer Name:</label>
                    <input type="text" className={classes.input} name="computerName" value={newServer.computerName} onChange={addServerFormHandler}  />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>FQDN:</label>
                    <input type="text" className={classes.input} name="fqdn" value={newServer.fqdn} onChange={addServerFormHandler} />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Operating System:</label>
                    <select name="operatingSystem" value={newServer.operatingSystem} onChange={addServerFormHandler}>
                        <option></option>
                        <option value="Windows Server 2008" >Windows Server 2008</option>
                        <option value="Windows Server 2008 R2">Windows Server 2008 R2</option>
                        <option value="Windows Server 2012">Windows Server 2012</option>
                        <option value="Windows Server 2012 R2">Windows Server 2012 R2</option>
                        <option value="Windows Server 2016">Windows Server 2016</option>
                        <option value="Windows Server 2019">Windows Server 2019</option>
                        <option value="Windows Server 2022">Windows Server 2022</option>
                    </select>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Location:</label>
                    <input type="text" className={classes.input} name="location" value={newServer.location} onChange={addServerFormHandler} />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Organization:</label>
                    <select name="organization" value={newServer.organization} onChange={addServerFormHandler}>
                        <option></option>
                        <option value="Accountor Services" >Accountor Services</option>
                        <option value="Accountor Solutions">Accountor Solutions</option>
                        <option value="Accountor HR Services">Accountor HR Services</option>
                        <option value="Accountor Finago">Accountor Finago</option>
                    </select>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Business Owner:</label>
                    <input type="text" className={classes.input} name="owner" value={newServer.businessOwner} onChange={addServerFormHandler} />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Technical Owner:</label>
                    <input type="text" className={classes.input} name="owner" value={newServer.technicalOwner} onChange={addServerFormHandler} />
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>Description:</label>
                    <input type="text" className={classes.input} name="description" value={newServer.description} onChange={addServerFormHandler} />
                </div>
                <Button className={classes.button} type="submit" value="Submit" >Submit</Button>
                <Button className={classes.button} onClick={props.cancel}>Cancel</Button>
            </form>
        </div>
        
    )
};

export default AddServer;
