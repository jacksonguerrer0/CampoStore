const isAuth = async () => {
    const token = sessionStorage.getItem('token')

    if (!token) {
        return false;
    }else {
        return true;
    }
}

export default isAuth;
