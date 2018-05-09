const storeInformations = [
  {
    name: "Occitech store",
    phone: "+33 102 030 405",
    address: "35 Boulevard des Récollets, Toulouse",
    coordinates: {
      latitude: 43.584127,
      longitude: 1.441477
    }
  },
  {
    name: "capitole store",
    phone: "+33 102 030 405",
    address: "Capitole, Toulouse",
    coordinates: {
      latitude: 43.603266,
      longitude: 1.442261
    }
  },
  {
    name: "Université store",
    phone: "+33 102 030 405",
    address:
      "Université Toulouse 1 Capitole, Rue du Doyen-Gabriel-Marty, Toulouse",
    coordinates: {
      latitude: 43.606772,
      longitude: 1.437112
    }
  }
];

export default {
  Query: {
    stores: () => storeInformations
  },

  StoreInformation: {
    owner: (_, __, context) =>
      context.loadRandomUser().then(user => ({
        gender: user.gender.toUpperCase(),
        displayName: `${user.name.title} ${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture
      }))
  },

  StoreOwner: {
    picture: ({ picture }, { size }) =>
      picture.hasOwnProperty(size) ? picture[size] : null
  }
};
