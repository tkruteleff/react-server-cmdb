import React, {useState} from 'react';

import styles from './AddServer.module.css';

const AddServer = () => {
    const [computerName, setComputerName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [fqdn, setFqdn] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [location, setLocation] = useState('');
    const [owner, setOwner] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <header>
                <p>Type in your server info</p>
            </header>
            <form>
                <div className={styles.div}>
                    <label className={styles.label}>Computer Name:</label>
                    <input type="text" className={styles.input} value={computerName} onChange={computerNameHandler}  />
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>IP Address:</label>
                    <input type="text" className={styles.input} value={ipAddress} onChange={ipAddressHandler} />
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>FQDN:</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>Operating System:</label>
                    <select>
                        <option value="Windows Server 2008">Windows Server 2008</option>
                        <option value="Windows Server 2008 R2">Windows Server 2008 R2</option>
                        <option value="Windows Server 2012">Windows Server 2012</option>
                        <option value="Windows Server 2012 R2">Windows Server 2012 R2</option>
                        <option value="Windows Server 2016">Windows Server 2016</option>
                        <option value="Windows Server 2019">Windows Server 2019</option>
                        <option value="Windows Server 2022">Windows Server 2022</option>
                    </select>
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>Location:</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>Owner:</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>Description:</label>
                    <input type="text" className={styles.input} />
                </div>
            </form>
        </div>
        
    )
};

export default AddServer;
