import React, { Fragment } from 'react';

const MOC_DATA = [
    {
        ipAddress: '192.168.1.1',
        computerName: 'testmachine01',
        fqdn: 'testmachine01.domain.local',
        operatingSystem: 'Windows Server 2022',
        location: 'Azure',
        organization: 'organization 1',
        businessOwner: 'Bic McOwner',
        techincalOwner: 'Tech McOwner',
        description: 'Some long description for the server'
    },
    {
        ipAddress: '192.168.1.2',
        computerName: 'testmachine02',
        fqdn: 'testmachine02.domain.local',
        operatingSystem: 'Windows Server 2022',
        location: 'On-Premises',
        organization: 'organization 2',
        businessOwner: 'Bic McOwner',
        techincalOwner: 'Tech McOwner',
        description: 'Some long description for the server'
    }
]

const ServerListItem = props => {

    const serverMapHandler = MOC_DATA.map((server) => (
        <li key={server.ipAddress}>
            <p>{server.ipAddress}</p>
            <p>{server.fqdn}</p>
            <p>{server.operatingSystem}</p>
            <p>{server.location}</p>
            <p>{server.organization}</p>
            <p>{server.businessOwner}</p>
            <p>{server.techincalOwner}</p>
            <p>{server.description}</p>
        </li>
    ))

    return (
        <Fragment>
            <ul>
                {serverMapHandler}
            </ul>
        </Fragment>
    );
};

export default ServerListItem;