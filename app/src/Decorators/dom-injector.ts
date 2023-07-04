export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){ 
       
        let elemento: HTMLElement | null = null
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor)

            }
            return elemento;
        }
        
        //informamos que o object terá como propriedade o get
        Object.defineProperty(target, propertyKey, {get: getter})
    }
}