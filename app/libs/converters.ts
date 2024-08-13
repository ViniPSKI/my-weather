export function toWeekday(data:any){
    return new Date(data * 1000).toLocaleDateString('pt-BR', {weekday: 'long'})
}