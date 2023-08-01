#Foxxy-package
---
__Názov balíčka:__ foxxy-package
__Popis:__ Tento balicek obsahuje zakladne komponenty pre vyvoj frontend vyvoja
__Inštalácia:__ [npm i foxxy-package](https://www.npmjs.com/package/foxxy-package?activeTab=readme)
__Licencia:__ MIT

---
##Priklad pouzitia: 
__ButtonComponent:__

```
  <ButtonComponent.ButtonBox>
    <ButtonComponent.Button {Argumenty}/>
  </ButtonComponent.ButtonBox>
```

###Argumenty:
__text: povinny argument!__ pre nazov Button. __Max 9 znakov!__
__variant_btn:__ nepovinny argument, vatianta vzhladu, typ: __default, white, dark, funny, sun, ocean__
__border:__ nepovinny argument, vzhlad s borderom, typ: __boolean__
__round:__ nepovinny argument,vzhlad s radiusom, typ: __boolean__
__lg:__ nepovinny argument,velkost komponentu, typ: __boolean__
__sm:__ nepovinny argument,velkost komponentu, typ: __boolean__
__vsetky arg. obsahujuci element Button:__ 

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

###Argumenty:
__formName: povinny argument!__ pre nazov Formulara.
__variant_form:__ nepovinny argument, vatianta vzhladu, typ: __default, white, dark, funny__

--- 
