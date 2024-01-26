function useStorage() {
 
    const setStorage = (value) => {
        localStorage.setItem("date", value);
        sessionStorage.setItem("date", value)
    }
    return {setStorage}
}

export default useStorage