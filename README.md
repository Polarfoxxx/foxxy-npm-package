# Foxxy-package
---
__Názov balíčka:__ foxxy-package  
__Popis:__ Tento balicek obsahuje zakladne komponenty pre vyvoj frontend vyvoja  
__Inštalácia:__ [npm i foxxy-package]()  
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
  import { ButtonComponent } from 'foxxy-package';  
```

```
  <ButtonComponent.ButtonBox>
    <ButtonComponent.Button text="click" {Argumenty}/>
  </ButtonComponent.ButtonBox>
```

## Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| text           | áno       | string                       | Názov Button. Max. 9 znakov!                       |
| variant_btn    | nie       | string                       | default, white, dark, funny, sun, ocean            |
| border         | nie       | boolean                      | Určuje, či má Button mať okraj                     |
| round          | nie       | boolean                      | Určuje, či má Button mať zaoblené rohy             |
| lg             | nie       | boolean                      | Určuje, či má Button byť veľký (large)             |
| sm             | nie       | boolean                      | Určuje, či má Button byť malý (small)              |

__+ vsetky arg. obsahujuci element Button pre udalosti:__   


--- 
__FormComponent:__  

```
  import { ButtonComponent, FormComponent } from 'foxxy-package';  
```
  
```
  <FormComponent.Form form_name='my Form' {Argumenty}>
    <FormComponent.FormHeader />
    <FormComponent.FormInputs {Argument pre input}/>
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button text="click me" {Argumenty pre ButtonComponent}/>
    </ButtonComponent.ButtonBox>
  </FormComponent.Form> 
```

## Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| form_name      | áno       | string                       | Názov Formulára.                                   |
| variant_form   | nie       | string                       | default, white, dark, funny                        | 

__+ vsetky arg. obsahujuci element Form pre udalosti:__   

__Argument pre inputs ( <FormComponent.FormInputs label='my input' /> )__

| Argument       | Povinný   | Typ                           | Popis                                             |
|----------------|-----------|------------------------------ |---------------------------------------------------|
| label          | nie       | string                        | Label pre input                                   |

--- 

__ModalComponent:__  
  
```
import { ButtonComponent, FormComponent, ModalComponent } from 'foxxy-package';  
```

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
          <ButtonComponent.Button text='click me' onClick={handleClick} {Argumenty pre ButtonComponent}/>
        </ButtonComponent.ButtonBox>
      </div>
  
        <ModalComponent.Modal show={show} setShow={setShow} {Argumenty}>
          <FormComponent.Form formName='me form' {Argumenty pre FormComponent} >
            <FormComponent.FormHeader />
            <FormComponent.FormInputs {Argumenty pre FormComponent (input)}/>
          <ButtonComponent.ButtonBox>
            <ButtonComponent.Button text='exit' onClick={handleClick} {Argumenty pre ButtonComponent}/>
          </ButtonComponent.ButtonBox>
          </FormComponent.Form>
        </ModalComponent.Modal>
    </div>
  )
}
export default App

```

## Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| variant_mdl    | nie       | string                       | default, white, dark                               |
| show           | áno       | boolean                      | show={show}                                        | 
| setShow        | áno       | SetStateAction               | setShow={setShow}                                  | 
 
--- 
__OffCanvasComponent:__  
  
```
import { ButtonComponent, OffCanvasComponent } from 'foxxy-package';  
```

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
        <ButtonComponent.Button text='click me' onClick={handleClick} {Argumenty pre ButtonComponent}/>
      </ButtonComponent.ButtonBox>
    </div>

    <OffCanvasComponent.OffCanvas show={show} setShow={setShow} position="left" {Argumenty}>
      <OffCanvasComponent.OffCanvasHeader>
        {textHeader}
      </OffCanvasComponent.OffCanvasHeader>
      <OffCanvasComponent.OffCanvasBody>
        {textBody}
      </OffCanvasComponent.OffCanvasBody>
      <OffCanvasComponent.OffCanvasButoonBox>
        <ButtonComponent.ButtonBox>
          <ButtonComponent.Button text='exit' onClick={handleClick} {Argumenty pre ButtonComponent}/>
        </ButtonComponent.ButtonBox>
      </OffCanvasComponent.OffCanvasButoonBox>
    </OffCanvasComponent.OffCanvas>
    </div>
  )
}
export default App

```

## Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| variant_offCnv | nie       | string                       | default, white, dark                               |
| position       | áno       | string                       | left, top, right                                   |
| show           | áno       | boolean                      | show={show}                                        | 
| setShow        | áno       | SetStateAction               | setShow={setShow}                                  | 

__textHeader:__ Vlozte nadpis OffCanvas, __typ: string__  
__textBody:__ Vlozte content OffCanvas,  __typ: string__  
 
--- 

__CarouselsComponent:__  

```
import { CarouselComponent } from 'foxxy-package';  
```  
  
```
      <CarouselComponent.Carousel {Argumenty}>
        <CarouselComponent.CarouselBox>
          <CarouselComponent.CarouselItem>
            <h1>1</h1>
          </CarouselComponent.CarouselItem>
          <CarouselComponent.CarouselItem>
            <h1>2</h1>
          </CarouselComponent.CarouselItem>
          <CarouselComponent.CarouselItem>
            <h1>3</h1>
          </CarouselComponent.CarouselItem>
        </CarouselComponent.CarouselBox>
      </CarouselComponent.Carousel>
```

## Argumenty:  

| Argument       | Povinný   | Typ                          | Popis                                              |
|----------------|-----------|------------------------------|----------------------------------------------------|
| variant_crs    | nie       | string                       | default, white, dark                               |

__Pridavanie poloziek do CarouselComponentu:__  
```
  <CarouselComponent.CarouselItem>
      {elemnet type: string}
  </CarouselComponent.CarouselItem>
```  

--- 
