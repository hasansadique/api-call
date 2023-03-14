let api = "DGJzK8fibILy1aPLgqHbQ7XY3BJHteG3ShVTxbaHKfw";

export const actionData = (page) => {
    console.log(page)
    return async function (dispatch) {
        let totalPages = `page=${page}&per_page=5`
        let response = await fetch(`https://api.unsplash.com/photos/?client_id=${api}` + totalPages)
        console.log(response)
        let data = await response.json();
        dispatch({
            type: "get",
            payload: data
        })
    }
}