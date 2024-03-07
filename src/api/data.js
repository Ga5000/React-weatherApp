
const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleDateString('en-US', { weekday: 'long' })} ${date.getDate()}, ${date.toLocaleDateString('en-US', { month: 'short' })}`;
};

const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export { formatDate,formatTime };