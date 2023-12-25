
const dateTimeConverter = (dateTime)=>{
    // const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    // const hour = dateTime.getHours();
    // const minute = dateTime.getMinutes();
    return `${date}.${month}`
}

export default dateTimeConverter;