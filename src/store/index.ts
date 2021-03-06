import { createStore } from "vuex";

import { IProperty, propertyTags, rentMode } from "@/types";

const store = createStore({
  state: {
    allProperties: [
      {
        id: 1,
        imageLink: "https://bit.ly/3sd3wIC",
        name: "Villa in Dedinje",
        isLikedByUser: false,
        rentMode: "rent" as rentMode,
        rating: 4.8,
        location: "Belgrade",
        tags: ["villa"] as propertyTags[],
        price: 1099.99,
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis turpis mauris.
        Etiam viverra elit vitae nulla suscipit finibus. Vestibulum iaculis lectus malesuada aliquet fringilla.
        Nullam ac pellentesque est, ac dictum nunc. Mauris egestas!
        `,
      },
      {
        id: 2,
        imageLink: "https://bit.ly/3x7wYDe",
        name: "Villa in New Belgrade",
        isLikedByUser: false,
        rentMode: "rent" as rentMode,
        rating: 4.6,
        location: "Belgrade",
        tags: ["villa"] as propertyTags[],
        price: 1499.99,
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis turpis mauris.
        Etiam viverra elit vitae nulla suscipit finibus. Vestibulum iaculis lectus malesuada aliquet fringilla.
        Nullam ac pellentesque est, ac dictum nunc. Mauris egestas!
        `,
      },
      {
        id: 3,
        imageLink: "https://bit.ly/3nv2nex",
        name: "House in Zrenjanin",
        isLikedByUser: false,
        rentMode: "purchase" as rentMode,
        rating: 4.9,
        location: "Zrenjanin",
        tags: ["house"] as propertyTags[],
        price: 10499.99,
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis turpis mauris.
        Etiam viverra elit vitae nulla suscipit finibus. Vestibulum iaculis lectus malesuada aliquet fringilla.
        Nullam ac pellentesque est, ac dictum nunc. Mauris egestas!
        `,
      },
    ] as IProperty[],
  },
  getters: {
    getAllProperties(state) {
      return state.allProperties;
    },
    getAllPropertiesByLocation(state) {
      return (location: string) =>
        state.allProperties.filter(property => property.location == location);
    },
    getPropertyById(state) {
      return (id: number) =>
        state.allProperties.find(property => property.id == id);
    },
  },
  mutations: {
    LIKE_PROPERTY(state, property: IProperty) {
      property.isLikedByUser = true;
    },
    DISLIKE_PROPERTY(state, property: IProperty) {
      property.isLikedByUser = false;
    },
  },
  actions: {
    likeProperty({ getters, commit }, propertyId: number) {
      const property: IProperty = getters.getPropertyById(propertyId);
      commit("LIKE_PROPERTY", property);
    },
    dislikeProperty({ getters, commit }, propertyId: number) {
      const property: IProperty = getters.getPropertyById(propertyId);
      commit("DISLIKE_PROPERTY", property);
    },
    findPropertiesInLocation({ getters }, location: string) {
      return getters.getAllPropertiesByLocation(location);
    },
  },
});

export default store;
