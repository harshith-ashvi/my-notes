const userInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const userReducers = (state = userInitialState, action) => {
    switch (action) {
        default : {
            return {...state}
        }
    }
}

export default userReducers