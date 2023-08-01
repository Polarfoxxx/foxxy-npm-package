# Foxxy-package
---
__Názov balíčka:__ foxxy-package  
__Popis:__ Tento balicek obsahuje zakladne komponenty pre vyvoj frontend vyvoja  
__Inštalácia:__ [npm i foxxy-package](https://www.npmjs.com/package/foxxy-package?activeTab=readme)  
__Licencia:__ MIT  

---
## Priklad pouzitia:   
__ButtonComponent:__  

```
  <ButtonComponent.ButtonBox>
    <ButtonComponent.Button {Argumenty}/>
  </ButtonComponent.ButtonBox>
```

### Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| text           | áno       | string                       | Názov Button. Max. 9 znakov!                        |
| variant_btn    | nie       | string                       | default, white, dark, funny, sun, ocean |
| border         | nie       | boolean                      | Určuje, či má Button mať okraj                      |
| round          | nie       | boolean                      | Určuje, či má Button mať zaoblené rohy              |
| lg             | nie       | boolean                      | Určuje, či má Button byť veľký (large)              |
| sm             | nie       | boolean                      | Určuje, či má Button byť malý (small)               |

__+ vsetky arg. obsahujuci element Button pre udalosti:__   


## Popis

--- 
__FormComponent:__  
  
```
 <FormComponent.Form {Argumenty}>
    <FormComponent.FormHeader formName='dsadsad'/>
    <FormComponent.FormInputs label='my input'/>
    <FormComponent.FormInputs label='my input'/>
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button  />
    </ButtonComponent.ButtonBox>
  </FormComponent.Form> 
```

### Argumenty:  
__formName: povinny argument!__ pre nazov Formulara.  
__variant_form:__ nepovinny argument, vatianta vzhladu, typ: __default, white, dark, funny__  
 
--- 
