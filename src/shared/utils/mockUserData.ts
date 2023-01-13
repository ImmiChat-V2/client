import { UserProfileInfoType } from "features/userprofile/models/UserProfileModel";
import { UserProfileInfoType } from "features/userprofile/models/UserProfileModel";

export const mockFriendList = [
  {
    id: 1,
    email: "fdsjsdf@mfds.com",
    firstName: "Khenen",
    lastName: "Jacqso",
  },
  {
    id: 2,
    email: "fd113df@mfds.com",
    firstName: "Rob",
    lastName: "Bob",
  },
  {
    id: 3,
    email: "zaswaejsdf@mfd6s.com",
    firstName: "Al",
    lastName: "Ringer",
  },
  {
    id: 4,
    email: "43rdr6f@mfds.com",
    firstName: "Dinger",
    lastName: "Foo",
  },
  {
    id: 1,
    email: "fdsjsdf@mfds.com",
    firstName: "Bar",
    lastName: "Foo",
  },
  {
    id: 2,
    email: "fd113df@mfds.com",
    firstName: "Zohn",
    lastName: "Jackquel",
  },
  {
    id: 3,
    email: "zaswaejsdf@mfd6s.com",
    firstName: "Dayviet",
    lastName: "Ehren",
  },
  {
    id: 4,
    email: "43rdr6f@mfds.com",
    firstName: "Cat",
    lastName: "Atrelch",
  },
  {
    id: 1,
    email: "fdsjsdf@mfds.com",
    firstName: "Forca",
    lastName: "Zorihn",
  },
  {
    id: 2,
    email: "fd113df@mfds.com",
    firstName: "Elren",
    lastName: "Girnt",
  },
  {
    id: 3,
    email: "zaswaejsdf@mfd6s.com",
    firstName: "Jack",
    lastName: "Prawn",
  },
  {
    id: 4,
    email: "43rdr6f@mfds.com",
    firstName: "Fish",
    lastName: "Food",
  },
];
const mockUserData: UserProfileInfoType = {
  id: 1,
  email: "fdsjsdf@mfds.com",
  firstName: "Extam",
  lastName: "Fracks",
  profilePic: "www.google.com",
  dateOfBirth: new Date(),
  language: "english",
  friends: mockFriendList,
};
