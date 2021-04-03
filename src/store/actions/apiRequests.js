import axios from "axios";

export default {
    // GET_BOOKS_FROM_API({commit}) {
    //     return axios('http://localhost:3000/books', {
    //         method: "GET"
    //     })
    //         .then((products) => {
    //             commit('SET_BOOKS_ARRAY_TO_VUEX', products.data)
    //             return products
    //         })
    //         .catch((error) => {
    //                 console.log(error)
    //                 return error
    //             }
    //         )
    // },
    // await axios.post('{{ request_absolute_uri }}', formData, config)
    //     .then((response) => {
    //         this.availabilityMessage = response.data.message;
    //     }).catch((error) => {
    //         this.availabilityMessage = false;
    //         console.log(error);
    //     });
    // GET_BOOKS_FROM_API({commit}) {
    //     return axios('  http://localhost:3000/books', {
    //         method: "GET"
    //     })
    //         .then((products) => {
    //             commit('SET_BOOKS_ARRAY_TO_VUEX', products.data)
    //             return products
    //         })
    //         .catch((error) => {
    //                 console.log(error)
    //                 return error
    //             }
    //         )
    // },
    //  async GET_BOOKS_FROM_API({commit}) {
    //     const dataBooks = await axios('http://localhost:3000/books', {method: "GET"})
    //      commit('SET_BOOKS_ARRAY_TO_VUEX', dataBooks.data)
    //      return dataBooks
    // }
    async GET_BOOKS_FROM_API({commit}) {
        await axios('http://localhost:3000/books', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_BOOKS_ARRAY_TO_VUEX', products.data)
                return products
            })
            .catch((error) => {
                    console.log(error)
                    return error
                }
            )
    }
}