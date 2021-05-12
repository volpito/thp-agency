import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import clients from '../../../Components/Data/clients';

const WorkSlug = () => {
  const {clientName} = useParams();
  const [currentClient, setCurrentClient] = useState(undefined)

  useEffect(() => {
    const foundClient = clients.find((client) => client.name + "-study-case" === clientName);
    setCurrentClient(foundClient);
  }, [clientName])


  return (
    <div id="main">

      {clients.reduce((client, i) => {
        if (currentClient !== undefined ) {
        return (
          <div key={i} className="client">
            <p>
              Client : <em>{currentClient.name}</em>
            </p>
            <p>
              Le projet : <strong>{currentClient.description}</strong>
            </p>
          </div>
        )};
      })}
    </div>
  )
}

export default WorkSlug;
