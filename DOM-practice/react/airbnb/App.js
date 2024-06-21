import React from "react"
import Contacts from './Contacts'

const data = [
    {
    cName: "Mr. Whiskerson",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
},
    {
    cName: "Fluffykins",
    phone: "(212) 555-2345",
    email: "fluff@me.com"
},
    {
    cName: "Felix",
    phone: "(212) 555-4567",
    email: "thecat@hotmail.com"
},
    {
    cName: "Pumpkin",
    phone: "(0800)",
    email: "pumpkin@scrimba.com"
},
]
/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <Contacts/>
    )
}

export default App