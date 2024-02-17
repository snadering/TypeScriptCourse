import "./App.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";

type Address = {
  id: string;
  zipCode: number;
  street: string;
  houseNumber: number;
};

type Person = {
  id: string;
  name: string;
  age: number;
  imageUrl: string;
  address: Address;
};

const GET_PEOPLE = gql`
  query getPeople {
    people {
      id
      name
      age
      address {
        id
        zipCode
        street
        houseNumber
      }
    }
  }
`;

const ADD_PERSON = gql`
  mutation AddPerson($name: String!, $age: Int!, $imageUrl: String, $addressInput: AddressInput) {
    createPerson(name: $name, age: $age, imageUrl: $imageUrl, addressInput: $addressInput) {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PEOPLE);
  const [addPerson, addPersonResponse] = useMutation(ADD_PERSON, {
    refetchQueries: [{ query: GET_PEOPLE }]
  });
  
  /*
  const handleAddPerson = () => {
    addPerson({ variables: person });
  };
  */
 const handleAddPerson = () => {
   addPerson({
     variables: {
       name: person.name,
       age: person.age,
       imageUrl: person.imageUrl,
       addressInput: {
         zipCode: person.address.zipCode,
         street: person.address.street,
         houseNumber: person.address.houseNumber,
        },
      },
    });
  };
  
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    imageUrl: "",
    address: {
      id: "",
      zipCode: 0,
      street: "",
      houseNumber: 0,
    },
  });
  if (loading || addPersonResponse.loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        {data.people.map((person: Person) => (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <p><strong>Zip:</strong> {person.address.zipCode}</p>
            <p><strong>Street:</strong> {person.address.street}</p>
            <p><strong>House number:</strong> {person.address.houseNumber}</p>
            <img width="100px" src={`/public/person${person.id}.png`} alt={`Person ${person.id} portrait`} />
            <hr />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />

      <div>


        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          placeholder="name"
        />
        <br />

        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          type="text"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
          placeholder="age"
        />
        <br />

        <label htmlFor="imageUrl">imageUrl</label>
        <br />
        <input
          id="imageUrl"
          type="text"
          value={person.imageUrl}
          onChange={(e) => setPerson({ ...person, imageUrl: e.target.value })}
          placeholder="imageUrl"
        />
        <br />

        <label htmlFor="zipCode">Zip Code</label>
        <br />
        <input
          id="zipCode"
          type="number"
          value={person.address.zipCode}
          onChange={(e) => setPerson({ ...person, address: { ...person.address, zipCode: parseInt(e.target.value) }, })}
          placeholder="zipcode"
        />
        <br />

        <label htmlFor="street">Street</label>
        <br />
        <input
          id="street"
          type="text"
          value={person.address.street}
          onChange={(e) => setPerson({ ...person, address: { ...person.address, street: e.target.value }, })}
          placeholder="street"
        />
        <br />

        <label htmlFor="houseNumber">House number</label>
        <br />
        <input
          id="houseNumber"
          type="number"
          value={person.address.houseNumber}
          onChange={(e) => setPerson({ ...person, address: { ...person.address, houseNumber: parseInt(e.target.value) }, })}
        />
        <br />
        <button onClick={handleAddPerson}>Add Person</button>
      </div>
    </>
  );
}

export default App;
