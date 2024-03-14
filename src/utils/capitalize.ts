export function capitalize(data: any) {
    return (data && data.length) ? `${data[0].toUpperCase()}${data.slice(1).toLocaleLowerCase()}` : null
}