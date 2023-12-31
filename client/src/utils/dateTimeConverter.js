
const dateTimeConverter = (dateTime)=>{
    // const year = dateTime.getFullYear();
    const month = (dateTime.getMonth() +1).toString();
    const date = dateTime.getDate().toString();
    if (month.length === 1){
        month = "0" + month;
    }
    if (date.length === 1){
        date = "0" + date;
    }
    // const hour = dateTime.getHours();
    // const minute = dateTime.getMinutes();
    return `${date}.${month}`
}

export default dateTimeConverter;