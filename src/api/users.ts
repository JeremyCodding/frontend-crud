import { User } from "@/types"
import { baseUrl } from "../constants"

const addMember = async (user: User): Promise<void> => {
   
    return fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
      
}

    const getMembers = async (): Promise<User[]> => {
    return fetch(`${baseUrl}/users`)
      .then(response => response.json())
  };
  
  const getMembersById = async (id: number): Promise<User> => {
    return fetch(`${baseUrl}/users/${id}`)
      .then(response => response.json())
  };
  
  const updateMembers = async (id: string, user: User): Promise<User> => {
    return fetch(`${baseUrl}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
  };
  
  const deleteMembers = async (id: number): Promise<void> => {
    return fetch(`${baseUrl}/users/${id}`, {
      method: 'DELETE'
    })
      .then(() => undefined);
  };

export { getMembers, getMembersById, addMember, updateMembers, deleteMembers }