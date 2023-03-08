import axios from "axios";
import { User } from "@/types";
import { baseUrl } from "../constants";

const addMember = async (user: User): Promise<void> => {
  try {
    const response = await axios.post(`${baseUrl}/users`, user);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getMembers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${baseUrl}/users`);
  return response.data;
};

const getMembersById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${baseUrl}/users/${id}`);
  return response.data;
};

const updateMembers = async (id: string, user: User): Promise<User> => {
  const response = await axios.put<User>(
    `${baseUrl}/users/${id}`,
    user
  );
  return response.data;
};

const deleteMembers = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/users/${id}`);
};

export { getMembers, getMembersById, addMember, updateMembers, deleteMembers };
