const Users = require("../models/user.model");
const Roles = require("../models/role.model");
const Places = require("../models/places.model");
const Accommodations = require("../models/accommodations.model");
const Reservations = require("../models/reservations.model");

const generateData = async () => {
  await Roles.bulkCreate(
    [
      { name: "guest", id: "e511d426-70f8-40de-a247-b754356a26bf" },
      { name: "host", id: "844879a2-eac6-4973-b115-1e9184ac1921" },
      { name: "admin", id: "e3966352-c77c-4483-b30e-9bf2acff7762" },
    ],
    { validate: true }
  );

  await Users.create({
    id: "6c43ac7a-9ffe-461b-9a4f-55cacbc1fc63",
    name: "Juanito",
    gender: "Masculino",
    birthdayDate: "2016-06-23",
    email: "sample@academlo.com",
    password: "$2b$10$EXB34AWjYZkbb6WLhfEome074/c/JzhL0/mon/sffXmJDc4qkq1PW", //1234
    phone: "",
    dni: "1234567891",
    roleId: "844879a2-eac6-4973-b115-1e9184ac1921",
    profileImg: "",
    status: "active",
    verified: false,
  });

  await Users.create({
    id: "0a2b3005-2714-4508-bf94-491914428c88",
    name: "Sample Name",
    gender: "Masculino",
    birthdayDate: "2016-06-23",
    email: "sampleEmail@academlo.com",
    password: "$2b$10$EXB34AWjYZkbb6WLhfEome074/c/JzhL0/mon/sffXmJDc4qkq1PW", //1234
    phone: "",
    dni: "1234567891",
    roleId: "e511d426-70f8-40de-a247-b754356a26bf",
    profileImg: "",
    status: "active",
    verified: false,
  });

  await Users.create({
    id: "d682f333-2fef-4c23-bf12-151ded1b1b6c",
    name: "Pacheco Moyano",
    gender: "Masculino",
    birthdayDate: "2016-06-23",
    email: "pacheco@academlo.com",
    password: "$2b$10$EXB34AWjYZkbb6WLhfEome074/c/JzhL0/mon/sffXmJDc4qkq1PW", //1234
    phone: "",
    dni: "1234567891",
    roleId: "e511d426-70f8-40de-a247-b754356a26bf",
    profileImg: "",
    status: "active",
    verified: false,
  });

  await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    name: "Sahid Kick",
    gender: "male",
    email: "sahid@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC", // root
    phone: "1234567890",
    birthdayDate: "2000-10-22",
    dni: "",
    address: "",
    roleId: "e3966352-c77c-4483-b30e-9bf2acff7762",
    profileImage: "asd.com",
    status: "active",
    verified: false,
  });

  await Places.bulkCreate([
    {
      id: "1ab9f5d9-7cbf-4b09-a819-a136859e457b",
      city: "Guadalajara",
      state: "Jalisco",
      country: "México",
      continent: "America",
    },
    {
      id: "765f4fec-5189-48a0-b597-99a003cd6d75",
      city: "Zapopan",
      state: "Jalisco",
      country: "México",
      continent: "America",
    },
    {
      id: "3436a556-6623-40ba-88b8-2e01009f9d82",
      city: "Suba",
      state: "Bogotá",
      country: "Colombia",
      continent: "America",
    },
    {
      id: "134a55b6-487c-46cc-a5b5-9392af20c205",
      city: "Medellín",
      state: "Antioquia",
      country: "Colombia",
      continent: "America",
    },
    {
      id: "3a230417-80ae-4232-a8ff-6fd50068a777",
      city: "Azcapotzalco",
      state: "CDMX",
      country: "México",
      continent: "America",
    },
    {
      id: "0d907427-7623-4ec9-8c6d-270bb92fbbe7",
      city: "Monterrey",
      state: "Muevo León",
      country: "México",
      continent: "America",
    },
  ]);

  await Accommodations.create({
    id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    title: "premium - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.0,
    hostId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    placeId: "765f4fec-5189-48a0-b597-99a003cd6d75",
    commision: 150.0,
  });

  await Accommodations.create({
    id: "35a42549-262e-4ad0-b6a9-82f281211992",
    title: "lorem ipsjum",
    description: "asdf",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.0,
    hostId: "6c43ac7a-9ffe-461b-9a4f-55cacbc1fc63",
    placeId: "765f4fec-5189-48a0-b597-99a003cd6d75",
    commision: 150.0,
  });

  await Reservations.create({
    id: "36da0ab3-3f31-473c-a42f-b88b9a83226a",
    userId: "6c43ac7a-9ffe-461b-9a4f-55cacbc1fc63",
    arrival: "2022-09-12 09:08:13.756 -0500",
    departure: "2022-10-12 09:08:13.756 -0500",
    accommodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    adults: 1,
  });

  await Reservations.create({
    id: "59651d5f-b174-4d80-a6e5-fe22458ff112",
    userId: "0a2b3005-2714-4508-bf94-491914428c88",
    arrival: "2022-09-12 09:08:13.756 -0500",
    departure: "2022-10-12 09:08:13.756 -0500",
    accommodationId: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    adults: 2,
  });
};

exports.generateData = generateData;
