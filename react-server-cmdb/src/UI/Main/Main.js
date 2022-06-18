import React, { Fragment, useState } from 'react';

import AddServer from '../../Components/Servers/AddServer';
import ServersList from '../../Components/Servers/ServersList';
import Modal from '../../UI/Modal/Modal';
import Button from '../Button';

const Main = () => {
    const [showModel, setShowModel] = useState(false);

    const openAddServerHandler = () => {
        setShowModel(true);
    };

    const closeAddServerHandler = () => {
        setShowModel(false);
    };

    return (
        <Fragment>
            <Button onClick={openAddServerHandler}>Add Server</Button>
            {showModel && <Modal onClose={closeAddServerHandler}>
                <AddServer cancel={closeAddServerHandler} />
            </Modal>}
            <ServersList />
        </Fragment>
    );
};

export default Main;