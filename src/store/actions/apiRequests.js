export default {
    // GET_BOOKS_ARRAY_FROM_API({commit}) {
    //     return fetch("../../books.json")
    //         .then(response => {
    //             console.log(response.books)
    //             commit('SET_BOOKS_ARRAY_TO_VUEX', response.books)
    //             return response.books
    //         })
    //         .catch((error) => {
    //                 console.log(error)
    //                 return error
    //             }
    //         )
    // },
    GET_BOOKS_ARRAY_FROM_API2 ({commit}) {

    fetch("../../books.json")
        .then(async response=> {
            commit('SET_BOOKS_ARRAY_TO_VUEX', response.books)
        })

    }
}