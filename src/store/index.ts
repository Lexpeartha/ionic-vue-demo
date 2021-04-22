import { createStore } from "vuex";

import { IProperty, propertyTags } from "@/types";

const store = createStore({
  state: {
    allProperties: [
      {
        id: 1,
        imageLink: "https://bit.ly/3sd3wIC",
        name: "Villa in Dedinje",
        isLikedByUser: false,
        rentMode: "rent",
        rating: 4.8,
        location: "Belgrade",
        tags: ["villa"] as propertyTags[],
        price: 3599.99,
      },
      {
        id: 2,
        imageLink: "https://bit.ly/3x7wYDe",
        name: "Villa in New Belgrade",
        isLikedByUser: false,
        rentMode: "rent",
        rating: 4.6,
        location: "Belgrade",
        tags: ["villa"] as propertyTags[],
        price: 4699.99,
      },
    ] as IProperty[],
  },
  getters: {
    getAllProperties(state) {
      return state.allProperties;
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
  },
});

export default store;
