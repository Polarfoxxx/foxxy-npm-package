# Foxxy-package
---
__Názov balíčka:__ foxxy-package  
__Popis:__ Tento balicek obsahuje zakladne komponenty pre vyvoj frontend vyvoja  
__Inštalácia:__ [npm i foxxy-package](https://www.npmjs.com/package/foxxy-package?activeTab=readme)  
__Licencia:__ MIT  
__Email:__ suchovsky.michal@gmail.com
__Obsahujuce komponenty__:
[ButtonComponent](https://github.com/Polarfoxxx/foxxy-npm-package/tree/npm_public/src/components/Button)
[FormComponent](https://github.com/Polarfoxxx/foxxy-npm-package/tree/npm_public/src/components/Form)
[ModalComponent](https://github.com/Polarfoxxx/foxxy-npm-package/tree/npm_public/src/components/Modal)
[OffCanvasComponent](https://github.com/Polarfoxxx/foxxy-npm-package/tree/npm_public/src/components/OffCanvas)
[CarouselComponent](https://github.com/Polarfoxxx/foxxy-npm-package/tree/npm_public/src/components/Carousel)

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

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| formName       | áno       | string                       | Názov Formulára.                                  |
| variant_form   | nie       | string                       | default, white, dark, funny | 
 
--- 
__ModalComponent:__  
  
```
function App() {
  const [show, setShow] = React.useState(false);
  const handleClick = (): void => {
    setShow(!show);
  };
  return (
    <div className="App">
      <div>
        <ButtonComponent.ButtonBox>
          <ButtonComponent.Button text='click me' onClick={handleClick} variant_btn='dark'/>
        </ButtonComponent.ButtonBox>
      </div>
  
        <ModalComponent.Modal show={show} setShow={setShow} {Argumenty}>
          <FormComponent.Form formName='me forrm'>
            <FormComponent.FormHeader  />
            <FormComponent.FormInputs />
          <ButtonComponent.ButtonBox>
            <ButtonComponent.Button round variant_btn='dark' text='exit' onClick={handleClick} />
          </ButtonComponent.ButtonBox>
          </FormComponent.Form>
        </ModalComponent.Modal>
    </div>
  )
}
export default App

```

### Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| variant_mdl    | nie       | string                       | default, white, dark                               |
| show           | áno       | boolean                      | show={show}                                        | 
| setShow        | áno       | SetStateAction               | setShow={setShow}                                  | 
 
--- 
