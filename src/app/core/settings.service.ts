import { Injectable, signal, computed } from '@angular/core';
type Config = {
  title:string,
  color:string,
  enableShop: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    private config = signal({
      title: 'Angular Shop',
      color: '#ff0000',
      enableShop: true
    })
    title = computed(()=>this.config().title);
    color = computed(()=>this.config().color);
    enableShop =computed(()=>this.config().enableShop);
    setProperty<K extends keyof Config>(propName:K,value:Config[K]){
      this.config.update((cfg)=>{
        const newCfg={...cfg,[propName]:value};
        return newCfg;
      })
    }

    /*setTitle(title:string){
      this.config.update((cfg)=>({...cfg,title}))
    }
    setColor(color:string){
      this.config.update((cfg)=>({...cfg,color}))
    }
    setEnableShop(enableShop:boolean){
      this.config.update((cfg)=>({...cfg,enableShop}))
    }*/
  
}
