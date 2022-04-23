

export const Auth = (token, name) => {


    return {
        type: "AUTHENTICATE",
        payload: { token, name }
    }
}