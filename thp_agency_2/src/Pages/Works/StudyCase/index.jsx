import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import clients from '../../../Components/Data/clients';
import ReactMarkdown from 'react-markdown'

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
          <div key={i} style={{textAlign: 'center'}}className="client">
            <>
              <ReactMarkdown>{currentClient.title}</ReactMarkdown>

              En détails : <br /> {currentClient.description}
            </>
          </div>
        )};
      })}
    </div>
  )
}

export default WorkSlug;
