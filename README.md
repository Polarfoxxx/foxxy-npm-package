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
<span style="color: red;">text:</span> __povinny argument!__ pre nazov Button. __Max 9 znakov!__  
<span style="color: red;">variant_btn:</span> nepovinny argument, vatianta vzhladu, typ: __default, white, dark, funny, sun, ocean__  
<span style="color: red;">border:</span> nepovinny argument, vzhlad s borderom, typ: __boolean__  
<span style="color: red;">round:</span> nepovinny argument,vzhlad s radiusom, typ: __boolean__  
<span style="color: red;">lg:</span> nepovinny argument,velkost komponentu, typ: __boolean__  
<span style="color: red;">sm:</span> nepovinny argument,velkost komponentu, typ: __boolean__  
<span style="color: red;">vsetky arg. obsahujuci element Button:</span> 

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
<span style="color: red;">formName:</span> __povinny argument!__ pre nazov Formulara.  
<span style="color: red;">variant_form:</span> nepovinny argument, vatianta vzhladu, typ: __default, white, dark, funny__  
 
--- 
