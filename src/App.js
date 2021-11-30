import "./App.css";
import contactsJSON from "./contacts.json"
import React, { useState } from "react";

const remainingContacts = [...contactsJSON]
const initAgenda = remainingContacts.splice(0, 5)


function App() {
  const [agenda, setAgenda] = useState(initAgenda);

  const addContact = ()=>{
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts.splice(randomIndex, 1)
  
    setAgenda(agenda.concat(randomContact))
   //setAgenda([ ...agenda, randomContact ])
  }

  const sortByName = ()=>{
    let sortContacts = agenda.sort((a, b) => a.name.localeCompare(b.name));
    setAgenda([...sortContacts]);
  }

  const sortByPopularity = ()=>{
    let sortContacts = agenda.sort((a, b)=> b.popularity - a.popularity)
    setAgenda([...sortContacts])
  }
  const removeContact =(index)=>{
    agenda.splice(index, 1)
    setAgenda([...agenda])
  }

 return <div className="App">
 <h1>IRONCONTACTS</h1>
 <button onClick={addContact}>Add random contact</button>
 <button onClick={sortByName}>Sort by name</button>
 <button onClick={sortByPopularity}>Sort by popularity</button>


    <table >
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Oscar Winner?</th>
        <th>Oscar Emmy?</th>

      </tr>
    </thead>

      <tbody>
        {agenda.map(contact =>{
          return(
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100px"/>
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity.toFixed(2)}</p>
              </td>
              <td>
                <p>{contact.wonOscar ? "🏆" : "X"}</p>
              </td>
              <td>
                <p>{contact.wonEmmy ? "🏆" : "X"}</p>
              </td>
              <td>
              <button onClick={(i) => removeContact(i)}>Remove contact</button>              </td>
            </tr>

          )
        })}
      </tbody>
  </table>
</div>;
}
export default App;